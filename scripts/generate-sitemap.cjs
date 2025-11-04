/* Simple sitemap generator writing to dist/sitemap.xml after build */
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.SITE_URL || 'https://example.com';
const routes = [
  '/', '/about', '/services', '/portfolio', '/blog', '/contact', '/pricing', '/testimonials', '/faq', '/careers',
  '/services/dgps-land-survey', '/services/digital-land-survey', '/services/dtcp-layouts', '/services/enjoyment-survey',
  '/services/sub-division', '/services/survey-number-demarcation', '/services/registration-plans-location-sketch',
  '/land-surveying', '/boundary-surveying', '/plot-demarcation', '/land-title-surveys', '/topographic-surveys'
];

const content = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `  <url><loc>${BASE_URL}${r}</loc></url>`).join('\n')}\n</urlset>\n`;

const outDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), content, 'utf8');
console.log('Sitemap generated at dist/sitemap.xml');

