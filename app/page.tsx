"use client";
import Right from "./components/right/right";
import Sidebar from "./components/left/Sidebar";
import Main from "./components/middle/main";
import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../app/theme/colors";
import React from "react";
import { PageProvider } from "./components/context/PageProvider";
import InteractiveSidebar from "./components/left/InteractiveSidebar";
import { DragProvider } from "./components/context/DragContext";
import { BrightnessProvider } from "./components/context/BrightnessContext";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { motion } from "framer-motion";
import { leftVariants, rightVariants, variants } from "./page.anim";

export default function Home() {
  // for contact modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // for theme
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  // for screen size responsiveness
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
    <main
      className={`relative z-10 flex flex-row h-[100%] justify-between}`}
      style={{ color: theme.palette.primary.contrastText }}
    >
      <DragProvider>
        <PageProvider>
          <BrightnessProvider>
            <ThemeProvider theme={theme}>
              {/*Navbar + Logo*/}
              <motion.div
                className="left-container"
                initial="hidden"
                animate={isLoading ? "hidden" : "visible"}
                variants={leftVariants}
                layout
              >
                {isSmallScreen ? (
                  <InteractiveSidebar
                    toggleTheme={toggleTheme}
                    setIsModalOpen={setIsModalOpen}
                  />
                ) : (
                  <Sidebar
                    toggleTheme={toggleTheme}
                    setIsModalOpen={setIsModalOpen}
                  />
                )}
              </motion.div>
              {/*Main middle content*/}
              <motion.div
                className="main-container"
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
                className="right-container"
                initial="hidden"
                animate={isLoading ? "hidden" : "visible"}
                variants={rightVariants}
                layout
              >
                <Right />
              </motion.div>
              {isSmallerScreen ? null : <Ornament />}
            </ThemeProvider>
          </BrightnessProvider>
        </PageProvider>
      </DragProvider>
      <LoadingScreen
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        modelLoaded={modelLoaded}
      />
    </main>
  );
}

function Ornament() {
  const theme = useTheme();
  return (
    <div className="right-0 fixed bottom-12 size-[42vh]">
      {theme.palette.mode === "dark" ? (
        <img src="/ornament-dark.png" alt="" />
      ) : (
        <img src="/ornament-light.png" alt="" />
      )}
    </div>
  );
}
