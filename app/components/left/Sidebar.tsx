"use client";
import SideButton from "./SideButton";
import { usePageContext } from "../context/PageProvider";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { LastUpdatedDisplay } from "./LastUpdatedDisplay";
import DisplayContainer from "./DisplaySetting/DisplayContainer";
import { motion } from "framer-motion";
import { Countdown } from "./Countdown/Countdown";

type ToggleThemeFunction = () => void;

export default function Sidebar({
  toggleTheme,
  setIsModalOpen,
}: {
  toggleTheme: ToggleThemeFunction;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { setCurrentPage, currentPage } = usePageContext();
  // ------------------------------ button data ------------------------------
  function scrollToNavbar() {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  const buttonData = [
    {
      text: "About",
      onClick: () => {
        setCurrentPage("About");
        scrollToNavbar();
      },
    },
    {
      text: "Projects",
      onClick: () => {
        setCurrentPage("Projects");
        scrollToNavbar();
      },
    },
    {
      text: "Feed",
      onClick: () => {
        setCurrentPage("Feed");
        scrollToNavbar();
      },
    },
    {
      text: "Blog",
      onClick: () => {
        setCurrentPage("Blog");
        scrollToNavbar();
      },
    },
    {
      text: "Contact",
      onClick: () => {
        setIsModalOpen(true);
      },
    },
  ];
  // -------------------------------------------------------------------------

  const endDate = new Date("2025-05-02T17:00:00");

  return (
    <div className="sidebar fixed h-screen items-baseline flex flex-col pb-[5vh] justify-between">
      <div className="gap-y-[0.5em] flex flex-col">
        <DuckLogo />
        {buttonData.map((button, index) => (
          <div className="relative flex w-[12vw]" key={index}>
            <SideButton onClick={button.onClick} text={button.text} />
            {currentPage == button.text && (
              <motion.div
                layoutId="sidebar-indicator"
                className={`element1 absolute w-[12vw] h-[100%] rounded-[12em] inset-0 -z-10`}
              />
            )}
          </div>
        ))}
      </div>
      <Countdown date={endDate} />
    </div>
  );
}

function DuckLogo() {
  const handleNavigation = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex mt-[3.125em] w-[100%] mb-[1em] items-center">
      <div onClick={handleNavigation} className="cursor-pointer ml-[2%]">
        <Image src="/Logo.png" alt="Duck Logo" width={40} height={40} />
      </div>
      {/* <div
        onClick={handleNavigation}
        className="cursor-pointer flex flex-col gap-y-[0.2em] h-full text-[1.1rem]"
      >
        <span>Maggie Weng</span>
        <span className="opacity-[0.5] text-[0.75rem]">
          Full-Stack Developer
        </span>
      </div> */}
    </div>
  );
}
