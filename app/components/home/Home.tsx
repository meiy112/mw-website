import { leftVariants, rightVariants, variants } from "@/app/page.anim";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import InteractiveSidebar from "../left/InteractiveSidebar";
import Sidebar from "../left/Sidebar";
import Right from "../right/right";
import Main from "../middle/main";
import { useMusicPlayer } from "../context/MusicPlayerContext";

export default function HomePage() {
  const musicPlayerContext = useMusicPlayer();

  if (!musicPlayerContext) {
    throw new Error(
      "MusicPlayerContext must be used within a MusicPlayerProvider!"
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1100);
      setIsSmallerScreen(window.innerWidth <= 962);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={`flex flex-col h-[100%] w-[100%]`}>
      <div className={`flex flex-row h-[100%] justify-center`}>
        {/* Navbar + Logo */}
        <motion.div
          className="left-container box-border h-[100%]"
          initial="hidden"
          animate="visible"
          variants={leftVariants}
          layout
        >
          {isSmallScreen ?? <Sidebar setIsModalOpen={setIsModalOpen} />}
        </motion.div>
        {/* Main middle content */}
        <motion.div
          className="pt-[4.2em] main-container"
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
