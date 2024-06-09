import { FC } from "react";
import { DisplayProps } from "./Display.d";
import DisplaySetting from "./DisplaySetting";
import styles from "./Display.module.css";

const DisplayContainer: FC<DisplayProps> = ({ toggleTheme }: DisplayProps) => {
  return (
    <div className={`${styles.container}`}>
      <DisplaySetting toggleTheme={toggleTheme} />
    </div>
  );
};

export default DisplayContainer;
