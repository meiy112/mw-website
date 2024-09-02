import { useTheme } from "@mui/material/styles";
import Recommendations from "./Recommendations";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

export default function Right() {
  return (
    <div className="bg-red-300 gap-y-[15px] right w-[100%] mr-[3vw] h-[100%] fixed flex flex-col items-start justify-start mt-[3.125em]">
      <Recommendations />
      <MusicPlayer />
    </div>
  );
}
