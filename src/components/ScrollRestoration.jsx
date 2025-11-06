import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const location = useLocation();
  const previousPathname = useRef(location.pathname);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // On initial mount, check if we're coming from a page reload
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // Check if there's a saved scroll position for this page (from reload)
      const savedPosition = sessionStorage.getItem(`scrollPos_${location.pathname}`);
      if (savedPosition) {
        // Use a small delay to ensure content is loaded
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedPosition, 10),
            behavior: 'auto'
          });
        }, 50);
      } else {
        // Scroll to top on initial load
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      return;
    }

    // Check if pathname actually changed
    if (previousPathname.current !== location.pathname) {
      // Pathname changed - this is a new page navigation
      // Always scroll to top immediately when navigating to a different page
      window.scrollTo({ top: 0, behavior: 'auto' });
      
      // Update previous pathname
      previousPathname.current = location.pathname;
    }

    // Save scroll position on scroll (debounced)
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        if (scrollY > 0) {
          sessionStorage.setItem(`scrollPos_${location.pathname}`, scrollY.toString());
        }
      }, 100);
    };

    // Save scroll position before page unload (for page reload)
    const handleBeforeUnload = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        sessionStorage.setItem(`scrollPos_${location.pathname}`, scrollY.toString());
      }
    };

    // Add scroll listener to save position
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add beforeunload listener for page reload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);

  return null;
}
