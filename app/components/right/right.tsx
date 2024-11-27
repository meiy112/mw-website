import { useTheme } from "@mui/material/styles";
import Recommendations from "./Recommendations";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

export default function Right() {
  return (
    <div className="gap-y-[15px] right h-[100vh] pt-[4.2em] w-[100%] sticky top-0 flex flex-col items-start justify-start">
      <Recommendations />
      <MusicPlayer />
    </div>
  );
}
