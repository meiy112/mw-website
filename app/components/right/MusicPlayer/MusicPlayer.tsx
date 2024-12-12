import { IoMusicalNotes } from "react-icons/io5";
import styles from "./MusicPlayer.module.css";
import { IoIosPause } from "react-icons/io";
import { useDroppable } from "@dnd-kit/core";
import { useDragContext } from "../../context/DragContext";
import { AnimatePresence, motion } from "framer-motion";
import { FiUpload } from "react-icons/fi";
import getCurrentTitle from "./getCurrentTitle";
import getCurrentAuthor from "./getCurrentAuthor";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";

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

export default function MusicPlayer() {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const dragContext = useDragContext();

  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonChild, setButtonChild] = useState(
    <FaPlay className="text-black" size={14} />
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
    setButtonChild(<IoIosPause className="text-black" size={20} />);
  };
  const handlePause = () => {
    setIsPlaying(false);
    setButtonChild(<FaPlay className="text-black" size={14} />);
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
          <>
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
            <div className="z-0 absolute flex justify-center items-center aspect-square h-[67px] rounded-[50%] bg-black"></div>
          </>
        );
      } else if (currentChildId === "draggable1") {
        return (
          <>
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
            <div className="z-0 absolute flex justify-center items-center aspect-square h-[67px] rounded-[50%] bg-black"></div>
          </>
        );
      } else if (currentChildId === "draggable2") {
        return (
          <>
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
            <div className="z-0 absolute flex justify-center items-center aspect-square h-[67px] rounded-[50%] bg-black"></div>
          </>
        );
      } else if (currentChildId === "draggable3") {
        return (
          <>
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
            <div className="z-0 absolute flex justify-center items-center aspect-square h-[67px] rounded-[50%] bg-black"></div>
          </>
        );
      } else if (currentChildId === "draggable4") {
        return (
          <>
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
            <div className="z-0 absolute flex justify-center items-center aspect-square h-[67px] rounded-[50%] bg-black"></div>
          </>
        );
      }
    } else {
      return (
        <div
          className={`${
            isOver ? styles.isOver : ""
          } flex justify-center items-center aspect-square h-[100%] rounded-[50%] bg-black`}
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
                <FiUpload className="opacity-[0.5]" />
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
                <IoMusicalNotes size={22} className="opacity-[0.5]" />
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
      className={`element0 flex-1 justify-between px-[12px] max-h-[90px] flex items-center recommendations rounded-[23px] relative`}
    >
      <div className="h-[73%] flex flex-row gap-x-[12px]">
        {getCurrentChild()}
        <div className="pointer-events-none select-none h-[100%] py-[10px] flex flex-col justify-between opacity-[0.85]">
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
