import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import MouseTrail, { images } from "./MouseTrail";
import LoadingBar from "./LoadingBar";
import FlipText from "../misc/TextWrappers/FlipTextWrapper";

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

  useEffect(() => {
    if (loadingFinished) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [loadingFinished]);

  useEffect(() => {
    const preloadImages = () => {
      const promises = React.Children.map(images, (image) => {
        const imgElement = image as React.ReactElement<HTMLImageElement>;
        const src = imgElement.props.src;

        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(promises).then(() => {
        setTimeout(() => {
          setImagesLoaded(true);
        }, 300);
      });
    };

    preloadImages();
  }, [imagesLoaded]);

  return isLoading ? (
    <div
      className={`z-20 fixed w-[100%] h-[100%] bg-[#07080A] overflow-hidden`}
    >
      <div className="relative z-30 flex w-[100%] items-center justify-center h-[100%] pb-[2em] pointer-events-none">
        <div className="flex flex-col items-start gap-y-[0.5em]">
          <span className="text-[0.75rem] opacity-[0.5] ml-[0.5em]">
            <FlipText>Psst...&nbsp;move&nbsp;your&nbsp;mouse!</FlipText>
          </span>
          <LoadingBar
            isImagesLoaded={imagesLoaded}
            isModelLoaded={modelLoaded}
            onComplete={() => setIsLoading(false)}
            loadingFinished={loadingFinished}
            setLoadingFinished={setLoadingFinished}
          />
        </div>
      </div>
      {imagesLoaded && <MouseTrail isLoaded={loadingFinished} />}
    </div>
  ) : null;
};

export default LoadingScreen;
