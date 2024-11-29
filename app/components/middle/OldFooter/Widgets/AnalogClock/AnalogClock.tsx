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

  useEffect(() => {
    let dials = document.getElementsByClassName("dials");
    let clock = document.getElementById("clock");

    if (clock) {
      for (let i = 1; i < 60; i++) {
        clock.innerHTML += `<div class="${styles.dials} dials"></div>`;

        const dial = dials[i] as HTMLElement;
        dial.style.transform = `rotate(${6 * i}deg)`;
      }
    }
  }, []);

  return (
    <div
      className={`${styles.clock} scale-[1.08] relative flex items-center justify-center w-[150px] aspect-square rounded-[23px]`}
    >
      <div
        id="clock"
        className="flex items-center justify-center w-[80%] aspect-square rounded-[50%] bg-black relative text-center"
      >
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
          className={`${styles.center} flex items-center justify-center w-[3px] h-[3px] rounded-[50%] bg-black`}
        ></div>
        <div className={`${styles.dials} dials`}></div>
      </div>

      <span className={`${styles.number}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>12</span>
      </span>
      <span className={`${styles.number} ${styles.number1}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>1</span>
      </span>
      <span className={`${styles.number} ${styles.number2}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>2</span>
      </span>
      <span className={`${styles.number} ${styles.number3}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>3</span>
      </span>
      <span className={`${styles.number} ${styles.number4}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>4</span>
      </span>
      <span className={`${styles.number} ${styles.number5}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>5</span>
      </span>
      <span className={`${styles.number} ${styles.number6}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>6</span>
      </span>
      <span className={`${styles.number} ${styles.number7}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>7</span>
      </span>
      <span className={`${styles.number} ${styles.number8}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>8</span>
      </span>
      <span className={`${styles.number} ${styles.number9}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>9</span>
      </span>
      <span className={`${styles.number} ${styles.number10}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>10</span>
      </span>
      <span className={`${styles.number} ${styles.number11}`}>
        <span className={`${styles.thickLine}`}></span>
        <span className={`${styles.numberInner}`}>11</span>
      </span>
    </div>
  );
}
