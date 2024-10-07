import { LoadingBlockProps } from "./LoadingScreen.d";
import MouseTrail from "./MouseTrail";
import s from "./LoadingScreen.module.css";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const LoadingBlock: React.FC<LoadingBlockProps> = ({ text, delayClass }) => {
  return (
    <div
      className={`${delayClass} ${s.bounceIn} glass1 rounded-[3em] h-[2.5em] px-[1.5em] flex items-center justify-center text-[0.95rem]`}
      style={{ color: "rgba(255, 255, 255, 0.7" }}
    >
      {text}
    </div>
  );
};

const LoadingScreen = () => {
  const [activeTrail, setActiveTrail] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveTrail(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed w-[100%] h-[100%] bg-[#07080A] overflow-hidden ${s.slideUp}`}
    >
      <div className="relative z-30 flex items-center justify-center w-[100%] h-[100%] gap-x-[0.5em] pointer-events-none">
        <LoadingBlock text="Just" />
        <LoadingBlock text="A" delayClass={s.delay1} />
        <LoadingBlock text="Second..." delayClass={s.delay2} />
      </div>
      {activeTrail && (
        <div className="absolute z-20 w-[100%] h-[100%]">
          <MouseTrail />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
