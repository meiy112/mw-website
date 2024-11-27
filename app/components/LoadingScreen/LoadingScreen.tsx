import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import MouseTrail from "./MouseTrail";
import LoadingBar from "./LoadingBar";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    id: 1,
    content: "Hey there.",
  },
  {
    id: 2,
    content: "Psst... move your mouse!",
  },
  {
    id: 3,
    content: "Welcome :)",
  },
];

const LoadingScreen = ({
  isLoading,
  setIsLoading,
  modelLoaded,
}: {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  modelLoaded: boolean;
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (loadingFinished) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [loadingFinished]);

  useEffect(() => {
    if (loadingFinished) {
      setTimeout(() => {
        setIndex(2);
      }, 1000);
    } else if (imagesLoaded) {
      setIndex(1);
    }
  }, [imagesLoaded, loadingFinished]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 1, y: 20 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className={`z-20 fixed w-[100%] h-[100%] bg-[#07080A] overflow-hidden`}
        >
          <div className="relative z-20 flex w-[100%] items-center justify-center h-[100%] pb-[2em] pointer-events-none">
            <div className="flex flex-col items-center gap-y-[2em]">
              <span className="text-[1.75rem] font-light">
                <motion.div
                  key={items[index].id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ ease: "easeInOut" }}
                  className="black-gradient-text"
                >
                  {items[index].content}
                </motion.div>
              </span>
              <LoadingBar
                setImagesLoaded={setImagesLoaded}
                isModelLoaded={modelLoaded}
                onComplete={() => setIsLoading(false)}
                loadingFinished={loadingFinished}
                setLoadingFinished={setLoadingFinished}
              />
            </div>
          </div>
          {imagesLoaded && <MouseTrail isLoaded={loadingFinished} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
