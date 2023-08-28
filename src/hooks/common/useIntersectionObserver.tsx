import { useRef, useEffect } from "react";

const useIntersectionObserver = (callback: (isVisible: boolean) => void) => {
  const targetRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        const entry = entries[0];
        callback(entry.isIntersecting);
        if (entry.isIntersecting) {
          observerInstance.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [callback]);

  return { targetRef };
};

export default useIntersectionObserver;
