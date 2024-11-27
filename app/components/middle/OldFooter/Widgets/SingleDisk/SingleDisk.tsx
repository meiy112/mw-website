import { useDragContext } from "@/app/components/context/DragContext";
import Disk from "../DiskContainer/Disk";
import styles from "./SingleDisk.module.css";

export default function SingleDisk() {
  const dragContext = useDragContext();

  if (!dragContext) {
    return null;
  }

  const { currentChildId } = dragContext;
  return (
    <div className={styles.diskBackground}>
      {currentChildId !== "draggable4" ? (
        <Disk
          item={{
            img: "./images/Disks/pokemon-disk.jpg",
            id: "pokemon",
            name: "Pewter City",
            artist: "Pokemon HGSS",
          }}
          id="draggable4"
        />
      ) : null}
    </div>
  );
}
