/**
 * Aether Mocker - local server
 *
 * Serves the production build (dist/) over your local network so you can
 * open the site on your phone while on the same Wi-Fi. No dependencies.
 *
 * Usage:
 *   npm run build
 *   node serve.js
 */

import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = Number(process.env.PORT) || 8000
const DIST_DIR = path.join(__dirname, 'dist')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.pdf':  'application/pdf',
  '.txt':  'text/plain; charset=utf-8',
}

function localIPs() {
  const out = []
  const nets = os.networkInterfaces()
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        out.push({ iface: name, address: net.address })
      }
    }
  }
  return out
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, buf) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end('Not found')
      return
    }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    })
    res.end(buf)
  })
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Method not allowed')
    return
  }

  const url = new URL(req.url, `http://localhost:${PORT}`)
  const urlPath = decodeURIComponent(url.pathname)

  const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '')
  const filePath = path.join(DIST_DIR, rel)
  if (!filePath.startsWith(DIST_DIR + path.sep) && filePath !== DIST_DIR) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Forbidden')
    return
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      if (!path.extname(rel)) {
        return sendFile(res, path.join(DIST_DIR, 'index.html'))
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end('Not found')
      return
    }
    sendFile(res, filePath)
  })
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n  Aether Mocker is running.`)
  console.log(`  Local:    http://localhost:${PORT}`)
  const ips = localIPs()
  if (ips.length === 0) {
    console.log(`  Network:  (no LAN interface found — are you on Wi-Fi?)`)
  } else {
    for (const { iface, address } of ips) {
      console.log(`  Network:  http://${address}:${PORT}   (${iface})`)
    }
  }
  console.log(`\n  Phone must be on the same Wi-Fi network.`)
  console.log(`  Stop:     Ctrl+C\n`)
})

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n  Port ${PORT} is already in use.`)
    console.error(`  Try: PORT=8001 node serve.js\n`)
    process.exit(1)
  }
  throw err
})