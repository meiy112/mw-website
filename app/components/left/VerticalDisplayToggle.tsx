import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

type ToggleThemeFunction = () => void;

export default function VerticalDisplayToggle({
  toggleTheme,
}: {
  toggleTheme: ToggleThemeFunction;
}) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleTheme();
  };

  const theme = useTheme();

  return (
    <div
      className="toggle-container"
      data-ison={isOn}
      onClick={() => toggleSwitch()}
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <motion.div
        className="w-[23px] h-[23px] rounded-[50%] bg-white"
        layout
        transition={isOn ? spring : bounce}
      />
    </div>
  );
}

const bounce = {
  duration: 1.2,
  ease: bounceEase,
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function bounceEase(x: number) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}
