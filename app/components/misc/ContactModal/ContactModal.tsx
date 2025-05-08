import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ChatModal from "./ChatModal";
import FormModal from "./FormModal";
import SmallGradient from "@/app/assets/SmallGradient";
import { EmailFormProvider } from "../../context/EmailFormContext";
import { X } from "lucide-react";

export default function ContactModal({
  isModalOpen,
  handleClose,
}: {
  isModalOpen: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}) {
  const closeModal = () => {
    handleClose(false);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <EmailFormProvider>
      <div className="absolute">
        <ModalBackDrop />
        <div className="flex z-50 fixed inset-0 justify-center items-center">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="items-end gap-x-[14px] flex flex-row"
          >
            <motion.li
              className="rounded-[25px] backgroundblur-25"
              key={0}
              variants={item}
              exit={{ scale: 0, opacity: 0 }}
            >
              <FormModal />
            </motion.li>
            <motion.li
              className="rounded-[25px] backgroundblur-25"
              key={1}
              variants={item}
              exit={{ scale: 0, opacity: 0 }}
            >
              <ChatModal />
            </motion.li>
            <motion.li
              key={2}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              }}
              className="relative backgroundblur-25"
            >
              <CloseButton />
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </EmailFormProvider>
  );

  function CloseButton() {
    return (
      <div className="top-[-32em] left-[-41em] absolute">
        <motion.button
          className="size-[55px] flex justify-center items-center glass-container rounded-[20px]"
          onClick={closeModal}
          initial={{ y: 0 }}
          animate={{
            y: 10,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: 2.5,
          }}
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
      </div>
    );
  }
}

function ModalBackDrop() {
  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="block z-30 fixed inset-0 backgroundblur-10"
      style={{
        background:
          "linear-gradient(to bottom, rgba(241, 244, 249, 0.1), rgba(223, 241, 255, 0.1)))",
      }}
    >
      <SmallGradient />
    </motion.div>
  );
}
