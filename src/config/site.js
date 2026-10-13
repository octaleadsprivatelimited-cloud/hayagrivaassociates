export const site = {
  url: (import.meta.env.VITE_SITE_URL || 'https://www.hayagrivaassociates.com').replace(/\/$/, ''),
  name: 'Hayagriva Associates',
  phone: '+919966139588',
  phoneDisplay: '+91 99661 39588',
  whatsapp: (import.meta.env.VITE_WHATSAPP_NUMBER || '919966139588').replace(/\D/g, ''),
  email: 'hayagrivaassociatesmncl@gmail.com',
  address: 'H.No 18-44/1, Vyshya Bhavan Back Side, Mancherial-504208, Telangana',
  maps: 'https://maps.app.goo.gl/f2x3Sahz2g7agmRSA',
  formEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || 'https://formspree.io/f/mnnlrpva',
};

export function whatsappUrl(service = 'land surveying') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello Hayagriva Associates, I need help with ${service}. My site is in: `)}`;
}

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  url: site.url,
  image: `${site.url}/images/hayagriva-logo.png`,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'H.No 18-44/1, Vyshya Bhavan Back Side',
    addressLocality: 'Mancherial',
    addressRegion: 'Telangana',
    postalCode: '504208',
    addressCountry: 'IN',
  },
  areaServed: { '@type': 'Place', name: 'Mancherial, Telangana' },
  hasMap: site.maps,
};
