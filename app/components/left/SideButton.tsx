import { usePageContext } from "../context/PageProvider";
import { useTheme } from "@mui/material/styles";

interface SideButtonProps {
  onClick: () => void;
  text: string;
}

export default function SideButton({ onClick, text }: SideButtonProps) {
  const { currentPage } = usePageContext();
  const theme = useTheme();

  return (
    <button
      onClick={onClick}
      className={`side-button rounded-[30px] justify-start w-[13vw] py-[15px] flex items-center ml-[0.3125vw] nav-button ${
        currentPage === text ? "active glass-container-3" : ""
      }`}
      type="button"
    >
      <div className="mr-[3.25vw] relative h-[100%] flex items-center justify-center">
        {currentPage === text ? (
          <div
            style={{ backgroundColor: theme.palette.primary.contrastText }}
            className="glowing-dot absolute"
          />
        ) : null}
      </div>
      <h1
        className={`${
          currentPage === text ? "font-medium" : "font-regular"
        } text-[1.08rem] tracking-[0.5px]`}
      >
        {text}
      </h1>
    </button>
  );
}
