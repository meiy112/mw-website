import { useTheme } from "@mui/material/styles";
import { Emoji, EmojiStyle } from "emoji-picker-react";

export function Tag({ title, unicode }: { title: string; unicode: string }) {
  const theme = useTheme();
  return (
    <div
      className="rounded-[30rem] px-[0.91vw] py-[0.5vh] justify-center items-center flex flex-row gap-x-[0.2vw]"
      style={{ background: "rgba(255, 255, 255, 0.15)" }}
    >
      <span className="font-bold text-[0.75rem] opacity-[0.75]">{title}</span>
      <Emoji unified={unicode} size={17} emojiStyle={EmojiStyle.APPLE} />
    </div>
  );
}
