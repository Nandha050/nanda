/**
 * Post-build script for Vercel deployment.
 * Transforms the TanStack Start dist/ output into the .vercel/output/ Build Output API format.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const distClient = path.join(root, "dist/client");
const distServer = path.join(root, "dist/server");
const out = path.join(root, ".vercel/output");
const outStatic = path.join(out, "static");
const outFnDir = path.join(out, "functions/index.func");

// ── Clean previous output ──────────────────────────────────────────────────
if (fs.existsSync(out)) fs.rmSync(out, { recursive: true });
fs.mkdirSync(outFnDir, { recursive: true });
fs.mkdirSync(outStatic, { recursive: true });

// ── 1. Copy static client assets → .vercel/output/static/ ─────────────────
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

if (fs.existsSync(distClient)) {
  copyDir(distClient, outStatic);
  console.log("✓ Copied static assets → .vercel/output/static/");
}

// ── 2. Copy server bundle → .vercel/output/functions/index.func/ ──────────
copyDir(distServer, outFnDir);
console.log("✓ Copied server bundle → .vercel/output/functions/index.func/");

// Write package.json so Node treats the bundle as ESM (needed for import statements)
fs.writeFileSync(
  path.join(outFnDir, "package.json"),
  JSON.stringify({ type: "module" }, null, 2)
);
console.log("✓ Wrote package.json (type:module) inside function dir");

// ── 3. Write a thin adapter: converts Node.js req/res → Web Fetch → Node res ──
const adapterCode = `
import { createServer } from "node:http";
import handler from "./server.js";

// Convert a Node IncomingMessage to a WHATWG Request
async function toRequest(req) {
  const proto = req.headers["x-forwarded-proto"] ?? "https";
  const host = req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost";
  const url = new URL(req.url, \`\${proto}://\${host}\`);
  const init = {
    method: req.method,
    headers: new Headers(req.headers),
  };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = await new Promise((resolve) => {
      const chunks = [];
      req.on("data", (c) => chunks.push(c));
      req.on("end", () => resolve(Buffer.concat(chunks)));
    });
  }
  return new Request(url.toString(), init);
}

export default async function vercelHandler(req, res) {
  const request = await toRequest(req);
  const response = await handler.fetch(request, {}, {});
  res.statusCode = response.status;
  for (const [k, v] of response.headers.entries()) {
    res.setHeader(k, v);
  }
  const body = await response.arrayBuffer();
  res.end(Buffer.from(body));
}
`.trim();

fs.writeFileSync(path.join(outFnDir, "index.js"), adapterCode);
console.log("✓ Wrote adapter index.js (fetch → Node req/res bridge)");

// ── 4. Write function config (Node.js 20, entrypoint = index.js) ──────────
fs.writeFileSync(
  path.join(outFnDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.js",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      supportsResponseStreaming: false,
    },
    null,
    2
  )
);
console.log("✓ Wrote .vc-config.json");

// ── 4. Write root config (routes: assets first, everything else → function) ─
fs.writeFileSync(
  path.join(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        // Serve pre-built static files from /assets/ directly
        {
          src: "^/assets/(.*)$",
          dest: "/assets/$1",
        },
        // Everything else goes to the SSR function
        {
          src: "/(.*)",
          dest: "/index",
        },
      ],
    },
    null,
    2
  )
);
console.log("✓ Wrote .vercel/output/config.json");

console.log("\n🚀 Vercel output ready at .vercel/output/");
