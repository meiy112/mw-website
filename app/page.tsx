"use client";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import { PageProvider } from "./components/context/PageProvider";
import { DragProvider } from "./components/context/DragContext";
import { BrightnessProvider } from "./components/context/BrightnessContext";
import HomePage from "./components/home/Home";
import { darkTheme } from "./theme/colors";
import TopNavbar from "./components/navbar/TopNavbar";

export default function Home() {
  const theme = darkTheme;
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const clearTimer = React.useCallback(
    () => clearTimeout(timeoutRef.current),
    []
  );

  useEffect(() => {
    if (timeoutRef.current) clearTimer();
    timeoutRef.current = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return (
    <DragProvider>
      <PageProvider>
        <BrightnessProvider>
          <ThemeProvider theme={theme}>
            <main className={`flex flex-col h-[100%] w-[100%]`}>
              <TopNavbar />
              <HomePage />
            </main>
          </ThemeProvider>
        </BrightnessProvider>
      </PageProvider>
    </DragProvider>
  );
}
