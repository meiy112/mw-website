import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type BrightnessContextType = {
  brightness: number;
  setBrightness: Dispatch<SetStateAction<number>>;
};

const BrightnessContext = createContext<BrightnessContextType | undefined>(
  undefined
);

export function useBrightness() {
  return useContext(BrightnessContext);
}

export function BrightnessProvider({ children }: { children: any }) {
  const [brightness, setBrightness] = useState(70);

  return (
    <BrightnessContext.Provider value={{ brightness, setBrightness }}>
      {children}
    </BrightnessContext.Provider>
  );
}
