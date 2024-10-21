import { useRef, useState } from "react";
import { generateSize, IMAGE_SIZE, useAnimationLoop } from "./utils";
import { mix, distance, wrap } from "@popmotion/popcorn";
import TrailImage from "./Image";
import { Position } from "./LoadingScreen.d";
import s from "./LoadingScreen.module.css";

export const images = [
  <img
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20in%20Clouds.png"
    alt="Face in Clouds"
    width={IMAGE_SIZE}
    height={IMAGE_SIZE}
  />,
  <img
    width={IMAGE_SIZE}
    height={IMAGE_SIZE}
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Ghost.png"
    alt="ghost"
  />,
  <img
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png"
    alt="Star"
    width={IMAGE_SIZE}
    height={IMAGE_SIZE}
  />,
  <img src="./images/loading/heart.jpeg" className="scale-[0.8]" alt="heart" />,
  <img
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Eyes.png"
    alt="Eyes"
    width={IMAGE_SIZE}
    height={IMAGE_SIZE}
  />,
  <img src="./images/loading/silly_cloud.png" alt="cloud" />,
  <img
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Bubbles.png"
    alt="Bubbles"
    width={IMAGE_SIZE}
    height={IMAGE_SIZE}
  />,
  <img
    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Octopus.png"
    alt="Octopus"
    width={IMAGE_SIZE}
    height={IMAGE_SIZE}
  />,
];

const MouseTrail = ({
  isLoaded,
  distanceThreshold = 140,
}: {
  isLoaded: boolean;
  distanceThreshold?: number;
}) => {
  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 },
  }).current;

  const imagePositions = useRef<Position[]>([]);

  const [index, setIndex] = useState(0);

  useAnimationLoop(() => {
    const mouseDistance = distance(mouseInfo.now, mouseInfo.prevImage);

    mouseInfo.prev = {
      x: mix(mouseInfo.prev.x || mouseInfo.now.x, mouseInfo.now.x, 0.1),
      y: mix(mouseInfo.prev.y || mouseInfo.now.y, mouseInfo.now.y, 0.1),
    };

    if (!isLoaded && mouseDistance > distanceThreshold) {
      const newIndex = index + 1;
      const imageIndex = wrap(0, images.length, newIndex);

      imagePositions.current[imageIndex] = {
        xOrigin: mouseInfo.prev.x,
        yOrigin: mouseInfo.prev.y,
        x: mouseInfo.now.x,
        y: mouseInfo.now.y,
        style: {
          ...generateSize(),
          zIndex: imageIndex,
        },
      };

      mouseInfo.prevImage = mouseInfo.now;

      setIndex(newIndex);
    }
  });

  return (
    <div
      className={`${s.container} flex justify-center items-end absolute z-20 w-[100%] h-[100%]`}
      onMouseMove={(e) => (mouseInfo.now = { x: e.pageX, y: e.pageY })}
    >
      {images.map((image, i) => (
        <TrailImage
          position={imagePositions.current[i]}
          image={image}
          key={i}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
