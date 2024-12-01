import DiskContainer from "../middle/OldFooter/Widgets/DiskContainer/DiskContainer";
import s from "./Footer.module.css";

const Music = () => {
  return (
    <div
      className={`flex flex-col gap-y-[1.5em] ${s.border} pt-[1.3em] pb-[2em] px-[2em]`}
    >
      <div>
        <span className={s.header}>Some Music</span>
        <p className={s.paragraph}>
          You didn&#39;t happen to find somewhere to drop disks, did you?
        </p>
      </div>
      <DiskContainer />
    </div>
  );
};

export default Music;
