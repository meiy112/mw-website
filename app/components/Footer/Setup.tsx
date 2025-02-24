import s from "./Footer.module.css";

const Setup = () => {
  return (
    <div className={`${s.border} pt-[1.2em] px-[1.8em] pb-[1.5em]`}>
      <div>
        <div className={`${s.header}`}>Setup</div>
        <div className={s.paragraph}>My coding inventory.</div>
      </div>
      <div className="px-[1.6em] py-[1.7em]">
        <img
          src="/images/macbook-starlight.png"
          alt="Macbook-Starlight"
          className="w-[11.7em] mb-[0.5em]"
          loading="lazy"
        />
        <div className="flex items-center gap-[0.8em]">
          <div className={s.glowingDot} />
          <span className="text-[0.88rem] font-light">
            MacBook Air 13&apos;&apos; - Starlight
          </span>
        </div>
        <div className="flex items-center gap-[0.8em]">
          <div className={`${s.glowingDot} opacity-0`} />
          <div className="text-[0.9rem] font-light">M3 Chip</div>
        </div>
      </div>
      <div className={s.paragraph}>...that&apos;s basically it.</div>
    </div>
  );
};

export default Setup;
