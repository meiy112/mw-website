"use client";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { PageProvider } from "./components/context/PageProvider";
import { DragProvider } from "./components/context/DragContext";
import { BrightnessProvider } from "./components/context/BrightnessContext";
import HomePage from "./components/home/Home";
import { darkTheme } from "./theme/colors";
import TopNavbar from "./components/navbar/TopNavbar";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import { MusicPlayerProvider } from "./components/context/MusicPlayerContext";
import Head from "next/head";

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

  const [isLoading, setIsLoading] = useState(true);
  const [loadVisible, setLoadVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  const [modelLoaded, setModelLoaded] = useState(false);

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

  useEffect(() => {
    const EXPIRATION_TIME_MS = 10 * 60 * 1000;
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
    if (!isLoading) {
      const timeoutId = setTimeout(() => {
        setLoadVisible(false);

        const newVisitTime = Date.now();

        localStorage.setItem(
          "hasVisited",
          JSON.stringify({ visited: true, visitedTime: newVisitTime })
        );
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return (
    <MusicPlayerProvider>
      <DragProvider>
        <PageProvider>
          <BrightnessProvider>
            <ThemeProvider theme={theme}>
              <Head>
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <main
                className={`flex flex-col h-[100%] w-[100%] justify-between`}
              >
                <TopNavbar />
                <AnimatePresence mode="wait">
                  {loadVisible && (
                    <LoadingScreen
                      setIsLoading={setIsLoading}
                      isLoading={isLoading}
                      modelLoaded={modelLoaded}
                    />
                  )}
                  {!loadVisible && pageVisible && (
                    <>
                      <div className="flex-grow">
                        <HomePage
                          isSmallScreen={isSmallScreen}
                          isSmallerScreen={isSmallerScreen}
                        />
                      </div>
                      <Footer />
                    </>
                  )}
                </AnimatePresence>
              </main>
            </ThemeProvider>
          </BrightnessProvider>
        </PageProvider>
      </DragProvider>
    </MusicPlayerProvider>
  );
}
