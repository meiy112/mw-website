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
import useIncrementalProgress from "../hooks/useIncrementalProgress";

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
  const totalResources =
    images.length + imageFiles.length + fontFiles.length + 1;
  const { progress, incrementLoadedResources } =
    useIncrementalProgress(totalResources);

  useEffect(() => {
    const preloadImages = (imageUrls: any[], onComplete: () => void) => {
      let loadedCount = 0;
      imageUrls.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount += 1;
          incrementLoadedResources();
          if (loadedCount === imageUrls.length) {
            onComplete();
          }
        };
        img.onerror = () => {
          loadedCount += 1;
          incrementLoadedResources();
          if (loadedCount === imageUrls.length) {
            onComplete();
          }
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
            incrementLoadedResources();
          })
          .catch(() => {
            incrementLoadedResources();
          });
      });
    };

    const preloadAdditionalImages = (imageUrls: string[]) => {
      imageUrls.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = incrementLoadedResources;
        img.onerror = incrementLoadedResources;
      });
    };

    preloadImages(images, () => {
      setImagesLoaded(true);

      setTimeout(() => {
        preloadAdditionalImages(imageFiles);
        preloadFonts(fontFiles);
      }, 4000);
    });
  }, [setImagesLoaded]);

  useEffect(() => {
    if (isModelLoaded) {
      incrementLoadedResources();
    }
  }, [isModelLoaded]);

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
