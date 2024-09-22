"use client";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { buttonAnim } from "./GooButton.anim";
import { ButtonProps } from "./GooButton.d";

const GooButton = (props: ButtonProps) => {
  return (
    <motion.button
      whileHover="hover"
      className="mr-[3%] h-[1.9em] relative goo text-black flex items-center justify-center"
      onClick={props.onClick}
    >
      <div className="relative z-10 tracking-[0.3px] pl-[1.1vw] text-[0.87rem] w-[67px] h-[100%] rounded-[10em] ml-[1.2vw] bg-white font-bold flex items-center">
        {props.title}
      </div>
      <motion.div
        variants={buttonAnim}
        className="overflow-hidden absolute bg-white right-[-10%] flex items-center justify-center aspect-square h-[100%] rounded-[50%]"
      ></motion.div>
      <motion.div
        variants={buttonAnim}
        className="overflow-hidden absolute z-10 right-[-10%] flex items-center justify-center aspect-square h-[100%] rounded-[50%]"
      >
        <LuArrowUpRight className="absolute" size={15} />
      </motion.div>

      {/*------------ filter ------------*/}
      <div className="w-full h-full overflow-hidden absolute">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="shadowed-goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="6"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </div>
    </motion.button>
  );
};

export default GooButton;
