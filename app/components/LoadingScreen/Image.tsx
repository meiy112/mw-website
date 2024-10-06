import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { powerOut4, center, IMAGE_SIZE } from "./utils";
import { TrailImageProps } from "./LoadingScreen.d";
import s from "./LoadingScreen.module.css";

const TrailImage: React.FC<TrailImageProps> = ({ position, image }) => {
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
      style={{ ...style }}
      className={`${s.placeholder} ${s.image}`}
    >
      <img src={image} width={IMAGE_SIZE} height={IMAGE_SIZE} alt="png" />
    </motion.div>
  );
};

export default TrailImage;
