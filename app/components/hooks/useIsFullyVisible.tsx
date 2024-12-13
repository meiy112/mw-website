import { useEffect, useState, useCallback } from "react";

function useIsFullyVisible(ref: React.RefObject<HTMLElement>, threshold = 1.0) {
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  const recalculateVisibility = useCallback(() => {
    if (ref.current && observer) {
      observer.disconnect();
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  useEffect(() => {
    const newObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFullyVisible(
          entry.isIntersecting && entry.intersectionRatio >= threshold
        );
      },
      { threshold }
    );

    if (ref.current) {
      newObserver.observe(ref.current);
    }

    setObserver(newObserver);

    return () => {
      newObserver.disconnect();
    };
  }, [ref, threshold]);

  return { isFullyVisible, recalculateVisibility };
}

export default useIsFullyVisible;
