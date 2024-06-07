import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { usePageContext } from "../context/PageProvider";

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
      title: "Resume",
      onClick: () => {
        setCurrentPage("Resume");
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

  const [linePosition, setLinePosition] = useState<number | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLinePosition = () => {
      const activeButtonElement = document.querySelector(
        `button[aria-current="page"]`
      ) as HTMLElement;
      if (activeButtonElement && lineRef.current) {
        const { offsetLeft, offsetWidth } = activeButtonElement;

        const lineCenterPosition = offsetLeft + offsetWidth / 2 - 36;

        setLinePosition(lineCenterPosition);
      }
    };

    updateLinePosition();

    window.addEventListener("resize", updateLinePosition);

    return () => {
      window.removeEventListener("resize", updateLinePosition);
    };
  }, [currentPage]);

  return (
    <>
      <div className="absolute opacity-0 w-10 h-10" id="navbar"></div>
      <nav
        className={`box-shadow backgroundblur-10 sticky top-0 z-20 py-[2vh] flex flex-row justify-between px-[4.3vw] h-[10vh] items-start`}
      >
        {buttonData.map((button, index) => (
          <NavButton
            key={index}
            title={button.title}
            onClick={button.onClick}
            currentPage={currentPage}
          />
        ))}
        <div className="absolute left-0 h-[8vh]">
          <div
            ref={lineRef}
            className="absolute w-[72px] h-[4.8px] bottom-0"
            style={{
              left: linePosition ?? "25.5vw",
              backgroundColor: theme.palette.primary.main,
              transition: "left 0.3s ease",
            }}
          />
        </div>
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
      className={`font-bold tracking-[0.32px] text-[1rem] hoverable h-[100%] w-[130px] rounded-[10px]`}
      style={currentPage === title ? { opacity: 1 } : { opacity: 0.5 }}
      aria-current={currentPage === title ? "page" : undefined}
    >
      {title}
    </button>
  );
}
