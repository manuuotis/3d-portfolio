import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: isMobile ? 0.4 : 0.6, // Even faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: !isMobile, // Disable smooth scroll on mobile for better performance
      mouseMultiplier: 1.2,
      smoothTouch: false, // Disable on touch devices for better performance
      touchMultiplier: 3,
      infinite: false,
    });

    // Connect Lenis with GSAP ScrollTrigger
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update ScrollTrigger when Lenis scrolls
    lenis.on('scroll', () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.update();
      }
    });

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);
};