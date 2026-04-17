import { execSync, spawn } from 'child_process';

const PORT = 3001;
const NEXT_PORT = 3000;

// Health check + restart Next.js if dead
function ensureNextAlive() {
  try {
    const result = execSync(`curl -so /dev/null -w "%{http_code}" http://localhost:${NEXT_PORT}/`, {
      timeout: 3000,
    }).toString().trim();
    if (result !== '200') throw new Error('not 200');
  } catch {
    console.log(`[${new Date().toISOString()}] Next.js not responding, restarting...`);
    const child = spawn('node', ['.next/standalone/server.js', '-p', String(NEXT_PORT)], {
      cwd: '/home/z/my-project',
      detached: true,
      stdio: 'ignore',
    });
    child.unref();
    console.log(`[${new Date().toISOString()}] Started Next.js PID: ${child.pid}`);
  }
}

// Simple HTTP server on PORT that also checks Next.js
const http = require('http');
const server = http.createServer((req: any, res: any) => {
  ensureNextAlive();
  // Proxy to Next.js
  const options = {
    hostname: 'localhost',
    port: NEXT_PORT,
    path: req.url,
    method: req.method,
    headers: req.headers,
  };
  const proxy = http.request(options, (proxyRes: any) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });
  proxy.on('error', () => {
    res.writeHead(502);
    res.end('Next.js starting...');
  });
  req.pipe(proxy);
});

server.listen(PORT, () => {
  console.log(`Keep-alive proxy listening on port ${PORT}, proxying to ${NEXT_PORT}`);
  ensureNextAlive();
  // Check every 5 seconds
  setInterval(ensureNextAlive, 5000);
});
