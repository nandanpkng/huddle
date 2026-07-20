import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { workspace } from './services/demo-data.js';
import { composeBrief } from './services/brief-engine.js';
import { extractActions } from './services/action-engine.js';

const port = Number(process.env.PORT || 3001);
const publicDir = fileURLToPath(new URL('./public/', import.meta.url));
const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json' };
function send(res, status, value, type = 'application/json') { res.writeHead(status, { 'content-type': `${type}; charset=utf-8`, 'cache-control': 'no-store' }); res.end(Buffer.isBuffer(value) || typeof value === 'string' ? value : JSON.stringify(value)); }
async function readJson(req) { let raw = ''; for await (const part of req) raw += part; return raw ? JSON.parse(raw) : {}; }

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (req.method === 'GET' && url.pathname === '/api/workspace') return send(res, 200, workspace);
    if (req.method === 'POST' && url.pathname === '/api/briefs/generate') return send(res, 200, composeBrief(workspace));
    if (req.method === 'POST' && url.pathname === '/api/actions/extract') { const input = await readJson(req); return send(res, 200, extractActions(input.transcript || workspace.transcript)); }
    if (req.method === 'GET') { const file = normalize(join(publicDir, url.pathname === '/' ? 'index.html' : url.pathname)); if (!file.startsWith(publicDir)) return send(res, 403, 'Forbidden', 'text/plain'); return send(res, 200, await readFile(file), mime[extname(file)] || 'application/octet-stream'); }
    send(res, 404, { error: 'Not found' });
  } catch (error) { send(res, 500, { error: error.message || 'Unexpected server error' }); }
}).listen(port, () => console.log(`Huddle listening at http://localhost:${port}`));
