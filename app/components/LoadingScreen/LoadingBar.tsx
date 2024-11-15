import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import s from "./LoadingBar.module.css";
import { motion } from "framer-motion";
import { fontFiles, imageFiles } from "./utils";
import { images } from "./MouseTrail";
import { EMOJIS } from "../navbar/TopNavbar";

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
    const extractSrcFromImages = (imageComponents: JSX.Element[]) => {
      return imageComponents
        .map((image) => {
          if (
            React.isValidElement(image) &&
            (image.props as { src: string }).src
          ) {
            return (image.props as { src: string }).src;
          }
          return null;
        })
        .filter((src): src is string => src !== null);
    };

    const preloadImages = (imageUrls: string[], onComplete: () => void) => {
      let loadedCount = 0;

      imageUrls.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount += 1;
          if (loadedCount === imageUrls.length) {
            onComplete();
          }
        };
        img.onerror = () => {
          loadedCount += 1;
          if (loadedCount === imageUrls.length) {
            onComplete();
          }
        };
      });
    };

    const preloadAdditionalImages = (imageUrls: string[]) => {
      let loadedCount = 0;

      imageUrls.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount += 1;
        };
        img.onerror = () => {
          loadedCount += 1;
        };
      });
    };

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

    const imageSrcs = extractSrcFromImages(images);
    const emojiSrcs = extractSrcFromImages(EMOJIS);

    if (!loadCheck) {
      setLoadCheck(true);
      preloadImages(imageSrcs, () => {
        preloadAdditionalImages(emojiSrcs);
        preloadAdditionalImages(imageFiles);
        preloadFonts(fontFiles);
      });
    }
  }, [setImagesLoaded, loadCheck]);

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
      { percentage: 12, delay: 1000 },
      { percentage: 30, delay: 500 },
      { percentage: 35, delay: 200 },
      { percentage: 40, delay: 1500 },
      { percentage: 68, delay: 800 },
      { percentage: 74, delay: 500 },
      { percentage: 88, delay: 500 },
    ];

    let timeoutIds: NodeJS.Timeout[] = [];

    const executeSteps = () => {
      let currentProgress = 0;
      steps.forEach(({ percentage, delay }, index) => {
        const timeoutId = setTimeout(() => {
          setProgress(percentage);
          currentProgress = percentage;
        }, delay + steps.slice(0, index).reduce((acc, step) => acc + step.delay, 0));
        timeoutIds.push(timeoutId);
      });

      // Final step to reach 100% only if isModelLoaded is true
      const finalStepTimeout = setTimeout(
        () => {
          if (isModelLoaded) {
            setProgress(100);
          }
        },
        steps.reduce((acc, step) => acc + step.delay, 0)
      );
      timeoutIds.push(finalStepTimeout);
    };

    executeSteps();

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [isModelLoaded]);

  useEffect(() => {
    setTimeout(() => {
      setImagesLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className={`flex h-[3px] w-[10em] rounded-[8em]`}>
      <motion.div
        initial={{ scaleX: 1 }} // Start with full scale (100%)
        animate={{ scaleX: loadingFinished ? 0 : 1 }} // Shrink to 0 when finished
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
