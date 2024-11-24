import { leftVariants, rightVariants, variants } from "@/app/page.anim";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import InteractiveSidebar from "../left/InteractiveSidebar";
import Sidebar from "../left/Sidebar";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Right from "../right/right";
import Main from "../middle/main";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadVisible, setLoadVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

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
    const EXPIRATION_TIME_MS = 5 * 60 * 1000;
    const visitData = JSON.parse(localStorage.getItem("hasVisited") || "{}");
    const now = Date.now();
    if (
      visitData !== null &&
      visitData &&
      visitData.visitedTime &&
      now - visitData.visitedTime <= EXPIRATION_TIME_MS
    ) {
      setPageVisible(false);
      setIsLoading(false);
      setLoadVisible(false);

      const timeoutId = setTimeout(() => {
        setPageVisible(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    } else {
      setIsLoading(true);
      setLoadVisible(true);
    }
  }, []);

  useEffect(() => {
    if (pageVisible && !isLoading) {
      const timeoutId = setTimeout(() => {
        document.body.style.overflow = "";
      }, 2500);
      return () => clearTimeout(timeoutId);
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [pageVisible, isLoading]);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load("/3d/avatar/24_10_05_06_53_13_179.gltf", () => {
      setModelLoaded(true);
    });
  }, [setModelLoaded]);

  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => {
        setLoadVisible(false);

        const newVisitTime = Date.now();

        localStorage.setItem(
          "hasVisited",
          JSON.stringify({ visited: true, visitedTime: newVisitTime })
        );

        console.log("new visit time set as:", newVisitTime);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {loadVisible && (
        <LoadingScreen
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          modelLoaded={modelLoaded}
        />
      )}
      {!loadVisible && pageVisible && (
        <main className={`flex flex-col h-[100%] w-[100%]`}>
          <div
            className={`relative z-10 flex flex-row h-[100%] justify-between}`}
          >
            {/* Navbar + Logo */}
            <motion.div
              className="pt-[4.2em] left-container box-border h-[100%]"
              initial="hidden"
              animate="visible"
              variants={leftVariants}
              layout
            >
              {isSmallScreen ? (
                <InteractiveSidebar setIsModalOpen={setIsModalOpen} />
              ) : (
                <Sidebar setIsModalOpen={setIsModalOpen} />
              )}
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
              className="pt-[4.2em] right-container"
              initial="hidden"
              animate="visible"
              variants={rightVariants}
              layout
            >
              <Right />
            </motion.div>
          </div>
        </main>
      )}
    </AnimatePresence>
  );
}
