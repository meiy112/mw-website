import {
  createContext,
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useIsFullyVisible from "../hooks/useIsFullyVisible";

type MusicPlayerContextType = {
  showPlayer: boolean;
  setShowPlayer: Dispatch<SetStateAction<boolean>>;
  isFullyVisible: boolean;
  recalculateVisibility: () => void;
  elementRef: RefObject<HTMLDivElement>;
};

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(
  undefined
);

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}

export function MusicPlayerProvider({ children }: { children: any }) {
  const elementRef = useRef<HTMLDivElement>(null);

  const [showPlayer, setShowPlayer] = useState(false);

  const { isFullyVisible, recalculateVisibility } =
    useIsFullyVisible(elementRef);

  useEffect(() => {
    console.log("fully visible:", isFullyVisible);
  }, [isFullyVisible]);

  return (
    <MusicPlayerContext.Provider
      value={{
        showPlayer,
        setShowPlayer,
        isFullyVisible,
        recalculateVisibility,
        elementRef,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}
