import { Emoji, EmojiStyle } from "emoji-picker-react";
import { useBrightness } from "../context/BrightnessContext";
import { usePageContext } from "../context/PageProvider";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

interface SideButtonProps {
  onClick: () => void;
  text: string;
}

export default function SideButton({ onClick, text }: SideButtonProps) {
  const { currentPage } = usePageContext();
  const theme = useTheme();

  const brightnessContext = useBrightness();

  if (!brightnessContext) {
    throw new Error(
      "BrightnessControl must be used within a BrightnessProvider"
    );
  }

  const { brightness } = brightnessContext;

  return (
    <button
      onClick={onClick}
      className={`side-button relative rounded-[12em] justify-start w-[100%] py-[13px] flex items-center ml-[0.3125vw] ${
        currentPage === text ? "active" : "nav-button opacity-[0.5]"
      }`}
      type="button"
    >
      <div className="mr-[3.25vw] relative h-[100%] flex items-center justify-center">
        {currentPage === text ? (
          <motion.div
            layoutId="sidebar-dot"
            className="glowing-dot absolute"
            style={{
              boxShadow: `0px 0px 15px 2px rgba(255, 255, 255, ${
                brightness / 100 > 100
                  ? brightness / 100
                  : brightness / 100 + 0.1
              })`,
              backgroundColor: theme.palette.primary.contrastText,
            }}
          />
        ) : null}
      </div>
      <h1
        className={`${
          currentPage === text ? "font-medium" : "font-regular"
        } text-[0.95rem] tracking-[0.5px]`}
      >
        {text}
      </h1>
    </button>
  );
}
