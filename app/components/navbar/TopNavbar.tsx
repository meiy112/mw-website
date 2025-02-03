import { FaStar } from "react-icons/fa6";
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
      <FaStar size={18} color={"white"} />
      <span>Mweng</span>
    </div>
  );
};

const Tag = () => {
  return (
    <div
      className={`bg-[#242324] flex items-center justify-center py-[0.1em] px-[1em] rounded-[1em]`}
    >
      <span className={`text-[0.88rem] font-bold ${s.tag}`}>Software Dev</span>
    </div>
  );
};

export default TopNavbar;
