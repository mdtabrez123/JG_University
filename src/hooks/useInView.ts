import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** 0–1: fraction of element visible before triggering */
  threshold?: number;
  /** Trigger only once (default: true) */
  once?: boolean;
  /** Margin around root, e.g. "0px 0px -80px 0px" */
  rootMargin?: string;
}

/**
 * Returns `true` once the referenced element enters the viewport.
 * Defaults to firing only once (ideal for entrance animations).
 */
export default function useInView(
  ref: React.RefObject<Element | null>,
  options: UseInViewOptions = {},
): boolean {
  const { threshold = 0.15, once = true, rootMargin = '0px' } = options;
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observerRef.current?.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observerRef.current.observe(el);

    return () => observerRef.current?.disconnect();
  }, [ref, threshold, once, rootMargin]);

  return inView;
}
