import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const useSplitText = (selector: string, animationConfig = {}) => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(selector, { type: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        y: 100,
        ease: "back",
        duration: 1,
        stagger: 0.1,
        ...animationConfig,
      });

      return () => split.revert();
    }, elementRef);

    return () => ctx.revert();
  }, [selector, animationConfig]);

  return elementRef;
};
