import { AnimatePresence, motion } from "framer-motion";
import { useDragContext } from "../../context/DragContext";

const getCurrentAuthor = () => {
  const dragContext = useDragContext();
  if (!dragContext) {
    return null;
  }
  const { currentChildId, parent } = dragContext;

  return (
    <AnimatePresence initial={false} mode="wait">
      {currentChildId === "draggable0" && parent === "droppable" && (
        <motion.span
          key="draggable0"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1, delay: 0.03 }}
          className="font-light text-[0.85rem] tracking-[0.7px]"
        >
          ACNH
        </motion.span>
      )}

      {currentChildId === "draggable1" && parent === "droppable" && (
        <motion.span
          key="draggable1"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1, delay: 0.03 }}
          className="font-light text-[0.85rem] tracking-[0.7px]"
        >
          Yan Haoxiang
        </motion.span>
      )}

      {currentChildId === "draggable2" && parent === "droppable" && (
        <motion.span
          key="draggable2"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1, delay: 0.03 }}
          className="font-light text-[0.85rem] tracking-[0.7px]"
        >
          Someone
        </motion.span>
      )}

      {currentChildId === "draggable3" && parent === "droppable" && (
        <motion.span
          key="draggable3"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1, delay: 0.03 }}
          className="font-light text-[0.85rem] tracking-[0.7px]"
        >
          IPhone Alarm
        </motion.span>
      )}

      {currentChildId !== "draggable0" &&
        currentChildId !== "draggable1" &&
        currentChildId !== "draggable2" &&
        currentChildId !== "draggable3" && (
          <motion.span
            key="no-music-found"
            initial={{ opacity: 0, scale: 0, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: -10 }}
            transition={{ duration: 0.1, delay: 0.03 }}
            className="font-light text-[0.85rem] tracking-[0.7px]"
          >
            Drop disks here
          </motion.span>
        )}
    </AnimatePresence>
  );
};

export default getCurrentAuthor;
