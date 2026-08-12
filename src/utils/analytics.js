export function trackConversion(action, details = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'lead_action',
    lead_action: action,
    page_path: window.location.pathname,
    ...details,
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: 'lead',
      page_location: window.location.href,
      ...details,
    });
  }
}

export function trackedPhoneProps(placement) {
  return {
    href: 'tel:+420730520302',
    onClick: () => trackConversion('phone_click', { placement }),
  };
}

export function trackedWhatsAppProps(placement) {
  return {
    href: 'https://wa.me/420730520302?text=Dobr%C3%BD%20den%2C%20m%C3%A1m%20z%C3%A1jem%20o%20opravu%20spot%C5%99ebi%C4%8De.',
    target: '_blank',
    rel: 'noopener noreferrer',
    onClick: () => trackConversion('whatsapp_click', { placement }),
  };
}
