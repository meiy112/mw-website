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

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main
      className="relative z-10 flex flex-row h-[100%] justify-between"
      style={{ color: theme.palette.primary.contrastText }}
    >
      <DragProvider>
        <PageProvider>
          <BrightnessProvider>
            <ThemeProvider theme={theme}>
              {/*Navbar + Logo*/}
              <div className="left-container">
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
              </div>
              {/*Main middle content*/}
              <div className="main-container">
                <Main
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
              {/*You Might Like*/}
              <div className="right-container">
                <Right />
              </div>
              {isSmallerScreen ? null : <Ornament />}
            </ThemeProvider>
          </BrightnessProvider>
        </PageProvider>
      </DragProvider>
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
