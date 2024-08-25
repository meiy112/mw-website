import { motion, AnimatePresence } from "framer-motion";
import { useDragContext } from "../../context/DragContext";

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
          className="font-semibold text-[0.95rem] tracking-[0.5px]"
        >
          2AM
        </motion.h1>
      )}

      {currentChildId === "draggable1" && parent === "droppable" && (
        <motion.h1
          key="draggable1"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1 }}
          className="font-semibold text-[0.95rem] tracking-[0.5px]"
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
          className="font-semibold text-[0.95rem] tracking-[0.5px]"
        >
          Piano
        </motion.h1>
      )}

      {currentChildId === "draggable3" && parent === "droppable" && (
        <motion.h1
          key="draggable3"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1 }}
          className="font-semibold text-[0.95rem] tracking-[0.5px]"
        >
          Duck
        </motion.h1>
      )}

      {currentChildId !== "draggable0" &&
        currentChildId !== "draggable1" &&
        currentChildId !== "draggable2" &&
        currentChildId !== "draggable3" && (
          <motion.h1
            key="no-music-found"
            initial={{ opacity: 0, scale: 0, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: -10 }}
            transition={{ duration: 0.1 }}
            className="font-semibold text-[0.95rem] tracking-[0.5px]"
          >
            No Music Found
          </motion.h1>
        )}
    </AnimatePresence>
  );
};

export default GetCurrentTitle;
