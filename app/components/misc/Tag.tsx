import { useTheme } from "@mui/material/styles";
import { Emoji, EmojiStyle } from "emoji-picker-react";

export function Tag({ title, unicode }: { title: string; unicode: string }) {
  const theme = useTheme();
  return (
    <div
      className="rounded-[30rem] px-[0.91vw] py-[0.5vh] justify-center items-center flex flex-row gap-x-[0.4em]"
      style={{ background: "rgba(255, 255, 255, 0.15)" }}
    >
      <span className="font-medium text-[0.8rem] opacity-[0.75]">{title}</span>
      <Emoji unified={unicode} size={17} emojiStyle={EmojiStyle.APPLE} />
    </div>
  );
}
