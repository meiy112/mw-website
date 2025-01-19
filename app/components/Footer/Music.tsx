import { useMusicPlayer } from "../context/MusicPlayerContext";
import DiskContainer from "../middle/OldFooter/Widgets/DiskContainer/DiskContainer";
import s from "./Footer.module.css";

const Music = () => {
  return (
    <div
      className={`flex flex-col gap-y-[1.5em] ${s.border} pt-[1.2em] pb-[2em] px-[1.8em]`}
    >
      <div>
        <span className={s.header}>Some Music</span>
        <p className={s.paragraph}>
          They&apos;re drag and droppable, try it out!
        </p>
      </div>
      <DiskContainer />
    </div>
  );
};

export default Music;
