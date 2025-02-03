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
import { usePageContext } from "../context/PageProvider";
import { fetchLastUpdateTime } from "@/app/utility/githubService";

const Footer = () => {
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [bounds, setBounds] = useState({ width: 0, height: 0 });
  const [lastUpdatedDate, setLastUpdatedDate] = useState<string | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const cardBounds = cardRef.current.getBoundingClientRect();
      setBounds({ width: cardBounds.width, height: cardBounds.height });
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchLastUpdateTime();
      setLastUpdatedDate(res);
    };

    fetchData();
  }, []);

  const trans = (x: number, y: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`;

  const calc = (x: number, y: number) => {
    const BUFFER = 30;
    return [
      -(y - window.innerHeight / 2) / BUFFER,
      (x - window.innerWidth / 2) / BUFFER,
      1,
    ];
  };

  const [props, set] = useSpring(() => ({
    xys: [0, 0],
    config: {
      tension: 170,
      mass: 1,
      friction: 26,
      precision: 0.01,
      velocity: 0,
    },
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

  const { currentPage } = usePageContext();
  console.log("currentPage", currentPage);

  if (currentPage === "Stack") {
    return null;
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`pt-[5em] w-[100%] relative flex justify-center items-end ${s.container}`}
    >
      <div className={`absolute inset-0 ${s.gradient} overflow-clip`}>
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
        className={`px-[3em] py-[2em] inline-flex flex-col relative my-[1.6em] rounded-[25px] gap-y-[2.1em]`}
      >
        <div className={`${s.background}`} />
        <div className="footer-cards flex flex-row justify-center gap-[1.5em]">
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
          <div className="flex items-center gap-x-[0.3em] text-[1rem]">
            <LuCopyright /> <span>2024 Maggie Weng.</span>
          </div>
          <div className="opacity-[0.65] text-[0.9rem] font-light items-end justify-between flex flex-wrap">
            <span className="mr-[1em]">
              Built with Next.js, TailwindCSS, Framer Motion, Three.js, lots of
              caffeine, and even more love.
            </span>
            <span className="text-[0.85rem]">
              {lastUpdatedDate === null
                ? "Loading last update time..."
                : "Last Updated by Maggie at " + lastUpdatedDate + " UTC"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
