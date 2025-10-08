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
        threshold: 0.05, // Reduced from 0.1 - triggers earlier
        rootMargin: '100px 0px 100px 0px', // Animations start earlier - before viewport
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