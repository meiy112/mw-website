import { useTheme } from "@mui/material/styles";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { LuMapPin, LuCalendarDays, LuUsers2, LuLink } from "react-icons/lu";
import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactModal from "../../misc/ContactModal/ContactModal";
import Button from "../Framer-Button/Button";
import styles from "./ProfileHeader.module.css";
import { useBrightness } from "../../context/BrightnessContext";
import ProfileBanner from "../Banner/Banner";
import Globe from "../Banner/Globe";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { blurAnimation } from "./ProfileHeader.d";

export default function ProfileHeader({
  isModalOpen,
  setIsModalOpen,
  setModelLoaded,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModelLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="h-auto pb-[4vh] w-[100%]">
      <Banner />
      <div className="flex-row flex justify-between px-[4.5vw] pb-[1vh]">
        <ProfilePicture setModelLoaded={setModelLoaded} />
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
      className={`banner px-[5px] pt-[5px] glowing-border flex items-end justify-center rounded-t-[30px] w-[100%] h-[32vh]`}
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
        <BioDetails />
        <BioFollowers />
        {/*<Carousel />*/}
      </div>
    </div>
  );
}

function GlowingComponent() {
  return (
    <div
      style={{ filter: "blur(8vw)" }}
      className="absolute top-[-10%] w-[100%] h-[80%] items-center justify-center flex"
    >
      <div className="w-[60%] h-[15%] bg-white opacity-[0.5]"></div>
    </div>
  );
}

function BioHeader() {
  const brightnessContext = useBrightness();

  if (!brightnessContext) {
    throw new Error(
      "BrightnessControl must be used within a BrightnessProvider"
    );
  }

  const { brightness } = brightnessContext;
  const ICON_SIZE = 30;

  return (
    <div className="mb-[1em] mt-[0.5em] inline">
      <span className={`glow ${styles.header} inline-block`}>
        I&#39;m&nbsp;
      </span>
      <span
        className="text-[2.5rem] name-header glow mb-[-0.1em] inline-block mr-[0.1em]"
        style={{
          textShadow: `0 0 28px rgba(255, 255, 255, ${
            brightness / 100 - 0.3 < 0
              ? brightness / 100
              : brightness / 100 - 0.3
          })`,
        }}
      >
        Maggie Weng
      </span>
      <span className={`${styles.header} cursor-pointer inline-block`}>
        , a Full Stack developer&nbsp;
      </span>
      <span
        className={`${styles.header} inline-flex items-center ${styles.gradient}`}
      >
        who loves the stars&nbsp;
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Dizzy.png"
          alt="Dizzy"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        .&nbsp;
      </span>
      <span className={`${styles.header} inline-block`}>I'm also a&nbsp;</span>
      <motion.span
        {...blurAnimation}
        className={`${styles.header} ${styles.hoverable} inline-flex items-center`}
      >
        Designer&nbsp;
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/White%20Heart.png"
          alt="White Heart"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        .&nbsp;
      </motion.span>
      <motion.span
        {...blurAnimation}
        className={`${styles.header} ${styles.hoverable} inline-flex items-center`}
      >
        Digital Artist&nbsp;
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Artist%20Light%20Skin%20Tone.png"
          alt="Artist Light Skin Tone"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        .&nbsp;
      </motion.span>
      <motion.span
        {...blurAnimation}
        className={`${styles.header} ${styles.hoverable} inline-flex items-center`}
      >
        Coding Tutor&nbsp;
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Nerd%20Face.png"
          alt="Nerd Face"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        .&nbsp;
      </motion.span>
      <motion.span
        {...blurAnimation}
        className={`${styles.header} ${styles.hoverable} inline-flex items-center`}
      >
        All-Nighter Puller&nbsp;
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Zzz.png"
          alt="Zzz"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        .&nbsp;
      </motion.span>
      <motion.span
        {...blurAnimation}
        className={`${styles.header} ${styles.hoverable} inline-flex items-center`}
      >
        Duck Enthusiast&nbsp;
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Duck.png"
          alt="Duck"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Astonished%20Face.png"
          alt="Astonished Face"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        .
      </motion.span>
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
    <div className="mt-[1vh] flex flex-wrap gap-x-[1.2em] font-regular text-[0.93rem] gap-y-[0.5rem]">
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
        <span className={`${styles.gradient}`}>maggie.weng112@gmail.com</span>
      </div>
    </div>
  );
}

function BioFollowers() {
  const numberStyle = "font-extrabold text-[1rem]";
  const wordStyle = "text-[0.9rem] font-light tracking-[0.7px] opacity-[0.5]";
  const container = "flex items-center flex-row gap-x-[0.3em]";

  return (
    <div className={`mt-[0.3em] flex items-center flex-row gap-x-[2em]`}>
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
