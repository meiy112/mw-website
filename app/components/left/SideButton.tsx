import { ReactNode } from "react";
import { usePageContext } from "../context/PageProvider";

interface SideButtonProps {
  onClick: () => void;
  text: string;
  icon: ReactNode;
}

export default function SideButton({ onClick, text, icon }: SideButtonProps) {
  const { currentPage } = usePageContext();

  return (
    <button
      onClick={onClick}
      className={`side-button rounded-[30px] justify-start w-[13vw] py-[15px] flex items-center ml-[0.3125vw] nav-button ${
        currentPage === text ? "active glass-container-3" : ""
      }`}
      type="button"
    >
      {icon}
      <h1 className="font-medium text-[1.08rem] tracking-[0.5px]">{text}</h1>
    </button>
  );
}
