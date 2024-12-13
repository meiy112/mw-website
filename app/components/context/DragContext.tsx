import { DndContext } from "@dnd-kit/core";
import React, { ReactNode, createContext, useContext, useState } from "react";
import Disk from "../middle/OldFooter/Widgets/DiskContainer/Disk";
import { diskData } from "../data/diskData";
import { useMusicPlayer } from "./MusicPlayerContext";

type DragContextType = {
  parent: any;
  setParent: any;
  draggables: any;
  currentChildId: string | null;
  isDragging: boolean;
  isDraggingOther: boolean;
  dragEnd: boolean;
};

const DragContext = createContext<DragContextType | undefined>(undefined);

export const useDragContext = () => useContext(DragContext);

interface DragProviderProps {
  children: ReactNode;
}

export function DragProvider({ children }: DragProviderProps) {
  const [parent, setParent] = useState(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [currentChildId, setCurrentChildId] = useState<string | null>(null);
  const [isDraggingOther, setIsDraggingOther] = useState(false);
  const [dragEnd, toggleDragEnd] = useState(false);
  const musicContext = useMusicPlayer();

  if (!musicContext) {
    return null;
  }

  const { setShowPlayer, isFullyVisible, recalculateVisibility } = musicContext;

  const draggables = [
    <Disk id="draggable0" item={diskData[0]} key={0} />,
    <Disk id="draggable1" item={diskData[1]} key={1} />,
    <Disk id="draggable2" item={diskData[2]} key={2} />,
    <Disk id="draggable3" item={diskData[3]} key={3} />,
    <Disk id="draggable4" item={diskData[4]} key={4} />,
  ];

  return (
    <DragContext.Provider
      value={{
        parent,
        isDragging,
        setParent,
        draggables,
        currentChildId,
        isDraggingOther,
        dragEnd,
      }}
    >
      <DndContext
        onDragStart={({ active }) => {
          recalculateVisibility();
          if (currentChildId === null || !isFullyVisible) {
            setShowPlayer(true);
          }
          if (currentChildId === null || active.id === currentChildId) {
            setIsDragging(true);
          } else {
            setIsDraggingOther(true);
          }
        }}
        onDragEnd={handleDragEnd}
      >
        {children}
      </DndContext>
    </DragContext.Provider>
  );

  function handleDragEnd({ active, over }: { active: any; over: any }) {
    setIsDragging(false);
    setIsDraggingOther(false);
    setShowPlayer(false);

    if (over) {
      setCurrentChildId(active.id);
      setParent(over.id);
    } else if (active.id === currentChildId) {
      setCurrentChildId(null);
      setParent(null);
    } else {
      toggleDragEnd((prevDragEnd) => !prevDragEnd);
    }
  }
}
