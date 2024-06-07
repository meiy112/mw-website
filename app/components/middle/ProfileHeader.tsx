import { useTheme } from "@mui/material/styles";
import { Inter, Raleway } from "next/font/google";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { LuMapPin, LuCalendarDays, LuUsers2, LuLink } from "react-icons/lu";
import ContactButton from "../misc/ContactButton";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContactModal from "../misc/ContactModal/ContactModal";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function ProfileHeader({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="h-auto pb-[4vh] w-[100%]">
      <Banner />
      <div className="flex-row flex justify-between px-[4.5vw] pb-[1vh]">
        <ProfilePicture />
        <ContactButton onClick={setIsModalOpen} />
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
    <div className="px-[5px] pt-[5px] glowing-border flex items-end justify-center rounded-t-[30px] w-[100%] h-[28vh]">
      <div className="glow-element bg-white w-[90%] h-[1px] absolute top-[-0.5px]" />
      <div className="glow-element-2 bg-white w-[40%] h-[1px] absolute top-[5px]" />
      <div className="glow-element-3 bg-white w-[1px] h-[50%] absolute top-[5vh] left-[-0.5px]" />
      <section
        className="flex justify-center absolute top-0 z-10"
        style={{ filter: "blur(40px)" }}
      >
        <div
          className="absolute w-[200px] h-[15px] rounded-[50%]"
          style={{ background: "rgba(255, 255, 255, 1)" }}
        ></div>
      </section>
      <div className="glowing-border-2 w-[100%] overflow-hidden h-[100%] rounded-t-[25px]">
        <img
          alt="banner"
          src="/banner-1.jpg"
          className="fade-img relative w-[100%] mt-[-46vh]"
        />
      </div>
    </div>
  );
}

function ProfilePicture() {
  const theme = useTheme();
  return (
    <div className="mt-[-76px]">
      <img
        alt=""
        height={150}
        width={150}
        src="/pfp.png"
        className="relative rounded-[50%] ml-[4px] mt-[4px]"
        style={{ border: `4px solid ${theme.palette.background.default}` }}
      />
    </div>
  );
}

function Bio() {
  return (
    <div className={`bio flex flex-col px-[4.3vw] pt-[1.5vh] gap-y-[13px]`}>
      <BioHeader />
      <BioDescription />
      <BioDetails />
      <BioFollowers />
      {/*<Carousel />*/}
    </div>
  );
}

function BioHeader() {
  return (
    <div className="flex flex-row items-center gap-x-[9px]">
      <h1 className="glow font-bold text-[2.3rem]">Hey, I&#39;m</h1>
      <h2 className="font-extrabold text-[3rem] name-header glow">
        {" "}
        Maggie Weng
      </h2>
      <Image height={24} width={24} alt="" src="/verified-check.png" />
    </div>
  );
}

function BioDescription() {
  return (
    <div className="tracking-[0.32px] text-[1rem] gap-y-[15px] flex flex-col">
      <div className="text-[1.1rem] flex gap-x-[5px] items-center">
        <span>... and I make things glow.</span>
        <Emoji unified="1f31f" size={24} emojiStyle={EmojiStyle.APPLE} />
      </div>
      <p className="font-light">
        UBC CompSci Student. Aspiring Full-Stack Developer. Designer. Digital
        Artist. Coding Tutor. Casual Hiker. All-Nighter Puller. Duck Enthusiast.
      </p>
    </div>
  );
}

function BioDetails() {
  const theme = useTheme();
  return (
    <div className="mt-[1vh] flex flex-wrap gap-x-[0.9375rem] font-regular text-[0.93rem] gap-y-[0.5rem]">
      <div className="flex items-center gap-x-[4px] opacity-[50%]">
        <LuMapPin className="size-[1.2rem]" />
        <span>U of British Columbia</span>
      </div>
      <div className="flex items-center gap-x-[5px] opacity-[50%]">
        <LuCalendarDays className="size-[1.3rem]" /> <span>2nd Year</span>
      </div>
      <div className="flex items-center gap-x-[5px] opacity-[50%]">
        <LuUsers2 className="size-[1.3rem]" /> <span>Coop</span>
      </div>
      <div className="flex items-center gap-x-[5px]">
        <LuLink className="size-[1.2rem] opacity-[50%]" />
        <span style={{ color: theme.palette.primary.light }}>
          maggie.weng112@gmail.com
        </span>
      </div>
    </div>
  );
}

function BioFollowers() {
  const numberStyle = "font-extrabold text-[0.95rem]";
  const wordStyle = "text-[0.85rem] opacity-[0.5]";
  const container = "flex items-center flex-row gap-x-[0.3em]";

  return (
    <div
      className={`mt-[0.3em] flex items-center flex-row gap-x-[2em] ${inter.className}`}
    >
      <div className={container}>
        <span className={numberStyle}>8</span>
        <span className={wordStyle}>Languages</span>
      </div>
      <div className={container}>
        <span className={numberStyle}>18</span>
        <span className={wordStyle}>Tools/Frameworks</span>
      </div>
    </div>
  );
}
