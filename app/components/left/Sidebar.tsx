"use client";
import SideButton from "./SideButton";
import { usePageContext } from "../context/PageProvider";
import { Dispatch, SetStateAction } from "react";
import { LuMoreHorizontal } from "react-icons/lu";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Sidebar({
  setIsModalOpen,
}: {
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
      text: "Stack",
      onClick: () => {
        setCurrentPage("Stack");
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
    <div className="select-none sidebar pt-[4.2em] h-[100vh] sticky top-0 items-baseline flex flex-col pb-[2em] justify-between">
      <div className="gap-y-[0.5em] flex flex-col">
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
      <div className="flex flex-col gap-y-[1.5em] w-[15vw]">
        {/* <Countdown date={endDate} /> */}
        <UserAccount />
      </div>
    </div>
  );
}

function UserAccount() {
  return (
    <div className="flex w-[100%] items-center justify-between">
      <div className="flex gap-x-[1.05em] items-center select-none pointer-events-none">
        <div
          className="w-[49.6px] rounded-[50%] overflow-hidden aspect-square flex relative"
          style={{
            backgroundImage: "linear-gradient(to bottom, #2F667D, #589ca0 50%)",
          }}
        >
          <img
            src="/images/user.png"
            className="scale-[4] absolute top-[50%] left-[5%]"
            alt="banana guy"
          />
        </div>
        <div className="flex flex-col">
          <span
            className="tracking-[0.4px] font-semibold text-[0.9rem] opacity-[0.85]"
            style={{
              textShadow: "0 0 0.5em rgba(255, 255, 255, 0.5)",
            }}
          >
            Your Profile
          </span>
          <span className="text-[0.85rem] opacity-[0.4] font-regular tracking-[0.4px]">
            @YesYou
          </span>
        </div>
      </div>
      <button>
        <LuMoreHorizontal size={20} />
      </button>
    </div>
  );
}

function DuckLogo() {
  const handleNavigation = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex mt-[3.125em] w-[100%] mb-[0.5em] items-center">
      <div onClick={handleNavigation} className="cursor-pointer ml-[2%]">
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Hatching%20Chick.png"
          alt="Hatching Chick"
          width="35"
          height="35"
        />
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
