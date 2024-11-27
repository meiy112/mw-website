import { useTheme } from "@mui/material/styles";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  LuPin,
  LuHeart,
  LuMessageCircle,
  LuBarChart3,
  LuLink,
  LuMoreHorizontal,
} from "react-icons/lu";
import ParallaxCard from "../misc/ParallaxCard/ParallaxCard";
import s from "./Post.module.css";
import { Tag } from "../misc/Tag";
import VerifiedIcon from "@/app/assets/svg/verified";

export default function Post({
  postKey,
  isPinned,
  date,
  title,
  typeOf,
  body,
  image,
  link,
  anchor,
  onClick,
  post,
  imageDescription,
}: {
  postKey: string;
  isPinned: boolean;
  date: string;
  title: string;
  typeOf: string[];
  body: React.ReactNode[];
  image: string;
  link: string;
  anchor: string;
  onClick: () => void;
  post: string;
  imageDescription?: string;
}) {
  return (
    <motion.div
      onClick={onClick}
      className="mb-[3vh] flex flex-col rounded-[20px] p-[2vw] hoverable"
      layoutId={`post-${postKey}`}
    >
      {isPinned ? <Pin /> : null}
      <Profile date={date} />
      <div className="px-[0.6vw]">
        <Title title={title} typeOf={typeOf} />
        <Body body={body} />
      </div>
      <div className="flex items-center justify-center">
        <ParallaxCard post={post} />
      </div>
      {imageDescription ? (
        <span className="my-[0.4rem] ml-[3%] opacity-[0.5] text-[0.7rem]">
          {imageDescription}
        </span>
      ) : null}
      {/*<Picture image={image}/>*/}
      <Footer link={link} anchor={anchor} />
    </motion.div>
  );
}

function Pin() {
  return (
    <div className="flex flex-row items-center opacity-[0.5] gap-x-[12px] ml-[2.3vw] pb-[1vh]">
      {" "}
      <LuPin className="size-[1rem]" />
      <span className="text-[0.72rem]">Pinned (quack)</span>
    </div>
  );
}

function Profile({ date }: { date: string }) {
  return (
    <div className="flex flex-row gap-x-[1vw] w-[100%]">
      <img src="/pfp-small.jpeg" className="rounded-[50%] w-[50px] h-[50px]" />
      <div className="flex flex-col justify-between w-[100%]">
        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-row gap-x-[5px] items-center">
            <span className="text-[1rem] font-bold">MWeng</span>
            <Emoji unified="1f4ab" size={17} emojiStyle={EmojiStyle.APPLE} />
            <VerifiedIcon />
          </div>
          <LuMoreHorizontal size={24} />
        </div>
        <div className="text-[0.9rem] opacity-[0.5]">{date}</div>
      </div>
    </div>
  );
}

function Title({ title, typeOf }: { title: string; typeOf: string[] }) {
  const getTag = ({ type, index }: { type: string; index: number }) => {
    switch (type) {
      case "About Me":
        return <Tag title="About Me" unicode="1f680" key={index} />;
      case "Mobile App":
        return <Tag title="Mobile App" unicode="1f4f1" key={index} />;
      case "Web App":
        return <Tag title="Web App" unicode="1f4bb" key={index} />;
      case "WIP":
        return <Tag title="WIP" unicode="1f6a7" key={index} />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-row items-center pt-[1.9vh] pb-[1vh] gap-x-[0.9vw]">
      <h1 className="nyHeader font-black text-[2.5rem] tracking-[0.32px]">
        {title}&nbsp;
      </h1>
      {typeOf.map((type, index) => getTag({ type, index }))}
    </div>
  );
}

function Body({ body }: { body: React.ReactNode[] }) {
  return (
    <ul
      className={`${s.body} font-light text-[1rem] tracking-[0.32px] flex flex-col items-start gap-y-[2.5vh] pb-[2vh] leading-[1.5em]`}
    >
      {body.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Footer({ link, anchor }: { link: string; anchor: string }) {
  const theme = useTheme();
  return (
    <div className="flex flex-row justify-between pt-[2vh] px-[0.1vw]">
      <div className="flex flex-row gap-x-[1.9vw]">
        <LuHeart size={24} />
        <LuMessageCircle size={24} />
        <LuBarChart3 size={24} />
      </div>
      {link ? (
        <div className="flex flex-row gap-x-[0.5vw]">
          <LuLink size={24} className="opacity-[0.5]" />
          <a href={link} className="text-[0.9rem] pinkGradient">
            {anchor}
          </a>
        </div>
      ) : null}
    </div>
  );
}
