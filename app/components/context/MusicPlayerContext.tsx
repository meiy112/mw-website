import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type MusicPlayerContextType = {
  showPlayer: boolean;
  setShowPlayer: Dispatch<SetStateAction<boolean>>;
};

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(
  undefined
);

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}

export function MusicPlayerProvider({ children }: { children: any }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <MusicPlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}
