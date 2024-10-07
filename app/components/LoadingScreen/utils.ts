import sync, { cancelSync } from "framesync";
import { useEffect } from "react";
import { createExpoIn, reversed } from "@popmotion/easing";

// Version of Greensock's Quad ease out
export const powerOut4 = reversed(createExpoIn(4));

// Hook to use an animation loop
export const useAnimationLoop = (callback: () => void) => {
  useEffect(() => {
    sync.update(callback, true);
    return () => cancelSync.update(callback);
  }, [callback]);
};

// Center images using transforms
export const center = (_: any, generated: string): string =>
  `translate(-50%, -50%) ${generated}`;

// Helper to generate a random number within a range
const generateNumber = (base: number, range: number): number => {
  return base - range / 2 + Math.round(Math.random() * range);
};

// Generate random height and width sizes for images
export const generateSize = (): { height: number; width: number } => ({
  height: generateNumber(312, 70),
  width: generateNumber(250, 50),
});

export const IMAGE_SIZE = 150;
