import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import s from "./LoadingBar.module.css";
import { motion } from "framer-motion";
import { fontFiles } from "./utils";

interface RollingNumberProps {
  setImagesLoaded: Dispatch<SetStateAction<boolean>>;
  isModelLoaded: boolean;
  onComplete: () => void;
  loadingFinished: boolean;
  setLoadingFinished: Dispatch<SetStateAction<boolean>>;
}

const LoadingBar: React.FC<RollingNumberProps> = ({
  setImagesLoaded,
  isModelLoaded,
  onComplete,
  loadingFinished,
  setLoadingFinished,
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [loadCheck, setLoadCheck] = useState(false);

  useEffect(() => {
    const preloadFonts = (fontUrls: string[]) => {
      fontUrls.forEach((url) => {
        const family = url.split("/").pop()?.replace(".otf", "") || "Unknown";
        const font = new FontFace(family, `url(${url})`);
        font
          .load()
          .then((loadedFont) => {
            document.fonts.add(loadedFont);
          })
          .catch(() => {});
      });
    };

    if (!loadCheck) {
      setLoadCheck(true);
      preloadFonts(fontFiles);
    }
  }, [loadCheck]);

  useEffect(() => {
    const checkProgress = () => {
      if (progressBarRef.current) {
        const { width } = progressBarRef.current.getBoundingClientRect();
        const parentWidth =
          progressBarRef.current.parentElement?.getBoundingClientRect().width ||
          0;

        if (width >= parentWidth) {
          setLoadingFinished(true);
        }
      }
    };

    const interval = setInterval(checkProgress, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const steps = [
      { percentage: 12, delay: 0 },
      { percentage: 24, delay: 500 },
      { percentage: 30, delay: 1000 },
      { percentage: 35, delay: 200 },
      { percentage: 40, delay: 800 },
      { percentage: 68, delay: 800 },
      { percentage: 74, delay: 500 },
      { percentage: 88, delay: 1000 },
      { percentage: 100, delay: 200 },
    ];

    let timeoutIds: NodeJS.Timeout[] = [];
    let currentProgress = 0;

    const executeSteps = () => {
      steps.forEach(({ percentage, delay }, index) => {
        const timeoutId = setTimeout(() => {
          if (percentage > currentProgress) {
            currentProgress = percentage;
            setProgress((prevProgress) =>
              Math.max(prevProgress, currentProgress)
            );
          }
        }, delay + steps.slice(0, index).reduce((acc, step) => acc + step.delay, 0));
        timeoutIds.push(timeoutId);
      });
    };

    executeSteps();

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setImagesLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className={`flex h-[3px] w-[10em] rounded-[8em]`}>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: loadingFinished ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`${s.container} flex h-[100%] w-[100%] rounded-[8em]`}
        style={{ transformOrigin: "right" }}
      >
        <motion.div
          ref={progressBarRef}
          className={`${s.progressBar} bg-white h-full rounded-[8em]`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingBar;
