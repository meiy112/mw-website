import { motion } from "framer-motion";
import s from "./TradingCard.module.css";
import { animated } from "react-spring";
import { useRef, useState, useEffect, RefObject } from "react";

const TradingCard = ({
  style,
  center,
  bounds,
  cardRef,
}: {
  style: { transform: any };
  center: any;
  bounds: any;
  cardRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <animated.div
      style={style}
      ref={cardRef}
      className={`w-[15.8em] flex aspect-[253/347] bg-white rounded-[15px] p-[0.48em] overflow-hidden box-border tradingCard ${s.card}`}
    >
      <motion.div
        className={`${s.glow} absolute inset-0 pointer-events-none`}
        style={{
          backgroundImage: `radial-gradient(
            circle at ${(center.x + 1) * (bounds.width / 2)}px ${
            (center.y + 1) * (bounds.height / 2)
          }px,
            #ffffff55,
            #0000000f
          )`,
        }}
      />
      <img
        src="/images/me/gallery.png"
        alt="me at cafe"
        className="object-cover object-top rounded-[8px]"
      />
    </animated.div>
  );
};

export default TradingCard;
