import { LuCopyright } from "react-icons/lu";
import s from "./Footer.module.css";
import Clock from "./Clock";
import TradingCard from "./TradingCard";
import Music from "./Music";
import Setup from "./Setup";
import CodingHours from "./CodingHours";
import StarsBackground from "./StarsBackground";
import { useSpring } from "react-spring";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const cardBounds = cardRef.current.getBoundingClientRect();
      setBounds({ width: cardBounds.width, height: cardBounds.height });
    }
  }, []);

  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const calc = (x: number, y: number) => {
    const BUFFER = 50;
    return [
      -(y - window.innerHeight / 2) / BUFFER,
      (x - window.innerWidth / 2) / BUFFER,
      1,
    ];
  };

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    set({ xys: calc(e.clientX, e.clientY) });

    if (!cardRef.current) return;

    const cardBounds = cardRef.current.getBoundingClientRect();
    setBounds({ width: cardBounds.width, height: cardBounds.height });

    const x = e.clientX - cardBounds.left;
    const y = e.clientY - cardBounds.top;

    setCenter({
      x: (x / cardBounds.width) * 2 - 1,
      y: (y / cardBounds.height) * 2 - 1,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`pt-[5em] w-[100%] relative flex justify-center items-end ${s.container}`}
    >
      <div className={`absolute inset-0 z-[0] ${s.gradient} overflow-clip`}>
        <div
          className={`bg-[#0971A6] absolute w-[28.5vw] h-[43vh] left-[5.3%] bottom-[-13%] ${s.blur400}`}
        />
        <div
          className={`bg-[#917DFA] absolute w-[23vw] h-[40vh] left-[23.5%] bottom-[25.5%] ${s.blur600}`}
        />
        <div
          className={`bg-[#F7AACB] opacity-[0.85] absolute w-[23vw] h-[31.2vh] right-[28.5%] bottom-[10.3%] ${s.blur400}`}
        />
        <div
          className={`bg-[#9575CD] opacity-[0.8] absolute w-[21vw] h-[35vh] left-[28.5%] bottom-[12.5%] ${s.blur400}`}
        />
      </div>
      <StarsBackground />
      <div
        className={`z-[1] px-[3em] py-[2em] inline-flex flex-col relative my-[1.6em] rounded-[25px] gap-y-[2.1em]`}
      >
        <div className={s.background} />
        <div className="flex flex-row z-[2] justify-center gap-[1.5em]">
          <div className="flex flex-col items-end gap-y-[1.5em]">
            <TradingCard
              style={{ transform: props.xys.to(trans) }}
              center={center}
              bounds={bounds}
              cardRef={cardRef}
            />
            <Clock />
          </div>
          <div className="flex flex-col items-end gap-y-[1.5em]">
            <Music />
            <CodingHours />
          </div>
          <div>
            <Setup />
          </div>
        </div>
        <div className="flex flex-col z-[2] gap-y-[0.3em] mt-[0.5em]">
          <div className="flex items-center gap-x-[0.3em] text-[0.95rem]">
            <LuCopyright /> <span>2024 Maggie Weng.</span>
          </div>
          <span className="opacity-[0.5] text-[0.88rem] font-light">
            Built with Next.js, TailwindCSS, Framer Motion, React Three Fiber,
            lots of caffeine, and even more love.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
