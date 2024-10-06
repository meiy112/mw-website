import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { powerOut4, center } from "./utils";
import { TrailImageProps } from "./LoadingScreen.d";
import s from "./LoadingScreen.module.css";

const TrailImage: React.FC<TrailImageProps> = ({ position, color }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!position) return;
    const { xOrigin, x, yOrigin, y } = position;
    controls.start({
      x: [xOrigin, x, x],
      y: [yOrigin, y, y],
      opacity: [1, 1, 0],
      scale: [1, 1, 0.2],
      transition: {
        duration: 0.8,
        ease: ["easeOut", powerOut4, powerOut4],
        times: [0, 0.7, 1],
      },
    });
  }, [position]);

  const style = position ? position.style : {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transformTemplate={center}
      style={{ background: color, ...style }}
      className={s.placeholder}
    />
  );
};

export default TrailImage;
