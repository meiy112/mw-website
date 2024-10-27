import { AnimatePresence, motion } from "framer-motion";
import { useDragContext } from "../../context/DragContext";

const style = "text-[0.85rem]";

const GetCurrentAuthor = () => {
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
          className={style}
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
          className={style}
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
          className={style}
        >
          Kiki&#39;s Delivery Service
        </motion.span>
      )}

      {currentChildId === "draggable3" && parent === "droppable" && (
        <motion.span
          key="draggable3"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1, delay: 0.03 }}
          className={style}
        >
          IPhone Alarm
        </motion.span>
      )}

      {currentChildId !== "draggable0" &&
        currentChildId !== "draggable1" &&
        currentChildId !== "draggable2" &&
        currentChildId !== "draggable3" &&
        currentChildId !== "draggable4" && (
          <motion.span
            key="no-music-found"
            initial={{ opacity: 0, scale: 0, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: -10 }}
            transition={{ duration: 0.1, delay: 0.03 }}
            className={style}
          >
            Drop disks here
          </motion.span>
        )}

      {currentChildId === "draggable4" && parent === "droppable" && (
        <motion.span
          key="draggable4"
          initial={{ opacity: 0, scale: 0, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -10 }}
          transition={{ duration: 0.1, delay: 0.03 }}
          className={style}
        >
          Pokemon HGSS
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default GetCurrentAuthor;
