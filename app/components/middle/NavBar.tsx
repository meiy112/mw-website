import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { usePageContext } from "../context/PageProvider";
import { motion } from "framer-motion";

export default function NavBar() {
  const { currentPage, setCurrentPage } = usePageContext();

  const theme = useTheme();

  function scrollToNavbar() {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  const buttonData = [
    {
      title: "About",
      onClick: () => {
        setCurrentPage("About");
        scrollToNavbar();
      },
    },
    {
      title: "Projects",
      onClick: () => {
        setCurrentPage("Projects");
        scrollToNavbar();
      },
    },
    {
      title: "Feed",
      onClick: () => {
        setCurrentPage("Feed");
        scrollToNavbar();
      },
    },
    {
      title: "Blog",
      onClick: () => {
        setCurrentPage("Blog");
        scrollToNavbar();
      },
    },
  ];

  return (
    <>
      <div className="absolute opacity-0 w-10 h-10" id="navbar"></div>
      <nav
        className={`box-shadow backgroundblur-10 sticky top-0 z-20 flex flex-row justify-between px-[4.3vw] h-[3.5em] items-start`}
      >
        {buttonData.map((button, index) => (
          <div
            key={index}
            className="h-[3.5em] flex flex-col justify-center items-center"
          >
            <NavButton
              title={button.title}
              onClick={button.onClick}
              currentPage={currentPage}
            />
            {currentPage == button.title && (
              <motion.div
                layoutId="main-navbar-indicator"
                className="w-[50px] h-[2.5px] bg-white rounded-[1em]"
              />
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

function NavButton({
  title,
  onClick,
  currentPage,
}: {
  title: string;
  onClick: () => void;
  currentPage: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`font-semibold tracking-[0.32px] text-[1rem] hoverable h-[100%] w-[130px] rounded-[10px]`}
      style={currentPage === title ? { opacity: 1 } : { opacity: 0.5 }}
      aria-current={currentPage === title ? "page" : undefined}
    >
      {title}
    </button>
  );
}
