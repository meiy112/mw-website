import React, { useEffect, useState } from "react";
import s from "./LoadingBar.module.css";
import { motion } from "framer-motion";

interface RollingNumberProps {
  isImagesLoaded: boolean;
  isModelLoaded: boolean;
  onComplete: () => void;
}

const LoadingBar: React.FC<RollingNumberProps> = ({
  isImagesLoaded,
  isModelLoaded,
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const stopPoints = [12, 48, 66, 89, 91, 100];

  useEffect(() => {
    if (!isImagesLoaded) {
      setProgress(12);
    } else if (!isModelLoaded) {
      setProgress(77);
    } else {
      setProgress(100);
    }
  }, [isImagesLoaded, isModelLoaded]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div className={`${s.container} flex h-[3px] w-[15em] rounded-[8em]`}>
      <motion.div
        className={`${s.progressBar} bg-white h-full rounded-[8em]`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};

export default LoadingBar;
