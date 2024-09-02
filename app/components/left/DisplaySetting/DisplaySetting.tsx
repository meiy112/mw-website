import { FC, useState, ElementRef, useRef, useEffect } from "react";
import { DisplayProps } from "./Display.d";
import * as RadixSlider from "@radix-ui/react-slider";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { decay } from "./helper";
import styles from "./Display.module.css";
import { IoSunny } from "react-icons/io5";
import { useBrightness } from "../../context/BrightnessContext";

const MAX_OVERFLOW = 50;

const DisplaySettings: FC<DisplayProps> = ({ toggleTheme }: DisplayProps) => {
  const brightnessContext = useBrightness();

  if (!brightnessContext) {
    throw new Error(
      "BrightnessControl must be used within a BrightnessProvider"
    );
  }

  const { brightness, setBrightness } = brightnessContext;

  let ref = useRef<ElementRef<typeof RadixSlider.Root>>(null);
  let clientX = useMotionValue(0);
  let overflow = useMotionValue(0);
  let scale = useMotionValue(1);

  useMotionValueEvent(clientX, "change", (latest) => {
    if (ref.current) {
      let { left, right } = ref.current.getBoundingClientRect();
      let newValue;

      if (latest < left) {
        newValue = left - latest;
      } else if (latest > right) {
        newValue = latest - right;
      } else {
        newValue = 0;
      }

      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  const ballOpacity = useTransform(scale, [1, 1.2], [0, 1]);
  const ballPosition = useTransform(scale, [1, 1.2], ["-50%", "0%"]);

  return (
    <motion.div
      onHoverStart={() => animate(scale, 1.2)}
      onHoverEnd={() => animate(scale, 1)}
      onTouchStart={() => animate(scale, 1.2)}
      onTouchEnd={() => animate(scale, 1)}
      style={{
        scale,
        opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
      }}
      className="flex flex-col w-full touch-none select-none items-center justify-center gap-[8px]"
    >
      <div className="w-full max-w-[90%]">
        <h1 className={styles.title}>Display</h1>
      </div>
      <RadixSlider.Root
        ref={ref}
        value={[brightness]}
        onValueChange={([v]) => setBrightness(Math.floor(v))}
        step={0.01}
        className="relative flex w-full max-w-[90%] grow cursor-grab touch-none select-none items-center active:cursor-grabbing"
        onPointerMove={(e) => {
          if (e.buttons > 0) {
            clientX.jump(e.clientX);
          }
        }}
        onLostPointerCapture={() => {
          animate(overflow, 0, { type: "spring", bounce: 0.5 });
        }}
      >
        <motion.div
          style={{
            scaleX: useTransform(() => {
              if (ref.current) {
                let { width } = ref.current.getBoundingClientRect();

                return 1 + overflow.get() / width;
              }
            }),
            scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
            transformOrigin: useTransform(() => {
              if (ref.current) {
                let { left, width } = ref.current.getBoundingClientRect();

                return clientX.get() < left + width / 2 ? "right" : "left";
              }
            }),
            height: useTransform(scale, [1, 1.2], [6, 15]),
            marginTop: useTransform(scale, [1, 1.2], [0, -4.5]),
            marginBottom: useTransform(scale, [1, 1.2], [0, -4.5]),
          }}
          className="flex grow"
        >
          <RadixSlider.Track className="relative isolate h-full grow overflow-hidden rounded-full bg-[#4F5154] ">
            <RadixSlider.Range className="absolute h-full bg-white rounded-full">
              <motion.div
                style={{
                  opacity: ballOpacity,
                  transform: `translateX(${ballPosition})`,
                }}
                className={`${styles.toggleBall} absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 rounded-full`}
              />
              <motion.div
                style={{
                  opacity: ballOpacity,
                  transform: `translateX(${ballPosition})`,
                }}
                className="scale-[0.75] absolute left-[1px] top-1/2 transform -translate-y-1/2"
              >
                <IoSunny color={"rgba(0, 0, 0, 0.6)"} />
              </motion.div>
            </RadixSlider.Range>
          </RadixSlider.Track>
        </motion.div>
        <RadixSlider.Thumb />
      </RadixSlider.Root>
    </motion.div>
  );
};

export default DisplaySettings;
