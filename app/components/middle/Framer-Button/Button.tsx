import { useState, FC } from "react";
import { motion } from "framer-motion";
import {
  buttonAnim,
  highlightContainerAnim,
  highlightAnim,
  labelAnim,
} from "./Button.anim";
import Sparkles from "./Sparkles";
import Stars from "./Stars";
import { ButtonProps } from "./Button.d";
import S from "./Button.module.css";

const Button: FC<ButtonProps> = ({
  hueValue = 0,
  onClick,
  ...rest
}: ButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const [sparkles] = useState<number[]>(Array(30).fill(0));

  return (
    <div className="relative">
      <Sparkles sparkles={sparkles} hover={hover} />
      <motion.button
        {...rest}
        variants={buttonAnim}
        initial="init"
        animate={hover ? "anim" : "init"}
        whileTap="tap"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className={S.btn}
        type="button"
        style={{ filter: `hue-rotate(${hueValue}deg)` }}
        onClick={onClick}
      >
        <motion.div
          data-testid="highlight"
          variants={highlightContainerAnim}
          className={S.highlightContainer}
          animate={hover ? "anim" : "init"}
        >
          <motion.div
            variants={highlightAnim}
            className={S.highlight}
          ></motion.div>
        </motion.div>
        <motion.span variants={labelAnim}>Contact</motion.span>
        <Stars hover={hover} />
      </motion.button>
    </div>
  );
};

export default Button;
