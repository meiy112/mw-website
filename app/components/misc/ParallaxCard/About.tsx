import { Inter, Raleway } from "next/font/google";
import { LuMapPin } from "react-icons/lu";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { HoverMeComponent } from "./ParallaxCard";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="relative aspect-[898/549] w-[100%] rounded-[12px] flex justify-center items-center overflow-hidden">
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
        <img
          src="/images/About/sky.png"
          alt="sky"
          className="absolute w-[100%]"
        />
        <MouseParallaxChild
          factorX={0.07}
          factorY={0}
          style={{ position: "absolute", top: "24%", left: "14%" }}
        >
          <div
            className={`${inter.className} font-black text-white flex flex-col text-[4.3rem] about-text`}
          >
            <span className="pl-[45%]">WORLD</span>
            <span className="mt-[-16%]">HELLO</span>
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.02}
          style={{
            position: "absolute",
            bottom: "17%",
            left: "35.5%",
          }}
        >
          <img src="/images/About/van.png" alt="van" className="scale-[2.25]" />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={-0.5}
          factorY={0.5}
          style={{
            position: "absolute",
            top: "5%",
            left: "-3%",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/About/birds.png"
            alt="birds"
            className="absolute opacity-[0.8] size-[60%]"
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={1.5}
          factorY={0.5}
          style={{
            position: "absolute",
            //  right: "-18vw",
            //  bottom: "-38%",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/About/sailboat.png"
            alt="boat"
            className="scale-[100%] absolute left-[44.5%] top-[-17%]"
          />
        </MouseParallaxChild>
        {/*<div className="h-[25%] w-[100%] absolute bottom-0 flex items-end">
          <div className="w-[100%] absolute blur-8 h-[12.5%]"></div>
          <div className="w-[100%] absolute blur-7 h-[25%]"></div>
          <div className="w-[100%] absolute blur-6 h-[37.5%]"></div>
          <div className="w-[100%] absolute blur-5 h-[50%]"></div>
          <div className="w-[100%] absolute blur-4 h-[62.5%] bottom-0"></div>
          <div className="w-[100%] absolute blur-3 h-[75%] bottom-0"></div>
          <div className="w-[100%] absolute blur-2 h-[87.5%] bottom-0"></div>
          <div className="w-[100%] absolute blur-1 h-[100%] bottom-0"></div>
        </div>*/}
        <div className="text-white w-[100%] absolute bottom-[3%] flex flex-col items-center">
          <div className="flex flex-row items-center gap-x-[4px]">
            <LuMapPin size={18} />
            <span className="font-bold text-[1.2rem]">Vancouver,</span>
          </div>
          <span className={`${raleway.className} font-light`}>
            Beautiful British Columbia
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <HoverMeComponent />
        </div>
      </MouseParallaxContainer>
    </div>
  );
}
