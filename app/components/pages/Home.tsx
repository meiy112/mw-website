import { leftVariants, rightVariants, variants } from "@/app/page.anim";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import InteractiveSidebar from "../left/InteractiveSidebar";
import Sidebar from "../left/Sidebar";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Right from "../right/right";
import Main from "../middle/main";

export default function HomePage() {
  // for contact modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { currentPage } = usePageContext();

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [modelLoaded, setModelLoaded] = useState(false);

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

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <main className={`flex flex-col h-[100%] w-[100%]`}>
      <div className={`relative z-10 flex flex-row h-[100%] justify-between}`}>
        {/*Navbar + Logo*/}
        <motion.div
          className="pt-[4.2em] left-container box-border h-[100%]"
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          variants={leftVariants}
          layout
        >
          {isSmallScreen ? (
            <InteractiveSidebar setIsModalOpen={setIsModalOpen} />
          ) : (
            <Sidebar setIsModalOpen={setIsModalOpen} />
          )}
        </motion.div>
        {/*Main middle content*/}
        <motion.div
          className="pt-[4.2em] main-container"
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          variants={variants}
        >
          <Main
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setModelLoaded={setModelLoaded}
          />
        </motion.div>
        {/*You Might Like*/}
        <motion.div
          className="pt-[4.2em] right-container"
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          variants={rightVariants}
          layout
        >
          <Right />
        </motion.div>
      </div>
      <LoadingScreen
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        modelLoaded={modelLoaded}
      />
    </main>
  );
}
