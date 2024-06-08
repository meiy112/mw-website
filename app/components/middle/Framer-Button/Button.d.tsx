import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";
import { MotionProps } from "framer-motion";

export type ButtonProps = {
  hueValue?: number;
  onClick: Dispatch<SetStateAction<boolean>>;
} & MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
