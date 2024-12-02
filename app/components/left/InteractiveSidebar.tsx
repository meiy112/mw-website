"use client";
import {
  LuMessageSquare,
  LuHome,
  LuFolderOpen,
  LuUserCircle,
  LuPencilLine,
  LuAlignLeft,
  LuSun,
  LuMoonStar,
} from "react-icons/lu";
import { usePageContext } from "../context/PageProvider";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

export default function InteractiveSidebar({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { setCurrentPage } = usePageContext();
  // ------------------------------ button data ------------------------------
  function scrollToNavbar() {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  // whether the interactive sidebar is open
  const [isOpen, setIsOpen] = useState(false);

  const buttonData = [
    {
      text: "About",
      icon: <LuHome size={26} className={`${isOpen ? "mr-[2.5vw]" : ""}`} />,
      onClick: () => {
        setCurrentPage("About");
        scrollToNavbar();
      },
    },
    {
      text: "Projects",
      icon: (
        <LuFolderOpen size={26} className={`${isOpen ? "mr-[2.5vw]" : ""}`} />
      ),
      onClick: () => {
        setCurrentPage("Projects");
        scrollToNavbar();
      },
    },
    {
      text: "Resume",
      icon: (
        <LuUserCircle size={26} className={`${isOpen ? "mr-[2.5vw]" : ""}`} />
      ),
      onClick: () => {
        setCurrentPage("Resume");
        scrollToNavbar();
      },
    },
    {
      text: "Blog",
      icon: (
        <LuPencilLine size={26} className={`${isOpen ? "mr-[2.5vw]" : ""}`} />
      ),
      onClick: () => {
        setCurrentPage("Blog");
        scrollToNavbar();
      },
    },
    {
      text: "Contact",
      icon: (
        <LuMessageSquare
          size={26}
          className={`${isOpen ? "mr-[2.5vw]" : ""}`}
        />
      ),
      onClick: () => {
        setIsModalOpen(true);
      },
    },
  ];
  // -------------------------------------------------------------------------

  const theme = useTheme();

  return (
    <motion.div
      className={`interactive-sidebar pt-[4.2em] h-[100vh] rounded-r-[20px] z-19 sticky top-0 flex flex-col pb-[6vh] gap-y-[0.5em] ${
        isOpen
          ? "items-baseline w-[250px] glass-container-4 px-[20px]"
          : "items-center w-[60px]"
      }`}
      style={isOpen ? {} : { background: theme.palette.background.default }}
    >
      <Header />
      {buttonData.map((button, index) => (
        <InteractiveSideButton
          key={index}
          onClick={button.onClick}
          text={button.text}
          icon={button.icon}
        />
      ))}
      <div className="flex flex-col justify-end flex-1 items-center gap-y-[5px]">
        {/*<LuSun
          size={20}
          className={`${theme.palette.mode == "dark" ? "opacity-[0.5]" : ""}`}
        />
        <VerticalDisplayToggle toggleTheme={toggleTheme} />
        <LuMoonStar
          size={20}
          className={`${theme.palette.mode == "dark" ? "" : "opacity-[0.5]"}`}
        />*/}
      </div>
    </motion.div>
  );

  interface SideButtonProps {
    onClick: () => void;
    text: string;
    icon: ReactNode;
  }

  function Header() {
    return isOpen ? (
      <div className="h-[32px] w-[100%] mt-[2em] mb-[1em] px-[20px] flex flex-row justify-between">
        <DuckLogo />
        <OpenButton />
      </div>
    ) : (
      <div className="h-[32px] mt-[2em] mb-[1em]">
        <OpenButton />
      </div>
    );
  }

  function OpenButton() {
    return (
      <button onClick={() => setIsOpen(!isOpen)}>
        <LuAlignLeft size={26} />
      </button>
    );
  }

  function InteractiveSideButton({ onClick, text, icon }: SideButtonProps) {
    const { currentPage } = usePageContext();

    return isOpen ? (
      <button
        onClick={onClick}
        className={`px-[20px] rounded-[30px] justify-start w-[200px] h-[50px] my-[5px] flex items-center ml-[0.3125vw] nav-button ${
          currentPage === text ? "active glass-container-3" : ""
        }`}
        type="button"
      >
        {icon}
        <h1 className="font-medium text-[1.065rem] tracking-[0.32px]">
          {text}
        </h1>
      </button>
    ) : (
      <button
        onClick={onClick}
        className={`rounded-[20px] justify-center h-[50px] w-[50px] my-[5px] flex items-center nav-button ${
          currentPage === text ? "active glass-container-3" : ""
        }`}
        type="button"
      >
        {icon}
      </button>
    );
  }
}

function DuckLogo() {
  return (
    <div>
      <Image src="/duck-logo.png" alt="Duck Logo" width={32} height={32} />
    </div>
  );
}
