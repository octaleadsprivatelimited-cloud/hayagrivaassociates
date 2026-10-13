import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import routes from './routes.json';
import { site } from '../config/site.js';

export default function RouteMetadata() {
  const { pathname } = useLocation();
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  const route = routes.find((item) => item.path === path);
  const title = route ? `${route.title} | ${site.name}` : `Page Unavailable | ${site.name}`;
  const url = `${site.url}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={route?.description || 'Contact Hayagriva Associates for land surveying and planning services in Mancherial.'} />
      <meta name="robots" content={route ? 'index,follow' : 'noindex,follow'} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={route?.description || ''} />
      <meta property="og:image" content={`${site.url}/images/hero2.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={route?.description || ''} />
      <meta name="twitter:image" content={`${site.url}/images/hero2.jpg`} />
    </Helmet>
  );
}
