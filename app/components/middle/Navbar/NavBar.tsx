import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { usePageContext } from "../../context/PageProvider";
import { motion } from "framer-motion";
import s from "./NavBar.module.css";
import {
  IoHappy,
  IoHappyOutline,
  IoLibrary,
  IoMegaphone,
  IoNewspaper,
  IoRocket,
} from "react-icons/io5";

export default function NavBar() {
  const { currentPage, setCurrentPage } = usePageContext();

  const theme = useTheme();

  function scrollToNavbar() {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  const ICON_SIZE = 20;

  const buttonData = [
    {
      icon: <IoRocket size={ICON_SIZE} />,
      title: "About",
      onClick: () => {
        setCurrentPage("About");
        scrollToNavbar();
      },
    },
    {
      icon: <IoLibrary size={ICON_SIZE} />,
      title: "Projects",
      onClick: () => {
        setCurrentPage("Projects");
        scrollToNavbar();
      },
    },
    {
      icon: <IoMegaphone size={ICON_SIZE} />,
      title: "Feed",
      onClick: () => {
        setCurrentPage("Feed");
        scrollToNavbar();
      },
    },
    {
      icon: <IoNewspaper size={ICON_SIZE} />,
      title: "Blog",
      onClick: () => {
        setCurrentPage("Blog");
        scrollToNavbar();
      },
    },
  ];

  return (
    <>
      <div className="absolute opacity-0 w-10 h-10 flex" id="navbar"></div>
      <nav className={`${s.navContainer}`}>
        {buttonData.map((button, index) => (
          <div
            key={index}
            className="h-[3.5em] flex flex-col justify-center items-center"
          >
            <NavButton
              title={button.title}
              icon={button.icon}
              onClick={button.onClick}
              currentPage={currentPage}
            />
            {/* {currentPage == button.title && (
              <motion.div
                layoutId="main-navbar-indicator"
                className="w-[50px] h-[2.5px] bg-white rounded-[1em]"
              />
            )} */}
          </div>
        ))}
      </nav>
    </>
  );
}

function NavButton({
  title,
  icon,
  onClick,
  currentPage,
}: {
  title: string;
  icon: any;
  onClick: () => void;
  currentPage: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`${s.navButton} ${currentPage === title && s.selectedButton}`}
      aria-current={currentPage === title ? "page" : undefined}
    >
      {icon}
    </button>
  );
}
