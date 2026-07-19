/* eslint-disable */
// Prerender the SPA into static, crawler-ready HTML using the system Chrome.
// Runs automatically after `npm run build` (postbuild). Serves the built app,
// visits each route with a real browser, waits for React + the Seo component to
// paint, then writes the fully-rendered DOM back to build/<route>/index.html.
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
// Prefer full puppeteer (bundled Chromium — works on CI/Vercel); fall back to
// puppeteer-core (uses the system Chrome found below).
let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (e) {
  puppeteer = require('puppeteer-core');
}

const ROOT = path.join(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const PORT = 4188;
const ROUTES = [
  '/',
  '/oprava-pracek-praha',
  '/oprava-mycek-praha',
  '/oprava-susicek-praha',
];

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ].filter(Boolean);
  return candidates.find((p) => {
    try {
      return fs.existsSync(p);
    } catch (e) {
      return false;
    }
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  if (!fs.existsSync(path.join(BUILD, 'index.html'))) {
    console.error('[prerender] build/index.html missing — run build first.');
    process.exit(1);
  }
  // System Chrome if present (fast, local dev); otherwise let full puppeteer
  // use its bundled Chromium (CI / Vercel).
  let executablePath = findChrome();
  if (!executablePath && typeof puppeteer.executablePath === 'function') {
    try {
      const bundled = puppeteer.executablePath();
      if (bundled && fs.existsSync(bundled)) executablePath = bundled;
    } catch (e) {
      /* no bundled browser */
    }
  }
  if (!executablePath) {
    console.error('[prerender] No Chrome/Chromium found. Install `puppeteer` or set CHROME_PATH.');
    process.exit(1);
  }
  console.log('[prerender] using browser:', executablePath);

  const serveBin = path.join(ROOT, 'node_modules', '.bin', 'serve');
  const server = spawn(serveBin, ['-s', BUILD, '-l', String(PORT), '--no-clipboard'], {
    stdio: 'ignore',
  });
  await sleep(2500);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const results = [];
  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      await page.waitForSelector('h1', { timeout: 15000 }).catch(() => {});
      await sleep(500); // let Seo effects flush into <head>
      let html = await page.content();
      if (!/^<!doctype/i.test(html)) html = '<!doctype html>\n' + html;
      results.push({ route, html });
      await page.close();
    }
  } catch (err) {
    console.error('[prerender] failed:', err.message);
    await browser.close();
    server.kill();
    process.exit(1);
  }

  await browser.close();
  server.kill();

  for (const { route, html } of results) {
    const outDir = route === '/' ? BUILD : path.join(BUILD, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    console.log('[prerender] wrote', route === '/' ? '/index.html' : route + '/index.html');
  }
  console.log('[prerender] done —', results.length, 'routes.');
  process.exit(0);
})().catch((e) => {
  console.error('[prerender] fatal:', e);
  process.exit(1);
});
