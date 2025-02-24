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
import ParallaxCard from "../misc/ParallaxCard/ParallaxCard";
import s from "./Post.module.css";
import { Tag } from "../misc/Tag";
import VerifiedIcon from "@/app/assets/svg/verified";
import ImageLoader from "../misc/ImageLoader";

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
  imageHash,
  imageWidth,
  imageHeight,
}: {
  postKey: string;
  isPinned: boolean;
  date: string;
  title: string;
  typeOf: string[];
  body: React.ReactNode[];
  image?: string;
  link?: string;
  anchor?: string;
  onClick: (image: string, url?: string, anchor?: string) => void;
  post?: string;
  imageDescription?: string;
  imageHash?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <motion.div className="mb-[3vh] flex flex-col rounded-[20px] p-[1em] select-none">
      {isPinned ? <Pin /> : null}
      <div className="flex flex-row gap-x-[1.2em]">
        <img
          src="/pfp-small.jpeg"
          className="rounded-[50%] w-[3em] h-[3em] gap-x-[0.5em]"
        />
        <div className="flex flex-col gap-y-[0.5em]">
          <Header date={date} />
          <Title title={title} typeOf={typeOf} />
          <Body body={body} />
          <div className={`flex items-center justify-center cursor-pointer`}>
            {post && <ParallaxCard post={post} />}
            {image && imageHash && imageWidth && imageHeight && (
              <motion.div
                className={`${s.imageContainer} relative w-[100%] rounded-[12px] overflow-hidden`}
                style={{ aspectRatio: imageWidth / imageHeight }}
                onClick={() => onClick(image, link, anchor)}
                layoutId={`image-modal-${image}`}
              >
                <div className={`${s.image} w-[100%]`}>
                  <ImageLoader
                    imageUrl={image}
                    blurhash={imageHash}
                    width={imageWidth}
                    height={imageHeight}
                  />
                </div>
              </motion.div>
            )}
          </div>
          {imageDescription ? (
            <span className="my-[0.4rem] ml-[3%] opacity-[0.5] text-[0.7rem]">
              {imageDescription}
            </span>
          ) : null}
          <Footer link={link} anchor={anchor} />
        </div>
      </div>
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

function Header({ date }: { date: string }) {
  return (
    <div className="flex flex-row items-center justify-between w-[100%]">
      <div className="flex flex-row gap-x-[0.5em] items-center">
        <div className="flex flex-row gap-x-[0.3125em] items-center">
          <span className="text-[1rem] font-medium">Maggie</span>
          <Emoji unified="1f4ab" size={17} emojiStyle={EmojiStyle.APPLE} />
          <VerifiedIcon />
        </div>
        <div className="text-[0.9rem] opacity-[0.5]">@DuckLover112</div>
        <div className="w-[0.3em] h-[0.3em] bg-white rounded-[0.9em] opacity-[0.5]" />
        <div className="text-[0.9rem] opacity-[0.5]">{date}</div>
      </div>
      <LuMoreHorizontal size={24} />
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
      case "Hackathon":
        return <Tag title="Hackathon" unicode="1f4a1" key={index} />;
      case "WIP":
        return <Tag title="WIP" unicode="1f6a7" key={index} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row items-center gap-x-[0.5em] flex-wrap">
      <h1 className="nyHeader2 font-bold text-[2rem] tracking-[0.32px]">
        {title}&nbsp;
      </h1>
      {typeOf.map((type, index) => getTag({ type, index }))}
    </div>
  );
}

function Body({ body }: { body: React.ReactNode[] }) {
  return (
    <div
      className={`${s.body} font-light text-[1rem] tracking-[0.32px] flex flex-col items-start gap-y-[1em] pb-[0.5em] leading-[1.5em]`}
    >
      {body.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

function Footer({ link, anchor }: { link?: string; anchor?: string }) {
  const theme = useTheme();
  return (
    <div className="flex flex-row justify-between pt-[2vh] px-[0.1vw]">
      <div className="flex flex-row gap-x-[1.9vw]">
        <LuHeart size={24} />
        <LuMessageCircle size={24} />
        <LuBarChart3 size={24} />
      </div>
      {link ? (
        <motion.div
          layoutId={`image-modal-link-${link}`}
          className="flex flex-row gap-x-[0.5vw]"
        >
          <LuLink size={24} className="opacity-[0.5]" />
          <a
            href={link}
            className="text-[1rem] --text-gradient-pink font-light"
          >
            {anchor}
          </a>
        </motion.div>
      ) : null}
    </div>
  );
}
