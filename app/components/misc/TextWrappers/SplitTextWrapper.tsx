import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface SplitTextWrapperProps {
  children: string;
  animationConfig?: object;
}

const SplitTextWrapper: React.FC<SplitTextWrapperProps> = ({
  children,
  animationConfig = {},
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char" style={{ display: "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useLayoutEffect(() => {
    const chars = elementRef.current?.querySelectorAll(".char");

    if (chars && chars.length > 0) {
      gsap.from(chars, {
        opacity: 0,
        y: 100,
        ease: "back.out(1.7)",
        duration: 1,
        stagger: 0.05,
        ...animationConfig,
      });
    }
  }, [animationConfig]);

  return <div ref={elementRef}>{splitText(children)}</div>;
};

export default SplitTextWrapper;
