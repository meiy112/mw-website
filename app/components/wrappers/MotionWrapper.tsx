import { motion } from "framer-motion";
import { ReactNode } from "react";
import { variants } from "@/app/page.anim";
import { Theme } from "@mui/material/styles";

interface MotionWrapperProps {
  isLoading: boolean;
  theme: Theme;
  children: ReactNode;
}

export default function MotionWrapper({
  isLoading,
  theme,
  children,
}: MotionWrapperProps) {
  return (
    <motion.div
      className="h-[100%] w-[100%] flex flex-col rounded-t-[30px]"
      style={{
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
      initial="hidden"
      animate={isLoading ? "hidden" : "visible"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
