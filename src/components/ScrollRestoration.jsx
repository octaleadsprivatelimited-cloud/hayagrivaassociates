import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);
  const mounted = useRef(false);

  useEffect(() => {
    let observer;
    const scrollToHash = () => {
      let id;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return false; }
      const target = id && document.getElementById(id);
      if (!target) return false;
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
      observer?.disconnect();
      return true;
    };
    const frame = requestAnimationFrame(() => {
      if (window.location.hash) {
        if (!scrollToHash()) {
          // Lazy route content may appear after the navigation effect.
          observer = new MutationObserver(scrollToHash);
          observer.observe(document.querySelector('main'), { childList: true, subtree: true });
        }
      } else if (!mounted.current) {
        let top = 0;
        try { top = Number(sessionStorage.getItem(`scrollPos_${pathname}`)) || 0; } catch { /* Optional storage. */ }
        window.scrollTo({ top, behavior: 'auto' });
      } else if (previousPath.current !== pathname) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      mounted.current = true;
      previousPath.current = pathname;
    });

    let timer;
    const save = () => {
      try { sessionStorage.setItem(`scrollPos_${pathname}`, String(window.scrollY)); } catch { /* Optional storage. */ }
    };
    const onScroll = () => { clearTimeout(timer); timer = setTimeout(save, 100); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('beforeunload', save);
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('beforeunload', save);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [pathname, hash]);

  return null;
}
