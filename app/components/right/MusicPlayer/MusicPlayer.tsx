import { IoMusicalNotes } from "react-icons/io5";
import styles from "./MusicPlayer.module.css";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { useDroppable } from "@dnd-kit/core";
import { useDragContext } from "../../context/DragContext";
import { AnimatePresence, motion } from "framer-motion";
import { FiUpload } from "react-icons/fi";
import getCurrentTitle from "./getCurrentTitle";
import getCurrentAuthor from "./getCurrentAuthor";
import { useEffect, useState } from "react";

export default function MusicPlayer() {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const dragContext = useDragContext();

  if (!dragContext) {
    return null;
  }

  const { currentChildId, parent, draggables, isDragging } = dragContext;

  const playButton = <IoIosPlay className="text-black" size={20} />;
  const loader = <span className={styles.loader}></span>;
  const pauseButton = <IoIosPause className="text-black" size={20} />;

  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonChild, setButtonChild] = useState(playButton);

  const duckAudio = new Audio("./audio/duck.mp3");
  const acnhAudio = new Audio("./audio/acnh.mp3");
  const yhxAudio = new Audio("./audio/yhx.mp3");
  const pianoAudio = new Audio("./audio/duck.mp3");

  const [audio, setAudio] = useState(acnhAudio);

  useEffect(() => {
    if (audio) {
      isPlaying ? audio.play() : audio.pause();
    }
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    setButtonChild(pauseButton);
  };
  const handlePause = () => {
    setIsPlaying(false);
    setButtonChild(playButton);
  };

  const handleButtonPress = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleLoad = () => {
    setIsPlaying(false);
    setButtonChild(loader);
    setTimeout(() => {
      handlePlay();
    }, 1500);
  };

  useEffect(() => {
    if (currentChildId != null) {
      if (currentChildId == "draggable0") {
        setAudio(acnhAudio);
      } else if (currentChildId == "draggable1") {
        setAudio(yhxAudio);
      } else if (currentChildId == "draggable2") {
        setAudio(pianoAudio);
      } else {
        setAudio(duckAudio);
      }
      handleLoad();
    } else {
      handlePause();
    }
  }, [currentChildId]);

  useEffect(() => {
    if (isDragging && isPlaying) {
      handlePause();
    }
  }, [isDragging]);

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
                <IoMusicalNotes size={22} className="opacity-[0.7]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }
  };

  return (
    <div
      ref={setNodeRef}
      className={`${styles.container} justify-between px-[12px] max-h-[90px] flex items-center flex-1 relative recommendations rounded-[23px]`}
    >
      <div className="h-[67px] flex flex-row gap-x-[12px]">
        {getCurrentChild()}
        <div className="h-[100%] py-[10px] flex flex-col justify-between">
          {getCurrentTitle()}
          <div className="opacity-[0.5]">{getCurrentAuthor()}</div>
        </div>
      </div>
      <button
        className={`${styles.button} mr-[5%] h-[32px] flex justify-center items-center aspect-square rounded-[50%] bg-white`}
        onClick={handleButtonPress}
      >
        {buttonChild}
      </button>
    </div>
  );
}
