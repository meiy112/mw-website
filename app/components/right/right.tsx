import Recommendations from "./Recommendations";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import { useMusicPlayer } from "../context/MusicPlayerContext";

export default function Right() {
  const musicPlayerContext = useMusicPlayer();

  if (!musicPlayerContext) {
    throw new Error(
      "MusicPlayerContext must be used within a MusicPlayerProvider!"
    );
  }

  const { showPlayer } = musicPlayerContext;

  return (
    <div className="gap-y-[15px] right h-[100vh] pt-[4.2em] w-[100%] sticky top-0 flex flex-col items-start justify-start">
      <Recommendations />
      {showPlayer && <MusicPlayer />}
    </div>
  );
}
