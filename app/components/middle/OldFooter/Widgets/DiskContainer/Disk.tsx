import { useDraggable } from "@dnd-kit/core";
import styles from "./DiskContainer.module.css";
import { CSS } from "@dnd-kit/utilities";
import { createPortal } from "react-dom";

export default function Disk({
  item,
  id,
}: {
  item: { img: string; id: string; name: string; artist: string };
  id: string;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
    });
  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 100 : 10,
  };

  const DiskContent = (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`select-none cursor-grab w-[67px] flex items-center justify-center relative aspect-square rounded-[50%] overflow-hidden`}
    >
      <img src={item.img} alt="disk" />
      <div
        className={`${styles.diskCenter} absolute w-[12px] bg-[#101010] aspect-square rounded-[50%]`}
      />
      <div className={`${styles.holographic}`}></div>
      <div className={`${styles.diskBorder}`}></div>
    </div>
  );

  return DiskContent;
}
