/* eslint-disable */
// Browserless prerender: render the React app to static HTML with react-dom/server
// at build time. No headless browser (Vercel's build container can't launch one),
// so this works in any environment. Runs as `postbuild`.
//
// Image imports are resolved to the real hashed URLs from CRA's asset-manifest,
// so prerendered <img src> matches the client bundle exactly (no hydration
// mismatch, no data-URI bloat).
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.join(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const ROUTES = ['/', '/oprava-pracek-praha', '/oprava-mycek-praha', '/oprava-susicek-praha'];

const attrEscape = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const jsonLdEscape = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

function imageManifestPlugin(imgMap) {
  return {
    name: 'image-manifest',
    setup(build) {
      const filter = /\.(png|jpe?g|gif|svg|webp|avif)$/;
      build.onResolve({ filter }, (args) => ({ path: args.path, namespace: 'img' }));
      build.onLoad({ filter: /.*/, namespace: 'img' }, (args) => {
        const base = path.basename(args.path);
        const url = imgMap[base] || '/static/media/' + base;
        return { contents: `export default ${JSON.stringify(url)};`, loader: 'js' };
      });
    },
  };
}

function buildHead(meta, siteName) {
  const parts = [];
  parts.push(`<title>${attrEscape(meta.title)}</title>`);
  parts.push(`<meta name="description" content="${attrEscape(meta.description)}">`);
  parts.push(`<link rel="canonical" href="${attrEscape(meta.canonical)}">`);
  parts.push(`<meta name="robots" content="index, follow">`);
  parts.push(`<meta property="og:site_name" content="${attrEscape(siteName)}">`);
  parts.push(`<meta property="og:title" content="${attrEscape(meta.title)}">`);
  parts.push(`<meta property="og:description" content="${attrEscape(meta.description)}">`);
  parts.push(`<meta property="og:url" content="${attrEscape(meta.canonical)}">`);
  parts.push(`<meta property="og:type" content="website">`);
  parts.push(`<meta property="og:locale" content="cs_CZ">`);
  parts.push(`<meta name="twitter:card" content="summary_large_image">`);
  for (const block of meta.jsonLd || []) {
    parts.push(`<script type="application/ld+json" data-seo-jsonld>${jsonLdEscape(block)}</script>`);
  }
  return parts.join('');
}

function stripDefaultHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>/i, '')
    .replace(/<meta\s+property="og:[^>]*>/gi, '')
    .replace(/<meta\s+name="twitter:[^>]*>/gi, '');
}

(async () => {
  const templatePath = path.join(BUILD, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('[prerender] build/index.html missing — run build first.');
    process.exit(1);
  }

  // Map "washing-machine.png" -> "/static/media/washing-machine.<hash>.png"
  const manifest = require(path.join(BUILD, 'asset-manifest.json')).files || {};
  const imgMap = {};
  for (const [key, url] of Object.entries(manifest)) imgMap[path.basename(key)] = url;

  const outfile = path.join(ROOT, 'node_modules', '.cache', 'ssr', 'ssr-bundle.cjs');
  fs.mkdirSync(path.dirname(outfile), { recursive: true });
  await esbuild.build({
    entryPoints: [path.join(ROOT, 'scripts', 'ssr-entry.jsx')],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    outfile,
    jsx: 'automatic',
    loader: { '.css': 'empty' },
    plugins: [imageManifestPlugin(imgMap)],
    logLevel: 'error',
  });

  const ssr = require(outfile);
  const template = fs.readFileSync(templatePath, 'utf8');

  for (const route of ROUTES) {
    const body = ssr.renderBody(route);
    if (body.length < 4000 || !/<h1[\s>]/i.test(body)) {
      console.error(`[prerender] route ${route} rendered too small / missing <h1> (${body.length} bytes) — refusing to ship.`);
      process.exit(1);
    }
    const head = buildHead(ssr.getMeta(route), ssr.siteName);
    let html = stripDefaultHead(template).replace('</head>', head + '</head>');
    html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

    const outDir = route === '/' ? BUILD : path.join(BUILD, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    console.log('[prerender] wrote', route === '/' ? '/index.html' : route + '/index.html');
  }
  console.log('[prerender] done —', ROUTES.length, 'routes (browserless).');
  process.exit(0);
})().catch((e) => {
  console.error('[prerender] fatal:', e);
  process.exit(1);
});
