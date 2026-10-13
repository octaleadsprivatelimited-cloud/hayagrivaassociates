/* Use the same route registry as the application metadata and prerender step. */
const fs = require('fs');
const path = require('path');
const routes = require('../src/seo/routes.json');
const { loadEnv } = require('vite');
const env = loadEnv('production', process.cwd(), '');
const rawUrl = process.env.VITE_SITE_URL || process.env.SITE_URL || env.VITE_SITE_URL || 'https://www.hayagrivaassociates.com';
const base = new URL(rawUrl);
if (!['https:', 'http:'].includes(base.protocol) || base.pathname !== '/' || base.search || base.hash) throw new Error('SITE_URL must be a site origin');
const baseUrl = base.origin;
const content = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(({path:route}) => `  <url><loc>${baseUrl}${route}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.mkdirSync('dist', {recursive:true});
fs.writeFileSync(path.join('dist','sitemap.xml'), content);
fs.writeFileSync(path.join('dist','robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
console.log(`Generated sitemap and robots.txt for ${baseUrl} (${routes.length} routes).`);
