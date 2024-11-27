import { AnimatePresence, motion } from "framer-motion";
import Photo from "./Photo";
import { useState } from "react";

export default function PhotoContainer() {
  const [index, setIndex] = useState(0);

  const photoGallery = [
    "./images/Photo/photo-1.jpg",
    "./images/Photo/photo-2.jpg",
    "./images/Photo/photo-3.jpg",
    "./images/Photo/photo-4.jpg",
  ];

  return (
    <motion.div className="relative h-[165px] w-[225px]">
      <AnimatePresence initial={true}>
        <Photo
          url={photoGallery[(index + 1) % 4]}
          key={(index + 1) % 4}
          frontCard={false}
        />
        <Photo
          url={photoGallery[index]}
          key={index}
          frontCard={true}
          index={index}
          setIndex={setIndex}
          drag="x"
        />
      </AnimatePresence>
    </motion.div>
  );
}
