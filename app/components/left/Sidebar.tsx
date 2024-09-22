"use client";
import SideButton from "./SideButton";
import { usePageContext } from "../context/PageProvider";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { LastUpdatedDisplay } from "./LastUpdatedDisplay";
import DisplayContainer from "./DisplaySetting/DisplayContainer";

type ToggleThemeFunction = () => void;

export default function Sidebar({
  toggleTheme,
  setIsModalOpen,
}: {
  toggleTheme: ToggleThemeFunction;
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
      text: "Resume",
      onClick: () => {
        setCurrentPage("Resume");
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

  const [days, setDays] = useState(26);
  const [months, setMonths] = useState(11);
  const [years, setYears] = useState(2027);

  useEffect(() => {
    setTimeout(() => {
      decrementMonths(10);
    }, 1500);
    setTimeout(() => {
      decrementDays(25);
    }, 2000);
    setTimeout(() => {
      decrementDays(24);
    }, 2700);
    setTimeout(() => {
      decrementDays(23);
    }, 3600);
    setTimeout(() => {
      decrementYears(2026);
    }, 3000);
    setTimeout(() => {
      decrementYears(2025);
    }, 3700);
    setTimeout(() => {
      decrementMonths(9);
    }, 5000);
    setTimeout(() => {
      decrementDays(22);
    }, 5700);
    setTimeout(() => {
      decrementYears(2024);
    }, 6400);
  }, []);

  const decrementDays = (num: number) => {
    setDays(num);
  };

  const decrementMonths = (num: number) => {
    setMonths(num);
  };

  const decrementYears = (num: number) => {
    setYears(num);
  };

  return (
    <div className="sidebar fixed h-screen items-baseline flex flex-col pb-[6vh] gap-y-[0.5em]">
      <DuckLogo />
      {buttonData.map((button, index) => (
        <SideButton key={index} onClick={button.onClick} text={button.text} />
      ))}
      <LastUpdatedDisplay days={days} months={months} years={years} />
      <DisplayContainer toggleTheme={toggleTheme} />
    </div>
  );
}

function DuckLogo() {
  const handleNavigation = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex mt-[3.125em] w-[100%] mb-[2em] items-center">
      <div onClick={handleNavigation} className="cursor-pointer mr-[6%]">
        <Image src="/Logo.png" alt="Duck Logo" width={40} height={40} />
      </div>
      <div
        onClick={handleNavigation}
        className="cursor-pointer flex flex-col gap-y-[0.2em] h-full text-[1.1rem]"
      >
        <span>Maggie Weng</span>
        <span className="opacity-[0.5] text-[0.75rem]">
          Full-Stack Developer
        </span>
      </div>
    </div>
  );
}
