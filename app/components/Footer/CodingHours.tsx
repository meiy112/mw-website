import { fetchCodingHours } from "@/app/utility/wakatimeService";
import s from "./Footer.module.css";
import { useEffect, useState } from "react";

const CodingHours = () => {
  const [codingHours, setCodingHours] = useState({});

  const getCodingHours = async () => {
    const res = await fetchCodingHours();
    return res;
  };

  useEffect(() => {
    const res = getCodingHours();
    setCodingHours(res);
  }, []);

  useEffect(() => {
    console.log("coding hours: ", codingHours);
  }, [codingHours]);

  return (
    <div className={`${s.border} pt-[1.2em] px-[1.8em] pb-[1.5em]`}>
      <div className={`${s.header}`}>Today&apos;s Coding Hours &nbsp;</div>
      <div className={s.dailyTime}>2 hr 45 min</div>
    </div>
  );
};

export default CodingHours;
