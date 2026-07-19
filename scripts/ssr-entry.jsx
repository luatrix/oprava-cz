import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from '../src/AppRoutes';
import { getPageMeta } from '../src/seo/pageMeta';
import { SITE } from '../src/seo/siteConfig';

// Bundled by esbuild at build time and required by scripts/prerender.js.
export function renderBody(pathname) {
  return renderToString(
    <StaticRouter location={pathname}>
      <AppRoutes />
    </StaticRouter>
  );
}

export function getMeta(pathname) {
  return getPageMeta(pathname);
}

export const origin = SITE.origin;
export const siteName = SITE.name;
