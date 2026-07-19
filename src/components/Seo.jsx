import { useEffect } from 'react';
import { SITE } from '../seo/siteConfig';

// Dependency-free head manager. Upserts title/meta/canonical/OG and injects
// JSON-LD. Because the site is prerendered with a real browser at build time,
// these DOM mutations are captured into the static HTML that crawlers (and AI
// engines that never run JS) receive.
function upsertMeta(attr, key, content) {
  if (content == null) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({
  title,
  description,
  path = '/',
  image,
  jsonLd = [],
  noindex = false,
}) {
  const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  useEffect(() => {
    const url = SITE.origin + path;
    document.documentElement.lang = 'cs';
    if (title) document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    upsertMeta('property', 'og:site_name', SITE.name);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', 'cs_CZ');
    upsertMeta('property', 'og:image', image || SITE.origin + '/logo.png');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);

    // Replace only the JSON-LD blocks this component owns.
    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove());
    blocks.filter(Boolean).forEach((data) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute('data-seo-jsonld', '');
      el.textContent = JSON.stringify(data);
      document.head.appendChild(el);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, noindex, JSON.stringify(blocks)]);

  return null;
}
