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
      <div className="relative z-100 tracking-[0.3px] w-[4.5vw] pl-[1.1vw] text-[0.87rem] max-w-[75px] h-[100%] rounded-[10em] ml-[1.2vw] bg-white font-bold flex items-center">
        {props.title}
      </div>
      <motion.div
        variants={buttonAnim}
        className="absolute right-[-10%] flex items-center justify-center aspect-square bg-white h-[100%] rounded-[50%]"
      >
        <LuArrowUpRight size={15} />
      </motion.div>

      {/*------------ filter ------------*/}
      <div className="w-full h-full overflow-hidden absolute">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="shadowed-goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="4"
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
