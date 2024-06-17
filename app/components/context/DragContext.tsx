import { DndContext } from "@dnd-kit/core";
import React, { ReactNode, createContext, useContext, useState } from "react";
import Disk from "../middle/Footer/Widgets/DiskContainer/Disk";
import { diskData } from "../data/diskData";

type DragContextType = {
  parent: any;
  setParent: any;
  draggables: any;
  currentChildId: string | null;
  isDragging: boolean;
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

  const draggables = [
    <Disk id="draggable0" item={diskData[0]} key={0} />,
    <Disk id="draggable1" item={diskData[1]} key={1} />,
    <Disk id="draggable2" item={diskData[2]} key={2} />,
    <Disk id="draggable3" item={diskData[3]} key={3} />,
  ];

  return (
    <DragContext.Provider
      value={{ parent, isDragging, setParent, draggables, currentChildId }}
    >
      <DndContext
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        {children}
      </DndContext>
    </DragContext.Provider>
  );

  function handleDragEnd({ active, over }: { active: any; over: any }) {
    setParent(over ? over.id : null);
    setIsDragging(false);
    if (over) {
      setCurrentChildId(active.id);
    } else {
      setCurrentChildId(null);
    }
  }
}
