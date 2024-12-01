import AnalogClock from "../middle/OldFooter/Widgets/AnalogClock/AnalogClock";
import s from "./Footer.module.css";

const Clock = () => {
  return (
    <div
      className={`aspect-[403/177] w-[25em] ${s.border} flex items-center justify-center gap-[5%]`}
    >
      <div>
        <AnalogClock />
      </div>
      <p className={`${s.paragraph} w-[45%]`}>
        One time I looked at my clock app and decided to code this analog clock.
        I don&#39;t know what to do with it.
      </p>
    </div>
  );
};

export default Clock;
