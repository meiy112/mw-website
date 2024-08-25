import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function Photo(props: any) {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-165, 0, 165], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-165, 0, 165], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, x: 0, opacity: 1 },
    exit: (custom: any) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };
  const variantsBackCard = {
    initial: { scale: 0, x: 0, y: 0, opacity: 0 },
    animate: { scale: 0.95, x: -12, y: -5, opacity: 0.5 },
  };

  function handleDragEnd(_: any, info: { offset: { x: number } }) {
    if (info.offset.x < -100) {
      setExitX(-250);
      props.setIndex((props.index + 1) % 4);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      props.setIndex((props.index + 1) % 4);
    }
  }

  return (
    <motion.div
      className="p-[5px] flex items-center justify-center absolute h-[165px] w-[225px] bg-[#ffffff] rounded-[23px] cursor-grab top-0"
      style={{ x, rotate }}
      whileTap={{ cursor: "grabbing" }}
      drag={props.drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      variants={props.frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        props.frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <div className="w-[100%] h-[100%] rounded-[18px] overflow-hidden">
        <img
          className="pointer-events-none w-[100%]"
          src={props.url}
          alt={props.url}
        />
      </div>
    </motion.div>
  );
}
