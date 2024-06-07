import { useTheme } from "@mui/material/styles";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { motion } from "framer-motion";
import {
  LuPin,
  LuHeart,
  LuMessageCircle,
  LuBarChart3,
  LuLink,
  LuMoreHorizontal,
} from "react-icons/lu";
import ModalBar from "./ModalBar";
import { Thread } from "@/app/interfaces/Thread";
import ThreadPost from "./ThreadPost";
import ParallaxCard from "../ParallaxCard/ParallaxCard";

export default function ModalPost({
  isPinned,
  date,
  title,
  typeOf,
  body,
  image,
  link,
  anchor,
  onClick,
  layoutId,
  thread,
  post,
}: {
  isPinned: boolean;
  date: string;
  title: string;
  typeOf: string[];
  body: React.ReactNode[];
  image: string;
  link: string;
  anchor: string;
  onClick: () => void;
  layoutId: string;
  thread?: Thread[];
  post: string;
}) {
  const theme = useTheme();
  return (
    <div className="modal-post-container z-40 fixed overflow-y-scroll inset-0 justify-center items-start flex">
      <ModalBar onClick={onClick} />
      <div className="static py-[5vh] px-[1vw] modal-post flex flex-col">
        <motion.div
          className="flex flex-col rounded-[20px] p-[2vw]"
          style={{ backgroundColor: theme.palette.background.default }}
          layoutId={layoutId}
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
          <Footer link={link} anchor={anchor} />
        </motion.div>
        {thread &&
          thread.map((item, index) => <ThreadPost thread={item} key={index} />)}
      </div>
    </div>
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
      <img
        alt="pfp"
        src="/pfp-small.png"
        className="rounded-[50%] w-[50px] h-[50px]"
      />
      <div className="flex flex-col justify-between w-[100%]">
        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-row gap-x-[5px] items-center">
            <span className="text-[1rem] font-bold">MWeng</span>
            <Emoji unified="1f4ab" size={17} emojiStyle={EmojiStyle.APPLE} />
            <img
              alt="check"
              src="verified-check.png"
              className="size-[1.5rem]"
            />
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
      <h1 className="font-extrabold text-[1.6rem] tracking-[0.32px]">
        {title}
      </h1>
      {typeOf.map((type, index) => getTag({ type, index }))}
    </div>
  );
}

function Tag({ title, unicode }: { title: string; unicode: string }) {
  const theme = useTheme();
  return (
    <div
      className="rounded-[30rem] px-[0.91vw] py-[0.5vh] justify-center items-center flex flex-row gap-x-[0.2vw]"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <span className="font-bold text-[0.75rem]">{title}</span>
      <Emoji unified={unicode} size={17} emojiStyle={EmojiStyle.APPLE} />
    </div>
  );
}

function Body({ body }: { body: React.ReactNode[] }) {
  return (
    <ul className="font-light text-[1rem] tracking-[0.32px] flex flex-col items-start gap-y-[2.5vh] pb-[2vh] leading-[1.5em]">
      {body.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Picture({ image }: { image: string }) {
  return (
    <div className="w-[100%] h-[420px] rounded-[12px] flex justify-center items-center overflow-hidden">
      <img alt="picture" src={image} className="w-[100%]" />
    </div>
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
          <a
            href={link}
            className="text-[0.9rem]"
            style={{ color: theme.palette.primary.light }}
          >
            {anchor}
          </a>
        </div>
      ) : null}
    </div>
  );
}
