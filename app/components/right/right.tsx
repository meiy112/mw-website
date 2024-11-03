import { useTheme } from "@mui/material/styles";
import Recommendations from "./Recommendations";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

export default function Right() {
  return (
    <div className="gap-y-[15px] right w-[100%] h-[100%] fixed flex flex-col items-start justify-start">
      <Recommendations />
      <MusicPlayer />
    </div>
  );
}
