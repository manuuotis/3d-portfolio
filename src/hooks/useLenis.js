import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Disable on touch devices for better performance
      touchMultiplier: 2,
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