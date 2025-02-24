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

export const imageFiles = [
  "/images/Disks/acnh-disk.jpg",
  "/images/Disks/duck-disk.jpg",
  "/images/Disks/noise.png",
  "/images/Disks/piano-disk.png",
  "/images/Disks/piano-disk.jpg",
  "/images/Disks/pokemon-disk.jpg",
  "/images/Disks/yhx-disk.jpg",
  "/images/About/birds.png",
  "/images/About/sailboat.png",
  "/images/About/sky.png",
  "/images/About/van.png",
];

export const fontFiles = [
  "/fonts/SFPro/SF-Pro-Display-Black.otf",
  "/fonts/SFPro/SF-Pro-Display-Bold.otf",
  "/fonts/SFPro/SF-Pro-Display-Heavy.otf",
  "/fonts/SFPro/SF-Pro-Display-Light.otf",
  "/fonts/SFPro/SF-Pro-Display-Medium.otf",
  "/fonts/SFPro/SF-Pro-Display-Regular.otf",
  "/fonts/SFPro/SF-Pro-Display-Semibold.otf",
  "/fonts/SFPro/SF-Pro-Display-Thin.otf",
  "/fonts/SFPro/SF-Pro-Display-Ultralight.otf",
];
