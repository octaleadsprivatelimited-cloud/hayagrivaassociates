# Hayagriva Associates – Land Surveying Website

## Scripts
- dev: run frontend at http://localhost:5173 (API proxied to :4000)
- server: run Express API at http://localhost:4000
- start: run both concurrently
- build: production build + generate dist/sitemap.xml
- preview: preview production build

## Environment (.env)
Create `.env` in project root (used by the server):

```
PORT=4000
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-pass
CONTACT_TO=info@hayagriva.com
SITE_URL=https://your-domain.com
```

## Run locally
```
npm install
npm run start
```
Open `http://localhost:5173`.

## Deployment
### Vercel
- Recommended: deploy the frontend as a static Vite app.
- Host the Express server separately (e.g., Render, Railway) and set the frontend `VITE_API_URL`/proxy accordingly if needed.
- Set env vars in Vercel for sitemap `SITE_URL` (optional).

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Host the Express server separately and set environment variables accordingly.

## Notes
- SEO via react-helmet-async per page, plus JSON-LD on Home.
- Sitemap generated post-build; also a default `public/sitemap.xml` and `public/robots.txt` included.
- Images are lazy-loaded where applicable; Swiper for hero slider; Framer Motion for mobile menu.

