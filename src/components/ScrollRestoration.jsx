import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    // Save current scroll position before navigation
    const saveScrollPosition = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        sessionStorage.setItem(`scrollPos_${location.pathname}`, scrollY.toString());
      }
    };

    // Restore scroll position after navigation
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem(`scrollPos_${location.pathname}`);
      if (savedPosition) {
        // Use requestAnimationFrame for smooth restoration
        requestAnimationFrame(() => {
          window.scrollTo({
            top: parseInt(savedPosition, 10),
            behavior: 'auto' // Instant scroll to avoid animation
          });
        });
      } else {
        // Scroll to top if no saved position
        window.scrollTo({
          top: 0,
          behavior: 'auto'
        });
      }
    };

    // Save scroll position on scroll (debounced)
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        if (scrollY > 0) {
          sessionStorage.setItem(`scrollPos_${location.pathname}`, scrollY.toString());
        }
      }, 100); // Debounce to avoid too many writes
    };

    // Save scroll position before page unload
    const handleBeforeUnload = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        sessionStorage.setItem(`scrollPos_${location.pathname}`, scrollY.toString());
      }
    };

    // Restore scroll position when location changes
    // Delay to ensure content is loaded
    const restoreTimeout = setTimeout(() => {
      restoreScrollPosition();
    }, 100);

    // Add scroll listener to save position
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add beforeunload listener
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(restoreTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Save scroll position before leaving
      saveScrollPosition();
    };
  }, [location.pathname]);

  return null;
}
