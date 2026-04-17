const http = require('http');
const { spawn } = require('child_process');

const PROXY_PORT = 3000;
const NEXT_PORT = 3099;
let nextProcess = null;

function startNext() {
  if (nextProcess) {
    try { nextProcess.kill('SIGTERM'); } catch {}
  }
  nextProcess = spawn('node', ['/home/z/my-project/.next/standalone/server.js', '-p', String(NEXT_PORT)], {
    env: { ...process.env, PORT: String(NEXT_PORT) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  nextProcess.on('exit', () => {
    console.log('[proxy] Next.js exited, restarting in 3s...');
    nextProcess = null;
    setTimeout(startNext, 3000);
  });
  console.log('[proxy] Started Next.js PID:', nextProcess.pid);
}

const server = http.createServer((req, res) => {
  if (!nextProcess || nextProcess.killed) {
    res.writeHead(503, { 'Content-Type': 'text/html' });
    res.end('<html><body><h2>Starting server...</h2><script>setTimeout(()=>location.reload(),2000)</script></body></html>');
    return;
  }
  const opts = {
    hostname: '127.0.0.1',
    port: NEXT_PORT,
    path: req.url,
    method: req.method,
    headers: req.headers,
  };
  const proxy = http.request(opts, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });
  proxy.on('error', () => {
    res.writeHead(502, { 'Content-Type': 'text/html' });
    res.end('<html><body><h2>Bad Gateway</h2></body></html>');
  });
  req.pipe(proxy);
});

server.listen(PROXY_PORT, '0.0.0.0', () => {
  console.log('[proxy] Listening on 0.0.0.0:' + PROXY_PORT);
  startNext();
});

process.on('SIGTERM', () => { process.exit(0); });
process.on('SIGINT', () => { process.exit(0); });
