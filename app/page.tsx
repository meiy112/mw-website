"use client";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import React from "react";
import { PageProvider } from "./components/context/PageProvider";
import { DragProvider } from "./components/context/DragContext";
import { BrightnessProvider } from "./components/context/BrightnessContext";
import HomePage from "./components/pages/Home";
import { darkTheme } from "./theme/colors";
import TopNavbar from "./components/navbar/TopNavbar";

export default function Home() {
  const theme = darkTheme;

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
