/**
 * Post-build script for Vercel deployment.
 * 1. Runs esbuild to bundle dist/server/server.js + ALL npm deps into a single self-contained file.
 * 2. Copies static client assets to .vercel/output/static/
 * 3. Writes the Vercel Build Output API config (.vercel/output/config.json)
 */
import fs from "node:fs";
import path from "node:path";
import { build as esbuild } from "esbuild";

const root = process.cwd();
const distClient = path.join(root, "dist/client");
const distServer = path.join(root, "dist/server");
const out = path.join(root, ".vercel/output");
const outStatic = path.join(out, "static");
const outFnDir = path.join(out, "functions/index.func");

// ── Clean previous output ───────────────────────────────────────────────────
if (fs.existsSync(out)) fs.rmSync(out, { recursive: true });
fs.mkdirSync(outFnDir, { recursive: true });
fs.mkdirSync(outStatic, { recursive: true });

// ── 1. Copy static client assets → .vercel/output/static/ ──────────────────
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

// ── 2. Bundle server + ALL npm deps into a single self-contained ESM file ───
console.log("⏳ Bundling server.js with esbuild (this may take a few seconds)...");
await esbuild({
  entryPoints: [path.join(distServer, "server.js")],
  bundle: true,
  platform: "node",
  target: "node20",
  format: "esm",
  outfile: path.join(outFnDir, "server.js"),
  // Only keep actual Node.js built-in modules external — bundle everything else
  external: [
    "node:*",
    // bare built-in aliases (no "node:" prefix)
    "async_hooks",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "crypto",
    "dns",
    "events",
    "fs",
    "http",
    "http2",
    "https",
    "inspector",
    "module",
    "net",
    "os",
    "path",
    "perf_hooks",
    "process",
    "querystring",
    "readline",
    "repl",
    "stream",
    "string_decoder",
    "timers",
    "tls",
    "tty",
    "url",
    "util",
    "v8",
    "vm",
    "wasi",
    "worker_threads",
    "zlib",
  ],
  // Force bundling even when packages declare "sideEffects: false"
  ignoreAnnotations: true,
  allowOverwrite: true,
  minify: false,
  logLevel: "warning",
  // Resolve relative asset imports from the dist/server directory
  absWorkingDir: distServer,
});
console.log("✓ Bundled self-contained server → .vercel/output/functions/index.func/server.js");

// ── 3. Write a thin adapter: Node.js req/res → Web Fetch API → Node.js res ──
const adapterCode = `
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
  try {
    const request = await toRequest(req);
    const response = await handler.fetch(request, {}, {});
    res.statusCode = response.status;
    for (const [k, v] of response.headers.entries()) {
      res.setHeader(k, v);
    }
    const body = await response.arrayBuffer();
    res.end(Buffer.from(body));
  } catch (err) {
    console.error("SSR handler error:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
`.trim();

fs.writeFileSync(path.join(outFnDir, "index.js"), adapterCode);
console.log("✓ Wrote adapter index.js (Node req/res → fetch bridge)");

// ── 4. Write package.json so Node treats the function dir as ESM ────────────
fs.writeFileSync(
  path.join(outFnDir, "package.json"),
  JSON.stringify({ type: "module" }, null, 2)
);

// ── 5. Write Vercel function config (.vc-config.json) ───────────────────────
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

// ── 6. Write root Vercel routing config ─────────────────────────────────────
fs.writeFileSync(
  path.join(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        // Serve pre-built static files from /assets/ directly
        { src: "^/assets/(.*)$", dest: "/assets/$1" },
        // Everything else goes to the SSR serverless function
        { src: "/(.*)", dest: "/index" },
      ],
    },
    null,
    2
  )
);
console.log("✓ Wrote .vercel/output/config.json");

console.log("\n🚀 Vercel Build Output ready at .vercel/output/");
