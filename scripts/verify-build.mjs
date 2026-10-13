import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const routes=JSON.parse(fs.readFileSync('src/seo/routes.json','utf8'));
const files=routes.map(r=>({route:r.path,file:r.path==='/'?'dist/index.html':path.join('dist',`${r.path}.html`)}));
const failures=[];
let links=0;
for(const {route,file} of files){
 if(!fs.existsSync(file)){failures.push(`Missing page ${route}`);continue;}
 const html=fs.readFileSync(file,'utf8');
 if(!/<h1\b/.test(html)) failures.push(`Missing rendered heading: ${route}`);
 if(!/<link[^>]+rel="canonical"/.test(html)) failures.push(`Missing canonical: ${route}`);
 if(!/<meta[^>]+name="description"/.test(html)) failures.push(`Missing description: ${route}`);
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const m of html.matchAll(/\b(?:href|src|poster)="([^"]+)"/g)){
  const ref=m[1].replaceAll('&amp;','&');
  if(ref.startsWith('#')){if(!ids.has(ref.slice(1)))failures.push(`Missing anchor ${ref}: ${route}`);continue;}
  if(!ref.startsWith('/') || ref.startsWith('//'))continue;
  links++;
  const url=new URL(ref,'https://local.test');
  const name=decodeURIComponent(url.pathname);
  const target=path.join('dist',name);
  if(!fs.existsSync(target) && !fs.existsSync(`${target}.html`) && !(name==='/'&&fs.existsSync('dist/index.html'))) failures.push(`Missing target ${name}: ${route}`);
 }
}
assert.equal(new Set(failures).size,0,[...new Set(failures)].join('\n'));
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
assert.equal((sitemap.match(/<url>/g)||[]).length,routes.length);
assert.equal(sitemap.includes('example.com'),false);
assert.match(fs.readFileSync('dist/404.html','utf8'),/noindex,follow/);
console.log(`Verified ${routes.length} rendered pages, ${links} internal links/assets, sitemap and noindex 404 page.`);
