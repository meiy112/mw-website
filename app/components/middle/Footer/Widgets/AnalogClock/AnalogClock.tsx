import { useEffect, useState } from "react";
import styles from "./AnalogClock.module.css";

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    let hr = hour12();
    const min = Number(
      time.getMinutes().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    );
    const sec = time.getSeconds();

    function hour12() {
      let hour = time.getHours();

      if (hour < 12) {
        hour = time.getHours();
      }

      if (hour >= 12) {
        hour = hour - 12;
      }

      if (hour == 0) {
        hour = 12;
      }

      return hour;
    }

    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    if (hourHand && minuteHand && secondHand && hr && min) {
      hourHand.style.transform = `rotate(${hr * 30 + 0.5 * min - 180}deg)`;
      minuteHand.style.transform = `rotate(${min * 6 - 180}deg)`;
      secondHand.style.transform = `rotate(${sec * 6 - 180}deg)`;
    }

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div
      className={`${styles.clock} relative flex items-center justify-center w-[10.125vw] aspect-square rounded-[23px] glass-container`}
    >
      <div className="flex items-center justify-center w-[80%] aspect-square rounded-[50%] bg-black relative text-center">
        <div id="secondHand" className={`${styles.hand} ${styles.second}`}>
          <div className={`${styles.secondHand}`} />
        </div>
        <div id="minuteHand" className={`${styles.hand} ${styles.minute}`}>
          <div className={`${styles.handContainer}`}>
            <div className={styles.handTip} />
          </div>
        </div>
        <div id="hourHand" className={`${styles.hour} ${styles.hand}`}>
          <div className={`${styles.handContainer}`}>
            <div className={styles.handTip} />
          </div>
        </div>
        <div
          className={`${styles.center} flex items-center justify-center w-[6px] h-[6px] rounded-[50%] bg-black`}
        ></div>
      </div>

      <span className={`${styles.number}`}>
        <span>12</span>
      </span>
      <span className={`${styles.number} ${styles.number1}`}>
        <span>1</span>
      </span>
      <span className={`${styles.number} ${styles.number2}`}>
        <span>2</span>
      </span>
      <span className={`${styles.number} ${styles.number3}`}>
        <span>3</span>
      </span>
      <span className={`${styles.number} ${styles.number4}`}>
        <span>4</span>
      </span>
      <span className={`${styles.number} ${styles.number5}`}>
        <span>5</span>
      </span>
      <span className={`${styles.number} ${styles.number6}`}>
        <span>6</span>
      </span>
      <span className={`${styles.number} ${styles.number7}`}>
        <span>7</span>
      </span>
      <span className={`${styles.number} ${styles.number8}`}>
        <span>8</span>
      </span>
      <span className={`${styles.number} ${styles.number9}`}>
        <span>9</span>
      </span>
      <span className={`${styles.number} ${styles.number10}`}>
        <span>10</span>
      </span>
      <span className={`${styles.number} ${styles.number11}`}>
        <span>11</span>
      </span>
    </div>
  );
}
