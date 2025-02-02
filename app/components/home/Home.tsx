import { leftVariants, rightVariants, variants } from "@/app/page.anim";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Sidebar from "../left/Sidebar";
import Right from "../right/right";
import Main from "../middle/main";
import { useMusicPlayer } from "../context/MusicPlayerContext";

export default function HomePage({
  isSmallScreen,
  isSmallerScreen,
}: {
  isSmallScreen: boolean;
  isSmallerScreen: boolean;
}) {
  const musicPlayerContext = useMusicPlayer();

  if (!musicPlayerContext) {
    throw new Error(
      "MusicPlayerContext must be used within a MusicPlayerProvider!"
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={`flex flex-col h-[100%] w-[100%]`}>
      <div className={`flex flex-row h-[100%] justify-center`}>
        {/* Navbar + Logo */}
        <motion.div
          className="h-[100%] left-container"
          initial="hidden"
          animate="visible"
          variants={leftVariants}
          layout
        >
          <Sidebar setIsModalOpen={setIsModalOpen} />
        </motion.div>
        {/* Main middle content */}
        <motion.div
          className="pt-[4.2em] w-[52%] main-container"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <Main isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </motion.div>
        {/* You Might Like */}
        <motion.div
          className="right-container"
          initial="hidden"
          animate="visible"
          variants={rightVariants}
          layout
        >
          <Right />
        </motion.div>
      </div>
    </main>
  );
}
