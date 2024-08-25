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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1100);
      setIsSmallerScreen(window.innerWidth <= 962);
    };

    handleResize(); // Initial check

    // Add event listener on client-side only
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      className="relative z-10 flex flex-row h-[100%] justify-between"
      style={{ color: theme.palette.primary.contrastText }}
    >
      <DragProvider>
        <PageProvider>
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
              <Main isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
            {/*You Might Like*/}
            <div className="right-container">
              <Right />
            </div>
            {isSmallerScreen ? null : <Ornament />}
          </ThemeProvider>
        </PageProvider>
      </DragProvider>
    </main>
  );
}

function Ornament() {
  const theme = useTheme();
  return (
    <div className="right-0 fixed bottom-12 size-[40vh]">
      {theme.palette.mode === "dark" ? (
        <img src="/ornament-dark.png" alt="" />
      ) : (
        <img src="/ornament-light.png" alt="" />
      )}
    </div>
  );
}
