import { Emoji } from "emoji-picker-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useEmailForm } from "../../context/EmailFormContext";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ReactionSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [currentEmoji, setCurrentEmoji] = useState("Cool");

  const emailForm = useEmailForm();

  useEffect(() => {
    const currentIndex = positionIndexes[3];
    switch (currentIndex) {
      case 0:
        setCurrentEmoji("Nerdy");
        break;
      case 1:
        setCurrentEmoji("Friendly");
        break;
      case 2:
        setCurrentEmoji("Funny");
        break;
      case 3:
        setCurrentEmoji("Cool");
        break;
      case 4:
        setCurrentEmoji("Inquiring");
        break;
      case 5:
        setCurrentEmoji("Indifferent");
        break;
      case 6:
        setCurrentEmoji("Cowboy");
        break;
    }
  }, [positionIndexes, currentEmoji]);

  useEffect(() => {
    emailForm.setReaction = currentEmoji;
  }, [currentEmoji]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 7
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 6) % 7
      );

      return updatedIndexes;
    });
  };

  const emojis = [
    <Emoji key={"Nerdy"} size={55} unified="1f920" />,
    <Emoji key={"Friendly"} size={55} unified="1fae4" />,
    <Emoji key={"Funny"} size={55} unified="1f914" />,
    <Emoji key={"Cool"} size={55} unified="1f60e" />,
    <Emoji key={"Inquiring"} size={55} unified="1f602" />,
    <Emoji key={"Indifferent"} size={55} unified="1f917" />,
    <Emoji key={"Cowboy"} size={55} unified="1f913" />,
  ];

  const positions = [
    "right2",
    "right1",
    "right",
    "center",
    "left",
    "left1",
    "left2",
  ];

  const emojiVariants = {
    left2: { x: -80, scale: 0, zIndex: 1, opacity: 0 },
    left1: { x: -70, scale: 0.4, zIndex: 2, opacity: 0.6 },
    left: { x: -45, scale: 0.6, zIndex: 3, opacity: 0.8 },
    center: { x: 0, scale: 1, zIndex: 5, opacity: 1 },
    right: { x: 45, scale: 0.6, zIndex: 3, opacity: 0.8 },
    right1: { x: 70, scale: 0.4, zIndex: 2, opacity: 0.6 },
    right2: { x: 80, scale: 0, zIndex: 1, opacity: 0 },
  };

  return (
    <div className="p-[1.2em] h-[100px] flex items-center flex-col justify-top">
      {emojis.map((emoji, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={positions[positionIndexes[index]]}
          variants={emojiVariants}
          transition={{ duration: 0.5 }}
          className="w-[40%] absolute flex items-center justify-center"
        >
          {emoji}
        </motion.div>
      ))}

      <div className="gap-x-[0.5em] flex flex-row justify-center items-center mt-[3.8em]">
        <BackButton handleBack={handleBack} />
        <p className="rounded-[1em] glass-input text-[0.75em] font-extralight w-[7em] h-[1.9em] flex items-center justify-center">
          {currentEmoji}
        </p>
        <NextButton handleNext={handleNext} />
      </div>
    </div>
  );
};

const NextButton = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <button
      className="size-[1.875em] flex items-center justify-center hoverable2 rounded-[50%]"
      onClick={handleNext}
    >
      <ChevronRight />
    </button>
  );
};

const BackButton = ({ handleBack }: { handleBack: () => void }) => {
  return (
    <button
      className="flex items-center justify-center hoverable2 rounded-[50%] size-[1.875em]"
      onClick={handleBack}
    >
      <ChevronLeft />
    </button>
  );
};

export default ReactionSlider;
