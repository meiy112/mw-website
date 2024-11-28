import { LuCopyright } from "react-icons/lu";
import s from "./Footer.module.css";
import Clock from "./Clock";
import TradingCard from "./TradingCard";

const Footer = () => {
  return (
    <div className="mt-[1em] flex-grow flex justify-center items-center bg-red-300">
      <div
        className={`px-[3em] py-[2em] inline-flex flex-col relative my-[1.6em] rounded-[25px] gap-y-[2.1em] w-[88.5%]`}
      >
        <div className={s.background} />
        <div className="flex flex-row">
          <div className="flex flex-col items-end gap-y-[1.5em]">
            <TradingCard />
            <Clock />
          </div>
          <div>Hi</div>
          <div>Hi</div>
        </div>
        <div className="flex flex-col z-[1] gap-y-[0.3em]">
          <div className="flex items-center gap-x-[0.3em]">
            <LuCopyright /> <span>2024 Maggie Weng.</span>
          </div>
          <span className="opacity-[0.5] text-[0.95rem]">
            Built with Next.js, TailwindCSS, Framer Motion, React Three Fiber,
            lots of caffeine, and even more love.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
