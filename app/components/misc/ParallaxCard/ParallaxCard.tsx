import { motion, useInView } from "framer-motion";
import { Inter, Raleway } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { LuBadgeAlert, LuMapPin } from "react-icons/lu";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import StudyShark from "./StudyShark";
import About from "./About";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default function ParallaxCard({ post }: { post: string }) {
  if (post === "about") {
    return <About />;
  } else if (post === "study shark") {
    return <StudyShark />;
  } else {
    return (
      <div className="w-[100%] h-[420px] rounded-[12px] flex justify-center items-center overflow-hidden">
        <img
          alt=""
          src={"/images/under-maintenance.jpg"}
          className="w-[100%]"
        />
      </div>
    );
  }
}

export function HoverMeComponent() {
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView == true) {
      setTimeout(() => {
        setIsClosing(true);
      }, 10000);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="gap-x-[5px] flex flex-row items-center font-medium text-[0.8rem] text-white glass-container-5 rounded-[60px] py-[2px] px-[10px]"
      variants={{
        open: {
          clipPath: "inset(0% 0% 0% 0% round 60px)",
          x: 0,
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delay: 1,
          },
        },
        closed: {
          clipPath: "inset(0% 81% 0% 3.5% round 60px)",
          x: 0,
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4,
            staggerDirection: -1,
          },
        },
      }}
      animate={isInView ? (isClosing ? "closed" : "open") : "closed"}
      initial="closed"
    >
      <LuBadgeAlert size={18} />
      <span>Hover over or tap me!</span>
    </motion.div>
  );
}
