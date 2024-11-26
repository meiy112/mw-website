import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFolderClosed } from "react-icons/fa6";

const pageList = [
  "Aside from coding, I also love digital art and collecting shark plushes.",
  "UI/UX design is what got me into programming.",
  "In my spare time, I'm working on a 3d portfolio for fun.",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export default function Notes() {
  const [currPage, setCurrPage] = useState(0);

  const dotIndicator = (opacity?: number) => (
    <div
      className={`h-[6.5px] aspect-square bg-white rounded-[50%] opacity-[${opacity}]`}
      style={{}}
    ></div>
  );

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setCurrPage((pv) => {
          if (pv === pageList.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && currPage < pageList.length - 1) {
      setCurrPage((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && currPage > 0) {
      setCurrPage((pv) => pv - 1);
    }
  };

  return (
    <div className="relative h-[150px] aspect-[331/195] bg-[#1F1F23] rounded-[23px] overflow-hidden">
      <div className="text-[0.85rem] tracking-[0.02rem] pl-[7%] flex items-center gap-x-[4%] h-[25%] bg-gradient-to-b from-[#5CB099] to-[#479982] border-t-2 border-t-[#7DC5B1]">
        <FaFolderClosed size={16} /> Notes
      </div>
      <div className="relative font-light text-[0.85rem] tracking-[0.02rem] justify-between flex h-[75%] flex-col pt-[5%] pb-[5%] w-full border-t-2 border-dotted border-t-[#ffffff] border-opacity-20 mt-[1%]">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${(currPage * 100) / 3}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="w-[300%] h-full flex flex-row cursor-grab active:cursor-grabbing"
        >
          <Pages />
        </motion.div>
        <div className="flex gap-x-[5px] w-full items-center justify-center">
          {currPage == 0 ? dotIndicator() : dotIndicator(0.5)}
          {currPage == 1 ? dotIndicator() : dotIndicator(0.5)}
          {currPage == 2 ? dotIndicator() : dotIndicator(0.5)}
        </div>
      </div>
    </div>
  );

  function Pages() {
    return (
      <>
        <motion.div className="w-full px-[2.7%]">
          <p>Fun Fact #1</p>
          <p className="opacity-[0.7]">{pageList[0]}</p>
        </motion.div>
        <motion.div className="w-full px-[2.7%]">
          <p>Fun Fact #2</p>
          <p className="opacity-[0.7]">{pageList[1]}</p>
        </motion.div>
        <motion.div className="w-full px-[2.7%]">
          <p>Fun Fact #3</p>
          <p className="opacity-[0.7]">{pageList[2]}</p>
        </motion.div>
      </>
    );
  }
}
