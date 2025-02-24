import { useState, useEffect } from "react";
import { LuMapPin } from "react-icons/lu";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { HoverMeComponent } from "./ParallaxCard";
import { Blurhash } from "react-blurhash";

export default function About() {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const totalImages = 5;

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded]);

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
          onLoad={handleImageLoad}
        />
        <MouseParallaxChild
          factorX={0.07}
          factorY={0}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: "10%",
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className={`font-black text-white flex flex-col text-[4.3rem] about-text`}
          >
            <img
              src="/images/About/hello_world.png"
              alt="hello world"
              className="absolute"
              onLoad={handleImageLoad}
            />
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
          <img
            src="/images/About/van.png"
            alt="van"
            className="scale-[2.25]"
            onLoad={handleImageLoad}
          />
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
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={1.5}
          factorY={0.5}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/About/sailboat.png"
            alt="boat"
            className="scale-[100%] absolute left-[44.5%] top-[-17%]"
            onLoad={handleImageLoad}
          />
        </MouseParallaxChild>
        <div className="text-white w-[100%] absolute bottom-[3%] flex flex-col items-center">
          <div className="flex flex-row items-center gap-x-[4px]">
            <LuMapPin size={18} />
            <span className="font-medium text-[1.2rem]">Vancouver,</span>
          </div>
          <span className={`font-light opacity-[0.65]`}>
            Beautiful British Columbia
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <HoverMeComponent />
        </div>
      </MouseParallaxContainer>
      {!allImagesLoaded && (
        <div className="absolute w-full h-full">
          <Blurhash
            hash="LLN-7;0qs+xUB@s,RoWXIX$xodX9"
            width={"100%"}
            height={"100%"}
          />
        </div>
      )}
    </div>
  );
}
