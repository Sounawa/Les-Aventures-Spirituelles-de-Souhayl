import { execSync, spawn } from 'child_process';

const PORT = 3001;
const NEXT_PORT = 3000;

let nextProcess: ReturnType<typeof spawn> | null = null;

function startNext() {
  // Kill any existing process
  if (nextProcess) {
    try {
      nextProcess.kill('SIGTERM');
    } catch {
      // ignore
    }
  }

  console.log(`[${new Date().toISOString()}] Starting Next.js dev server...`);
  nextProcess = spawn('npx', ['next', 'dev', '-p', String(NEXT_PORT)], {
    cwd: '/home/z/my-project',
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false,
  });

  nextProcess.stdout?.on('data', (data) => {
    const msg = data.toString().trim();
    if (msg) console.log(`[Next.js] ${msg}`);
  });

  nextProcess.stderr?.on('data', (data) => {
    const msg = data.toString().trim();
    if (msg) console.error(`[Next.js ERR] ${msg}`);
  });

  nextProcess.on('exit', (code) => {
    console.log(`[${new Date().toISOString()}] Next.js exited with code ${code}, restarting...`);
    nextProcess = null;
    setTimeout(startNext, 2000);
  });
}

function ensureNextAlive() {
  try {
    execSync(`curl -so /dev/null -w "%{http_code}" http://localhost:${NEXT_PORT}/`, {
      timeout: 3000,
    });
  } catch {
    if (!nextProcess || nextProcess.killed) {
      startNext();
    }
  }
}

// Simple HTTP server on PORT
const http = require('http');
const server = http.createServer((req: any, res: any) => {
  ensureNextAlive();

  // Wait a bit for Next.js to be ready
  setTimeout(() => {
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
  }, 500);
});

server.listen(PORT, () => {
  console.log(`Keep-alive service listening on port ${PORT}`);
  startNext();
  // Check every 10 seconds
  setInterval(ensureNextAlive, 10000);
});
