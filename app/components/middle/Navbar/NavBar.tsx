import { usePageContext } from "../../context/PageProvider";
import { motion } from "framer-motion";
import s from "./NavBar.module.css";
import { IoLayers, IoLibrary, IoNewspaper, IoRocket } from "react-icons/io5";
import { useState } from "react";

export default function NavBar() {
  const { currentPage, setCurrentPage } = usePageContext();

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
      icon: <IoLayers size={ICON_SIZE} />,
      title: "Stack",
      onClick: () => {
        setCurrentPage("Stack");
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
    <div className="relative flex z-[18] my-[1em]" id="navbar">
      <div className={`${s.navContainer}`}>
        {buttonData.map((button, index) => (
          <div
            key={index}
            className="h-[3.5em] flex flex-col justify-center items-center relative"
          >
            <NavButton
              title={button.title}
              icon={button.icon}
              onClick={button.onClick}
              currentPage={currentPage}
            />
          </div>
        ))}
      </div>
    </div>
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
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setHoveredButton(title);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${s.navButton} ${currentPage === title && s.activeButton}`}
      aria-current={currentPage === title ? "page" : undefined}
      animate={{
        padding: currentPage === title ? "1.4em" : "1em",
        bottom: currentPage === title ? "0.5em" : "0em",
      }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => handleMouseEnter(title)}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {hoveredButton === title && (
        <motion.div
          className="absolute text-[0.95rem] top-[-2.5em] element1 rounded-[0.5em] flex items-center justify-center px-[0.6em] py-[0.1em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {title}
        </motion.div>
      )}
    </motion.button>
  );
}
