import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { tracker } from '../analytics/index.js';

export default function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    tracker.trackPageView(pathname, document.title);
    let scrolled = false;
    const onScroll = () => {
      if (scrolled || window.innerHeight + window.scrollY < document.documentElement.scrollHeight * 0.9) return;
      scrolled = true;
      tracker.trackEvent('scroll', { percent_scrolled: 90 });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest?.('a[href]');
      if (!link || event.defaultPrevented) return;
      const href = link.getAttribute('href');
      const parameters = {
        placement: link.dataset.trackingLocation || (link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'page'),
        ...(link.dataset.service ? { service: link.dataset.service } : {}),
      };
      if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) tracker.trackLead('whatsapp', parameters);
      else if (href.startsWith('tel:')) tracker.trackLead('call', parameters);
      else if (href.startsWith('mailto:')) tracker.trackEvent('email_click', parameters);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return null;
}
