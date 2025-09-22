import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);

        // Track if element has ever been visible (for "once" behavior)
        if (isVisible && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '-10% 0px -10% 0px', // Start animation slightly before entering viewport
        ...options
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasIntersected, options]);

  return {
    elementRef,
    isIntersecting,
    hasIntersected
  };
};

// Hook specifically for animations that should only run once
export const useIntersectionAnimation = (options = {}) => {
  const { elementRef, hasIntersected } = useIntersectionObserver(options);
  return { elementRef, shouldAnimate: hasIntersected };
};