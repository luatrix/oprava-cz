import { SITE, businessJsonLd, faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from './siteConfig';
import { content, serviceBySlug } from './content';

// Single source of truth for per-route <head> metadata. Used by the build-time
// prerenderer to emit static head tags, and available to components if needed.
export function getPageMeta(pathname) {
  const service = serviceBySlug[pathname];
  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      canonical: SITE.origin + service.slug,
      jsonLd: [
        businessJsonLd(),
        serviceJsonLd({ name: service.shortName, description: service.intro, slug: service.slug }),
        faqJsonLd(service.faq),
        breadcrumbJsonLd([
          { name: 'Úvod', path: '/' },
          { name: service.shortName, path: service.slug },
        ]),
      ],
    };
  }
  return {
    title: content.home.metaTitle,
    description: content.home.metaDescription,
    canonical: SITE.origin + '/',
    jsonLd: [businessJsonLd(), faqJsonLd(content.home.faq)],
  };
}
