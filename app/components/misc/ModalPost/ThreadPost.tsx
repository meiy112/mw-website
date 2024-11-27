import { Content, Thread } from "@/app/interfaces/Thread";
import { useTheme } from "@mui/material/styles";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { motion } from "framer-motion";
import { LuMoreHorizontal } from "react-icons/lu";
import CodeSnippet from "../CodeSnippet";

export default function ThreadPost({ thread }: { thread: Thread }) {
  const theme = useTheme();
  return (
    <motion.div
      className="my-[12px] flex flex-col rounded-[20px] p-[2vw] pb-[3em]"
      style={{ backgroundColor: theme.palette.background.default }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <Header title={thread.title} date={thread.date} />
      <div className="flex flex-row">
        <Line />
        <div className="px-[0.6vw]">
          <Body body={thread.content} />
        </div>
      </div>
    </motion.div>
  );
}

function Line() {
  const theme = useTheme();
  return (
    <div className="relative">
      <div
        className="absolute h-[100%] w-[2.5px] top-0 left-[22px]"
        style={{ backgroundColor: theme.palette.divider }}
      ></div>
    </div>
  );
}

function Header({ date, title }: { date: string; title: string | undefined }) {
  const theme = useTheme();

  const Name = () => {
    return (
      <div className="flex flex-row items-center gap-x-[0.55em]">
        <div className="flex flex-row gap-x-[5px] items-center">
          <span className="text-[1rem] font-bold">MWeng</span>
          <Emoji unified="1f4ab" size={17} emojiStyle={EmojiStyle.APPLE} />
          <img src="verified-check.png" className="size-[1.5rem]" />
        </div>
        <div
          className="size-[0.35em] rounded-[50%] opacity-[0.5]"
          style={{ backgroundColor: theme.palette.primary.contrastText }}
        ></div>
        <div className="text-[0.9rem] opacity-[0.5]">{date}</div>
      </div>
    );
  };
  return (
    <div className="flex flex-row gap-x-[16px] w-[100%]">
      <img src="/pfp-small.jpeg" className="rounded-[50%] w-[50px] h-[50px]" />
      <div className="gap-y-[18px] flex flex-col justify-between w-[100%]">
        <div className="flex flex-row items-center justify-between w-[100%]">
          <Name />
          <LuMoreHorizontal size={24} />
        </div>
        <h1 className="pl-[6px] font-extrabold text-[1.4rem]">{title}</h1>
      </div>
    </div>
  );
}

function Body({ body }: { body: Content[] }) {
  const getContent = ({ item, index }: { item: Content; index: number }) => {
    if (item.type === "image") {
      return (
        <Image url={item.url} description={item.description} key={index} />
      );
    } else if (item.type === "code") {
      return (
        <CodeSnippet
          code={item.code}
          lang={item.lang}
          title={item.title}
          key={index}
        />
      );
    } else if (item.type === "video") {
      return (
        <Video url={item.url} description={item.description} key={index} />
      );
    } else {
      return <div key={index}>{item.paragraph}</div>;
    }
  };

  return (
    <ul className="px-[5.8%] mt-[1.3em] font-light text-[1rem] tracking-[0.32px] flex flex-col items-start gap-y-[1.4em] leading-[1.9em]">
      {body.map((item, index) => getContent({ item, index }))}
    </ul>
  );
}

function Video({
  url,
  description,
}: {
  url: string | undefined;
  description: string | undefined;
}) {
  return (
    <div className="flex flex-col w-[100%] gap-y-[0.4em]">
      <video
        poster="images/Projects/StudyShark/demo-placeholder.png"
        controls
        loop
        muted
        className="w-[100%] rounded-[12px]"
      >
        <source src={url} type="video/mp4" />
      </video>
      <span className="ml-[3%] opacity-[0.5] text-[0.7rem]">{description}</span>
    </div>
  );
}

function Image({
  url,
  description,
}: {
  url: string | undefined;
  description: string | undefined;
}) {
  return (
    <div className="flex flex-col w-[100%] gap-y-[0.4em]">
      <img src={url} className="w-[100%] rounded-[12px]" />
      <span className="ml-[3%] opacity-[0.5] text-[0.7rem]">{description}</span>
    </div>
  );
}
