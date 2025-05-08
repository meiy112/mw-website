import { useInView, motion } from "framer-motion";
import { Check, BadgeAlert } from "lucide-react";
import { Inter } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const inter = Inter({ subsets: ["latin"] });

export default function StudyShark() {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const totalImages = 8;

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded]);

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to top right, #ffffff, #F2F2FB)",
      }}
      className="relative aspect-[898/549] w-[100%] rounded-[12px] flex justify-center items-center overflow-hidden"
    >
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        globalFactorX={0.3}
        globalFactorY={0.3}
        resetOnLeave
      >
        <Title />
        <MouseParallaxChild
          factorX={0.05}
          factorY={0}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/Projects/StudyShark/ss-stats.png"
            alt="stats"
            className="absolute scale-[0.35] bottom-[-3%] left-[32.2%]"
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={-0.05}
          factorY={0.05}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/Projects/StudyShark/ss-topic.png"
            alt="quiz"
            className="absolute scale-[0.22] bottom-[-22%] left-[10%]"
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0}
          factorY={-0.2}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bottom: "73%",
            right: "-31%",
          }}
        >
          <img
            src="/images/Projects/StudyShark/ss-phone1.png"
            alt="phone"
            className="absolute scale-[0.55]"
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={-0.2}
          factorY={-0.2}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bottom: "3%",
            right: "-47%",
          }}
        >
          <img
            src="/images/Projects/StudyShark/ss-quiz.png"
            alt="quiz"
            className="absolute scale-[0.25]"
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0}
          factorY={0.2}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/Projects/StudyShark/ss-phone2.png"
            alt="quiz"
            className="absolute scale-[0.55] top-[-11%] left-[6%]"
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.15}
          factorY={-0.15}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/Projects/StudyShark/ss-notes.png"
            alt="quiz"
            className="absolute scale-[0.25] bottom-[-37%] right-[1%]"
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.2}
          factorY={0.2}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/Projects/StudyShark/ss-subject.png"
            alt="quiz"
            className="absolute scale-[0.2] bottom-[-11%] left-[30%]"
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={-0.3}
          factorY={0}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/Projects/StudyShark/ss-public.png"
            alt="quiz"
            className="absolute scale-[0.36] top-[-11%] right-[19%]"
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <div className="absolute top-3 left-3">
          <HoverMeComponent />
        </div>
      </MouseParallaxContainer>
      {!allImagesLoaded && (
        <div className="absolute w-full h-full">
          <Blurhash
            hash="LFQcVb%y5jm,8x_NJBr?4T_3OXrr"
            width={"100%"}
            height={"100%"}
          />
        </div>
      )}
    </div>
  );
}

function Title() {
  return (
    <div className="text-black absolute bottom-0 py-[30px] px-[40px]">
      <div
        className={`${inter.className} mb-[2px] flex align-center justify-center w-[97px] p-[11px] text-[12px] bg-[#414141] rounded-[30px] text-white font-bold`}
      >
        Mobile App
      </div>
      <h1 className="font-extrabold text-[32px]">Study Shark</h1>
      <p className="text-[14px] w-[200px] leading-[17px] my-[2px]">
        A study material management and community app.
      </p>
      <div className="my-[12px]">
        <div className="flex flex-row gap-x-[7px] items-center mb-[4px]">
          <div className="flex justify-center items-center text-white size-[19px] bg-[#414141] rounded-[50%]">
            <Check size={14} />
          </div>
          <span className="text-[13px] font-semibold">Android</span>
        </div>
        <div className="flex flex-row gap-x-[7px] items-center">
          <div className="flex justify-center items-center text-white size-[19px] bg-[#414141] rounded-[50%]">
            <Check size={14} />
          </div>
          <span className="text-[13px] font-semibold">ios</span>
        </div>
      </div>
      <div className="w-[200px] flex flex-wrap text-white text-[11px] gap-[5.5px]">
        <div className="bg-[#414141] rounded-[8px] px-[11px] py-[5px]">
          React Native
        </div>
        <div className="bg-[#414141] rounded-[8px] px-[11px] py-[5px]">
          MySQL
        </div>
        <div className="bg-[#414141] rounded-[8px] px-[11px] py-[5px]">
          Node.js
        </div>
        <div className="bg-[#414141] rounded-[8px] px-[11px] py-[5px]">
          Express
        </div>
      </div>
    </div>
  );
}

function HoverMeComponent() {
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
      className="gap-x-[5px] flex flex-row items-center font-medium text-[0.8rem] text-[#414141] glass-container-2 rounded-[60px] py-[2px] px-[10px]"
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
      <BadgeAlert size={18} />
      <span>Hover over or tap me!</span>
    </motion.div>
  );
}
