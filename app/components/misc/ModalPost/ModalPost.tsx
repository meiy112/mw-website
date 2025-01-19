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
import { Tag } from "../Tag";
import VerifiedIcon from "@/app/assets/svg/verified";
import Post from "../../middle/Post";

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
      <div className="static modal-post flex flex-col">
        <motion.div
          className="flex flex-col rounded-[20px] p-[2vw]"
          style={{ backgroundColor: theme.palette.background.default }}
          layoutId={layoutId}
        >
          <Post
            key={layoutId}
            postKey={layoutId}
            isPinned={isPinned}
            date={date}
            title={title}
            typeOf={typeOf}
            body={body}
            image={image}
            anchor={anchor}
            link={link}
            post={post}
          />
        </motion.div>
        {thread &&
          thread.map((item, index) => <ThreadPost thread={item} key={index} />)}
      </div>
    </div>
  );
}
