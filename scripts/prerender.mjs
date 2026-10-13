import fs from 'node:fs/promises';
import path from 'node:path';
import { render } from '../dist-ssr/entry-server.js';

const routes = JSON.parse(await fs.readFile('src/seo/routes.json', 'utf8'));
const template = await fs.readFile('dist/index.html', 'utf8');
for (const route of [...routes, { path: '/404' }]) {
  const { html, head } = await render(route.path);
  const tags = ['title', 'meta', 'link', 'script'].map((key) => head[key].toString()).join('\n');
  const document = template.replace(/<title>.*?<\/title>/, '').replace('</head>', `${tags}\n</head>`).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const file = route.path === '/' ? 'dist/index.html' : route.path === '/404' ? 'dist/404.html' : path.join('dist', `${route.path}.html`);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, document);
}
console.log(`Prerendered ${routes.length} pages with route-specific metadata and a 404 page.`);
