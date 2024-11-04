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

interface RollingNumberProps {
  isImagesLoaded: boolean;
  isModelLoaded: boolean;
  onComplete: () => void;
  loadingFinished: boolean;
  setLoadingFinished: Dispatch<SetStateAction<boolean>>;
}

const LoadingBar: React.FC<RollingNumberProps> = ({
  isImagesLoaded,
  isModelLoaded,
  onComplete,
  loadingFinished,
  setLoadingFinished,
}) => {
  const [progress, setProgress] = useState(0);
  const [isPublicImagesLoaded, setIsPublicImagesLoaded] = useState(false);
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const loadFonts = async () => {
    const fontPromises = fontFiles.map((fontFile) => {
      const fontName = fontFile.split("/").pop()?.split(".")[0] || "Font";
      const font = new FontFace(fontName, `url(${fontFile})`);
      return font.load().then(() => {
        document.fonts.add(font);
        console.log(`${fontName} loaded`);
      });
    });

    await Promise.all(fontPromises);
    setIsFontsLoaded(true);
  };

  const loadImages = async () => {
    const imagePromises = imageFiles.map((imageFile) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = imageFile;
        img.onload = () => {
          console.log(`${imageFile} loaded`);
          resolve();
        };
        img.onerror = () => reject(new Error(`Failed to load ${imageFile}`));
      });
    });

    await Promise.all(imagePromises);
    setIsPublicImagesLoaded(true);
  };

  useEffect(() => {
    const loadAssets = async () => {
      await loadImages();
      await loadFonts();
    };

    loadAssets();
  }, []);

  useEffect(() => {
    const loadedCount = [
      isImagesLoaded,
      isModelLoaded,
      isPublicImagesLoaded,
      isFontsLoaded,
    ].filter(Boolean).length;

    if (loadedCount === 1) {
      setProgress(12);
    } else if (loadedCount === 2) {
      setProgress(68);
    } else if (loadedCount === 3) {
      setProgress(77);
    } else if (loadedCount === 4) {
      const timeout95 = setTimeout(() => {
        setProgress(95);
      }, 4000);
      const timeout100 = setTimeout(() => {
        setProgress(100);
      }, 4000);

      return () => {
        clearTimeout(timeout95);
        clearTimeout(timeout100);
      };
    }
  }, [
    isImagesLoaded,
    isModelLoaded,
    isPublicImagesLoaded,
    isFontsLoaded,
    progress,
  ]);

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
        transition={{ duration: 1, ease: "easeInOut" }}
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
