/**
 * SCROLL ANIMATION HOOK
 * Detecta cuando elementos entran al viewport y agrega clase 'visible'
 * Para usar con fade-in, slide-in, etc.
 */

import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean; // Si true, solo anima una vez
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Si once=true, dejar de observar después de animar
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          // Si once=false, remover clase cuando sale del viewport
          entry.target.classList.remove('visible');
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Hook para múltiples elementos (children stagger animation)
 */
export function useScrollAnimationGroup<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions & { staggerDelay?: number } = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    staggerDelay = 100, // delay entre cada elemento
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animar children con stagger
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * staggerDelay);
          });

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          children.forEach((child) => {
            child.classList.remove('visible');
          });
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [threshold, rootMargin, once, staggerDelay]);

  return ref;
}
