import { useDragContext } from "@/app/components/context/DragContext";
import styles from "./DiskContainer.module.css";

export default function DiskContainer() {
  const dragContext = useDragContext();

  if (!dragContext) {
    return null;
  }

  const { currentChildId, draggables } = dragContext;

  return (
    <div className={`flex align-center justify-center gap-x-[1.25em]`}>
      <div className={styles.diskBackground}>
        {currentChildId !== "draggable0" ? draggables[0] : null}
      </div>
      <div className={styles.diskBackground}>
        {currentChildId !== "draggable1" ? draggables[1] : null}
      </div>
      <div className={styles.diskBackground}>
        {currentChildId !== "draggable2" ? draggables[2] : null}
      </div>
      <div className={styles.diskBackground}>
        {currentChildId !== "draggable3" ? draggables[3] : null}
      </div>
    </div>
  );
}
