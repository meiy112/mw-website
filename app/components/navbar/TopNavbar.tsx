import s from "./TopNavbar.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SIZE = 27;

export const EMOJIS = [
  <Image
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Hatching%20Chick.png"
    alt="Hatching Chick"
    width={SIZE}
    height={SIZE}
    key={0}
  />,
  <Image
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Duck.png"
    alt="Duck"
    width={SIZE}
    height={SIZE}
    key={1}
  />,
  <Image
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png"
    alt="Star"
    width={SIZE}
    height={SIZE}
    key={2}
  />,
  <Image
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Flying%20Saucer.png"
    alt="Flying Saucer"
    width={SIZE}
    height={SIZE}
    key={3}
  />,
  <Image
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Banana.png"
    alt="Banana"
    width="25"
    height="25"
    key={4}
  />,
  <Image
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png"
    alt="Rocket"
    width={SIZE}
    height={SIZE}
    key={5}
  />,
];

const TopNavbar = () => {
  const [index, setIndex] = useState(0);

  const onEmojiClick = () => {
    setIndex((prev) => (prev + 1) % 6);
  };

  return (
    <div
      className={`select-none w-[100%] h-[2.8em] pt-[0.1em] justify-between flex items-center px-[2em] text-[1rem] fixed top-0 backgroundblur-25 z-[21]`}
      style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.15)" }}
    >
      <div className="gap-x-[1em] flex items-center">
        <Logo />
        <Tag />
      </div>
      <motion.span
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="cursor-pointer"
        onClick={onEmojiClick}
      >
        {EMOJIS[index]}
      </motion.span>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="font-semibold flex gap-x-[0.75em] items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width="18"
        height="18"
        fill="white"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
      <span>Mweng</span>
    </div>
  );
};

const Tag = () => {
  return (
    <div
      className={`bg-[#242324] flex items-center justify-center py-[0.1em] px-[1em] rounded-[1em]`}
    >
      <span className={`text-[0.88rem] font-bold ${s.tag}`}>
        Engineer & Designer
      </span>
    </div>
  );
};

export default TopNavbar;
