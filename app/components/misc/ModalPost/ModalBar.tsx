import { Emoji } from "emoji-picker-react";
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";
import { X } from "lucide-react";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    scale: 0.3,
    transition: { duration: 0.1 },
  },
};

export default function ModalBar({ onClick }: { onClick: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseButtonClick = () => {
    onClick();
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className="relative mt-[5vh] w-[55px]">
      <motion.div className="flex flex-col gap-y-[16px] fixed">
        <CloseButton onClick={onCloseButtonClick} />
        <ReactionBar isModalOpen={isModalOpen} />
      </motion.div>
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      className="size-[55px] flex items-center justify-center rounded-[23px] glass-container-2"
      onClick={onClick}
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -40, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        whileHover={{
          scale: 1.3,
        }}
        className="flex items-center justify-center rounded-[23px] flex w-[100%] h-[100%]"
      >
        <X size={22} />
      </motion.div>
    </motion.button>
  );
}

function ReactionBar({ isModalOpen }: { isModalOpen: boolean }) {
  const onClick = ({ index }: { index: number }) => {
    const jsConfetti = new JSConfetti();

    switch (index) {
      case 0:
        jsConfetti.addConfetti({
          emojis: ["🥰", "😍"],
        });
        break;
      case 1:
        jsConfetti.addConfetti({
          emojis: ["🤩", "✨"],
        });
        break;
      case 2:
        jsConfetti.addConfetti({
          emojis: ["🤯", "😮"],
        });
        break;
      case 3:
        jsConfetti.addConfetti({
          emojis: ["🦆"],
        });
        break;
      case 4:
        jsConfetti.addConfetti({
          emojis: ["🥳", "🎉"],
        });
        break;
      case 5:
        jsConfetti.addConfetti({
          emojis: ["😛", "😝"],
        });
        break;
      case 6:
        jsConfetti.addConfetti({
          emojis: ["👍"],
        });
        break;
    }
  };

  const initialEmojiData = [
    "1f970",
    "2728",
    "1f62e",
    "1f986",
    "1f389",
    "1f61b",
    "1f44d",
  ];

  const [emojiData, setEmojiData] = useState(initialEmojiData);

  const handleHoverStart = (index: number) => {
    const newEmojiData = [...emojiData];

    switch (index) {
      case 0:
        newEmojiData[index] = "1f60d";
        break;
      case 1:
        newEmojiData[index] = "1f929";
        break;
      case 2:
        newEmojiData[index] = "1f92f";
        break;
      case 4:
        newEmojiData[index] = "1f973";
        break;
      case 5:
        newEmojiData[index] = "1f61d";
        break;
      case 6:
        newEmojiData[index] = "1f90c";
        break;
    }

    setEmojiData(newEmojiData);
  };

  const handleHoverEnd = (index: number) => {
    // Reset the Unicode value back to the initial one when hover ends
    const newEmojiData = [...emojiData];
    newEmojiData[index] = initialEmojiData[index];
    setEmojiData(newEmojiData);
  };

  return (
    <motion.nav
      className="overflow-visible"
      animate={isModalOpen ? "open" : "closed"}
      initial="closed"
    >
      <motion.div
        className="justify-center items-center rounded-[23px] w-[100%] py-[25px] gap-y-[23px] flex flex-col glass-container-2"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            x: 0,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.5,
              staggerChildren: 0.1,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            x: -40,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.4,
              //  when: "afterChildren",
              staggerDirection: -1,
              //  staggerChildren: 0.06,
            },
          },
        }}
      >
        {emojiData.map((unicode, index) => (
          <motion.button
            variants={itemVariants}
            key={index}
            onClick={() => onClick({ index })}
            onHoverStart={() => handleHoverStart(index)}
            onHoverEnd={() => handleHoverEnd(index)}
            whileHover={{
              scale: 1.5,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Emoji unified={unicode} size={28} />
          </motion.button>
        ))}
      </motion.div>
    </motion.nav>
  );
}
