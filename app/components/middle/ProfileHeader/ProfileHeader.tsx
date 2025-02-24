import { useTheme } from "@mui/material/styles";
import { LuMapPin, LuCalendarDays, LuUsers2, LuLink } from "react-icons/lu";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContactModal from "../../misc/ContactModal/ContactModal";
import Button from "../Framer-Button/Button";
import ProfileBanner from "../Banner/Banner";
import Globe from "../Banner/Globe";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import s from "./ProfileHeader.module.css";
import { ReactFitty } from "react-fitty";
import { usePageContext } from "../../context/PageProvider";

export default function ProfileHeader({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const theme = useTheme();

  return (
    <div
      className="relative h-auto pb-[3em] w-[100%] rounded-t-[30px]"
      style={{
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Banner />
      <div className="flex-row flex justify-between px-[4.5vw] pb-[1.3em]">
        <ProfilePicture />
        <Button onClick={() => setIsModalOpen(true)} />
      </div>
      <Bio />
      <AnimatePresence>
        {isModalOpen && (
          <ContactModal
            isModalOpen={isModalOpen}
            handleClose={setIsModalOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Banner() {
  return (
    <div
      className={`${s.banner} px-[5px] pt-[5px] glowing-border flex items-end justify-center rounded-t-[30px] w-[100%] h-[32vh]`}
    >
      <div className="glow-element bg-white w-[90%] h-[1px] absolute top-[-0.5px]" />
      <div className="glow-element-2 bg-white w-[40%] h-[1px] absolute top-[5px]" />
      <div className="glow-element-3 bg-white w-[1px] h-[50%] absolute top-[5vh] left-[-0.5px]" />
      <section
        className="flex justify-center w-[100%] absolute top-0 z-10"
        style={{ filter: "blur(80px)" }}
      >
        <div
          className="absolute left-[2%] top-[3vh] w-[20vw] h-[5vh] rounded-[50%]"
          style={{ background: "rgba(255, 255, 255, 0.5)" }}
        ></div>
      </section>
      <section
        className="flex justify-center w-[100%] absolute top-0 z-10"
        style={{ filter: "blur(15px)" }}
      ></section>
      <div className="glowing-border-2 w-[100%] overflow-hidden h-[100%] rounded-t-[25px]">
        <ProfileBanner />
        <div className="w-[49.5%] h-[49.5%] absolute top-[20%] right-[-10%]">
          <Globe />
        </div>
      </div>
    </div>
  );
}

function Bio() {
  return (
    <div className="relative">
      <GlowingComponent />
      <div className={`bio flex flex-col px-[4.3vw] pt-[1.3vh] gap-y-[13px]`}>
        <BioHeader />
        {/* <BioDescription /> */}
        <div className="ml-[0.3em] flex flex-col gap-y-[13px]">
          <BioDetails />
          <BioFollowers />
        </div>
        {/*<Carousel />*/}
      </div>
    </div>
  );
}

function GlowingComponent() {
  return (
    <div
      style={{ filter: "blur(8vw)" }}
      className="absolute w-[100%] h-[80%] items-center justify-center flex"
    >
      <div className="w-[80%] h-[50%] bg-white opacity-[0.25]"></div>
    </div>
  );
}

function BioHeader() {
  return (
    <div className="mb-[1em] mt-[0.5em] inline select-none pointer-events-none">
      <h2
        className={`${s.smallHeader} ml-[0.55em] opacity-[0.65] text-[1.55rem] font-light black-gradient-text1`}
      >
        Hey, I&apos;m Maggie Weng. I love to...
      </h2>
      <ReactFitty>
        <h1 className={`largeHeader`}>Make Things Glow.</h1>
      </ReactFitty>
    </div>
  );
}

function BioDescription() {
  return (
    <div className="tracking-[0.32px] text-[0.95rem] gap-y-[15px] flex flex-col">
      <p className="font-regular">
        <span className="">@UBC CompSci Student. </span>
        <span className="opacity-[0.7]">
          Developer. Designer. Digital Artist. Coding Tutor. All-Nighter Puller.
          Duck Enthusiast.
        </span>
      </p>
    </div>
  );
}

function BioDetails() {
  const theme = useTheme();
  return (
    <div className="select-none pointer-events-none mt-[0.2em] flex flex-wrap gap-x-[1.25em] font-regular text-[0.93rem] tracking-[0.3px] gap-y-[0.5rem]">
      <div className="flex items-center gap-x-[4px] opacity-[50%]">
        <LuMapPin className="size-[1.2rem]" />
        <span>U of British Columbia</span>
      </div>
      <div className="flex items-center gap-x-[5px] opacity-[50%]">
        <LuCalendarDays className="size-[1.3rem]" /> <span>3rd Year</span>
      </div>
      <div className="flex items-center gap-x-[5px] opacity-[50%]">
        <LuUsers2 className="size-[1.3rem]" /> <span>Coop</span>
      </div>
      <div className="flex items-center gap-x-[5px]">
        <LuLink className="size-[1.2rem] opacity-[50%]" />
        <span className={`--text-gradient-pink`}>maggie.weng112@gmail.com</span>
      </div>
    </div>
  );
}

function BioFollowers() {
  const numberStyle = "font-bold text-[1rem]";
  const wordStyle = `${s.container} text-[0.9rem] tracking-[0.7px] opacity-[0.5]`;
  const container = `flex items-center flex-row gap-x-[0.3em] cursor-pointer`;

  const { setCurrentPage } = usePageContext();

  return (
    <div className={`mt-[0.3em] flex items-center flex-row gap-x-[2em]`}>
      <div className={container} onClick={() => setCurrentPage("Stack")}>
        <span className={numberStyle}>9</span>
        <span className={wordStyle}>Languages</span>
      </div>
      <div className={container} onClick={() => setCurrentPage("Stack")}>
        <span className={numberStyle}>26</span>
        <span className={wordStyle}>Tools/Frameworks</span>
      </div>
    </div>
  );
}
