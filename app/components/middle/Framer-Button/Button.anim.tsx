import { Variants } from "framer-motion";
import { RANDOM_INT } from "./helpers";

export const buttonAnim: Variants = {
  init: {
    scale: 1,
    boxShadow: "0 0 0rem 0rem rgba(48, 119, 71, 0)",
    outline: "5px solid rgba(255, 255, 255, 0)",
    background:
      "radial-gradient(70% 90% at 50% 100%, rgb(31, 30, 31) 0%, rgb(31, 30, 31) 100%)",
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.3,
    },
  },
  anim: {
    scale: 1.1,
    boxShadow:
      "0 0 20px 5px rgba(255, 255, 255, 0.5), 0 2px 0 0 rgb(143, 193, 159) inset, 0 -2px 0 0 rgb(34, 147, 70) inset",
    outline: "7px solid rgba(143, 193, 159, 0.2)",
    background:
      "radial-gradient(70% 100% at 50% 110%, #DDE7CA 0%, rgb(93, 149, 111) 100%)",
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 0.5,
    },
  },
  tap: {
    scale: 1,
  },
};

export const labelAnim: Variants = {
  init: {
    background:
      "linear-gradient(90deg, rgb(117, 117, 117) 0%, rgb(80, 78, 80) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.5,
    },
  },
  anim: {
    background:
      "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 1,
    },
  },
};

export const svgAnim: Variants = {
  init: {},
  anim: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

export const pathAnim: Variants = {
  init: (i: number) => ({
    fill: "rgb(255, 255, 255)",
    opacity: (3 - i + 1) / 4,
    transition: {
      duration: 0.6,
    },
  }),
  anim: (i: number) => ({
    opacity: [null, 0.5, 1, i === 1 ? 1 : (3 - i + 1) / 4],
    scale: [null, 0.5, 1.3, 1],
    transition: {
      duration: 0.6,
      repeatDelay: 2.2,
      repeat: Infinity,
    },
  }),
};

export const highlightContainerAnim: Variants = {
  init: {
    scaleY: 1,
    scaleX: 1,
    transition: {
      ease: "linear",
      duration: 0.001,
    },
  },
  anim: {
    scaleY: [null, -1],
    scaleX: [null, -1],
    transition: {
      ease: "linear",
      duration: 0.001,
      delay: 1.3,
      repeatDelay: 1.3,
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};

export const highlightAnim: Variants = {
  init: {
    rotateZ: -65,
    transition: { ease: "linear", duration: 0.001 },
  },
  anim: {
    rotateZ: [null, 65],
    transition: {
      ease: [0.5, 1, 0.89, 1],
      duration: 1.3,
      repeat: Infinity,
    },
  },
};

export const sparkleAnim: Variants = {
  init: (i: number) => ({
    rotateZ: 0,
    opacity: 0,
    scale: 0,
    top: `calc(${RANDOM_INT(3, 9)} * 10%)`,
    left: `calc(${RANDOM_INT(3, 9)} * 10%)`,
    width: `calc(${RANDOM_INT(3, 9) / 10} * 14px)`,
    transformOrigin: `${
      Math.random() > 0.5 ? RANDOM_INT(30, 80) * -10 : RANDOM_INT(30, 80) * 10
    }% ${
      Math.random() > 0.5 ? RANDOM_INT(30, 80) * -10 : RANDOM_INT(30, 80) * 10
    }%`,
    transition: { duration: 0.5 },
  }),
  anim: (i: number) => ({
    scale: 1,
    rotateZ: i % 2 === 0 ? [0, 360] : [-360, 0],
    opacity: RANDOM_INT(5, 8) / 10,
    transition: {
      opacity: { duration: 1, ease: "anticipate" },
      scale: { duration: 2, ease: "anticipate" },
      ease: "linear",
      delay: RANDOM_INT(1, 10) * -1,
      duration: RANDOM_INT(10, 25),
      repeat: Infinity,
    },
  }),
};
