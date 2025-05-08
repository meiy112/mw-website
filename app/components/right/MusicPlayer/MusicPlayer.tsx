import styles from "./MusicPlayer.module.css";
import { useDroppable } from "@dnd-kit/core";
import { useDragContext } from "../../context/DragContext";
import { AnimatePresence, motion } from "framer-motion";
import getCurrentTitle from "./getCurrentTitle";
import getCurrentAuthor from "./getCurrentAuthor";
import { ReactElement, useEffect, useRef, useState } from "react";
import { useMusicPlayer } from "../../context/MusicPlayerContext";
import { Upload } from "lucide-react";

let duckAudio: HTMLAudioElement | undefined;
let acnhAudio: HTMLAudioElement | undefined;
let yhxAudio: HTMLAudioElement | undefined;
let pianoAudio: HTMLAudioElement | undefined;
let pokemonAudio: HTMLAudioElement | undefined;

if (typeof window !== "undefined") {
  duckAudio = new Audio("./audio/duck.mp3");
  acnhAudio = new Audio("./audio/acnh.mp3");
  yhxAudio = new Audio("./audio/yhx.mp3");
  pianoAudio = new Audio("./audio/piano.mp3");
  pokemonAudio = new Audio("./audio/pokemon.mp3");
}

const DiskContainer = ({
  isDragging,
  isPlaying,
  child,
}: {
  isDragging: boolean;
  isPlaying: boolean;
  child: ReactElement;
}) => {
  return (
    <div className="bg-red-500">
      <div
        className={
          isDragging
            ? ""
            : isPlaying
            ? styles.rotate
            : `${styles.rotate} ${styles.paused}`
        }
      >
        {child}
      </div>
      <div className="z-0 absolute justify-center items-center aspect-square h-[3em] rounded-[50%] bg-red-300"></div>
    </div>
  );
};

