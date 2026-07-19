// Single source of truth for canonical identity + business NAP + JSON-LD.
// Canonical domain is the ONLY domain that should appear anywhere in the app.
export const SITE = {
  origin: 'https://dokonala-oprava.cz',
  name: 'Dokonalá Oprava',
  phone: '+420730520302',
  phoneDisplay: '+420 730 520 302',
  email: 'dokonalaoprava@gmail.com',
  street: 'Černokostelecká 1806/123',
  locality: 'Praha 10 – Strašnice',
  postalCode: '100 00',
  country: 'CZ',
  ico: '19307896',
  priceRange: '800–2000 Kč',
  geo: { lat: 50.0755, lng: 14.4378 },
  defaultTitle: 'Oprava praček, myček a sušiček v Praze | Dokonalá Oprava',
  defaultDescription:
    'Rychlý a férový servis praček, myček a sušiček po celé Praze. Výjezd zdarma, oprava často ještě dnes. Zavolejte +420 730 520 302.',
};

export const businessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': SITE.origin + '/#business',
  name: SITE.name,
  url: SITE.origin + '/',
  image: SITE.origin + '/logo.png',
  logo: SITE.origin + '/logo.png',
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: SITE.priceRange,
  currenciesAccepted: 'CZK',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.street,
    addressLocality: 'Praha',
    addressRegion: 'Praha',
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  areaServed: { '@type': 'City', name: 'Praha' },
  identifier: { '@type': 'PropertyValue', propertyID: 'IČO', value: SITE.ico },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '16:00' },
  ],
  knowsAbout: [
    'oprava praček',
    'oprava myček nádobí',
    'oprava sušiček',
    'servis domácích spotřebičů',
  ],
});

export const faqJsonLd = (items = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  })),
});

export const serviceJsonLd = ({ name, description, slug }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  name,
  description,
  url: SITE.origin + slug,
  areaServed: { '@type': 'City', name: 'Praha' },
  provider: { '@id': SITE.origin + '/#business' },
});

export const breadcrumbJsonLd = (trail = []) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: SITE.origin + t.path,
  })),
});
