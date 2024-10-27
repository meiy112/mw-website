import { motion, AnimatePresence } from "framer-motion";
import { useDragContext } from "../../context/DragContext";
import s from "./MusicPlayer.module.css";

const style = `text-[0.9rem] font-medium ${s.title}`;

const GetCurrentTitle = () => {
  const dragContext = useDragContext();
  if (!dragContext) {
    return null;
  }
  const { currentChildId, parent } = dragContext;

  return (
    <AnimatePresence initial={false} mode="wait">
      {currentChildId === "draggable0" && parent === "droppable" && (
        <motion.h1
          key="draggable0"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1 }}
          className={style}
        >
          2 AM
        </motion.h1>
      )}

      {currentChildId === "draggable1" && parent === "droppable" && (
        <motion.h1
          key="draggable1"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1 }}
          className={style}
        >
          For You
        </motion.h1>
      )}

      {currentChildId === "draggable2" && parent === "droppable" && (
        <motion.h1
          key="draggable2"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1 }}
          className={style}
        >
          Umi no Mieru Machi
        </motion.h1>
      )}

      {currentChildId === "draggable3" && parent === "droppable" && (
        <motion.h1
          key="draggable3"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1 }}
          className={style}
        >
          Duck
        </motion.h1>
      )}

      {currentChildId !== "draggable0" &&
        currentChildId !== "draggable1" &&
        currentChildId !== "draggable2" &&
        currentChildId !== "draggable3" &&
        currentChildId !== "draggable4" && (
          <motion.h1
            key="no-music-found"
            initial={{ opacity: 0, scale: 0, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: -10 }}
            transition={{ duration: 0.1 }}
            className={style}
          >
            No Music Found
          </motion.h1>
        )}

      {currentChildId === "draggable4" && parent === "droppable" && (
        <motion.h1
          key="draggable4"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1 }}
          className={style}
        >
          Pewter City
        </motion.h1>
      )}
    </AnimatePresence>
  );
};

export default GetCurrentTitle;