export default function MusicPlayer() {
  const musicPlayerContext = useMusicPlayer();

  if (!musicPlayerContext) {
    throw new Error(
      "MusicPlayerContext must be used within a MusicPlayerProvider!"
    );
  }

  const { elementRef, showPlayer } = musicPlayerContext;

  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const dragContext = useDragContext();

  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonChild, setButtonChild] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      width="14"
      height="14"
      fill="black"
    >
      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
    </svg>
  );
  const [audio, setAudio] = useState(acnhAudio);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      isPlaying ? audio.play() : audio.pause();
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    if (dragContext && dragContext.currentChildId != null) {
      handleLoad();
      if (currentChildId === "draggable0") {
        setAudio(acnhAudio);
      } else if (currentChildId === "draggable1") {
        setAudio(yhxAudio);
      } else if (currentChildId === "draggable2") {
        setAudio(pianoAudio);
      } else if (currentChildId === "draggable4") {
        setAudio(pokemonAudio);
      } else {
        setAudio(duckAudio);
      }
    } else {
      handlePause();
    }
  }, [dragContext?.currentChildId]);

  useEffect(() => {
    if (!isPaused && dragContext?.currentChildId !== null) {
      handlePlay();
    }
  }, [dragContext?.dragEnd]);

  useEffect(() => {
    if (
      (dragContext?.isDragging || dragContext?.isDraggingOther) &&
      isPlaying
    ) {
      handlePause();
    }
  }, [dragContext?.isDragging, isPlaying, dragContext?.isDraggingOther]);

  if (!dragContext) {
    return null;
  }

  const { currentChildId, parent, draggables, isDragging } = dragContext;

  const handlePlay = () => {
    setIsPlaying(true);
    setButtonChild(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        width="14"
        height="14"
        fill="black"
      >
        <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" />
      </svg>
    );
  };
  const handlePause = () => {
    setIsPlaying(false);
    setButtonChild(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        width="14"
        height="14"
        fill="black"
      >
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
      </svg>
    );
  };

  const handleButtonPress = () => {
    if (isPlaying) {
      handlePause();
      setIsPaused(true);
    } else if (currentChildId) {
      handlePlay();
      setIsPaused(false);
    }
  };

  const handleLoad = () => {
    setIsPlaying(false);
    setButtonChild(<span className={styles.loader}></span>);
    setTimeout(() => {
      if (audio) {
        audio.currentTime = 0;
        handlePlay();
      }
    }, 1500);
  };

  const getCurrentChild = () => {
    if (parent === "droppable") {
      if (currentChildId === "draggable0") {
        return (
          <div className="aspect-square h-[4.1875em] rounded-[50%] bg-black">
            <div
              className={
                isDragging
                  ? ""
                  : isPlaying
                  ? styles.rotate
                  : `${styles.rotate} ${styles.paused}`
              }
            >
              {draggables[0]}
            </div>
          </div>
        );
      } else if (currentChildId === "draggable1") {
        return (
          <div className="aspect-square h-[4.1875em] rounded-[50%] bg-black">
            <div
              className={
                isDragging
                  ? ""
                  : isPlaying
                  ? styles.rotate
                  : `${styles.rotate} ${styles.paused}`
              }
            >
              {draggables[1]}
            </div>
          </div>
        );
      } else if (currentChildId === "draggable2") {
        return (
          <div className="aspect-square h-[4.1875em] rounded-[50%] bg-black">
            <div
              className={
                isDragging
                  ? ""
                  : isPlaying
                  ? styles.rotate
                  : `${styles.rotate} ${styles.paused}`
              }
            >
              {draggables[2]}
            </div>
          </div>
        );
      } else if (currentChildId === "draggable3") {
        return (
          <div className="aspect-square h-[4.1875em] rounded-[50%] bg-black">
            <div
              className={
                isDragging
                  ? ""
                  : isPlaying
                  ? styles.rotate
                  : `${styles.rotate} ${styles.paused}`
              }
            >
              {draggables[3]}
            </div>
          </div>
        );
      } else if (currentChildId === "draggable4") {
        return (
          <div className="aspect-square h-[4.1875em] rounded-[50%] bg-black">
            <div
              className={
                isDragging
                  ? ""
                  : isPlaying
                  ? styles.rotate
                  : `${styles.rotate} ${styles.paused}`
              }
            >
              {draggables[4]}
            </div>
          </div>
        );
      }
    } else {
      return (
        <div
          className={`${
            isOver ? styles.isOver : ""
          } flex justify-center items-center aspect-square h-[4.1875em] rounded-[50%] bg-black`}
        >
          <AnimatePresence mode="wait">
            {isDragging ? (
              <motion.div
                key="upload"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1],
                  transition: { duration: 0.1, type: "spring" },
                }}
                exit={{ scale: 0, transition: { duration: 0.1 } }}
                className={styles.dropDisplay}
              >
                <Upload className="opacity-50" size={16} />
              </motion.div>
            ) : (
              <motion.div
                key="notes"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1],
                  transition: { duration: 0.2, type: "spring" },
                }}
                exit={{ scale: 0, transition: { duration: 0.1 } }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width="22"
                  height="22"
                  opacity="0.5"
                  fill="currentColor"
                >
                  <path d="M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }
  };

  return (
    <motion.div
      layoutId="music-player"
      ref={setNodeRef}
      className={`${
        showPlayer && "fixed top-[8%] right-[2.4vw]"
      } element0 max-w-[380px] w-[100%] justify-between px-[0.75em] py-[0.5em] flex items-center rounded-[23px]`}
    >
      <div
        className="flex flex-row gap-x-[0.75em] items-center justify-center w-[100%]"
        ref={elementRef}
      >
        {getCurrentChild()}
        <div className="pointer-events-none select-none h-[100%] flex-1 flex flex-col justify-between opacity-[0.85]">
          {getCurrentTitle()}
          <div className="opacity-[0.4]">{getCurrentAuthor()}</div>
        </div>
      </div>
      <button
        className={`${
          isPlaying ? styles.buttonActive : styles.buttonInactive
        } mr-[5%] h-[32px] flex justify-center items-center aspect-square rounded-[50%]`}
        onClick={handleButtonPress}
        // style={{
        //   boxShadow: `0 0 12px 1px rgba(255, 255, 255, ${
        //     brightness / 100 < 0 ? brightness / 100 : brightness / 100 - 0.1
        //   })`,
        // }}
      >
        {buttonChild}
      </button>
    </motion.div>
  );
}
