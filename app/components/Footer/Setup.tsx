import s from "./Footer.module.css";

const Setup = () => {
  return (
    <div className={`${s.border}`}>
      <div>
        <div className={`${s.header}`}>Setup</div>
        <div className={s.paragraph}>My coding inventory.</div>
      </div>
      <div className={s.paragraph}>...that's basically it.</div>
    </div>
  );
};

export default Setup;
