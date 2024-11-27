import { useTheme } from "@mui/material/styles";
import { usePageContext } from "../context/PageProvider";
import { Dispatch, SetStateAction } from "react";

export default function NavLink({
  name,
  tab,
  setIsModalOpen,
}: {
  name: string;
  tab: string;
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const { setCurrentPage } = usePageContext();
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (tab === "Contact" && setIsModalOpen) {
      setIsModalOpen(true);
      e.stopPropagation();
    } else if (tab === "-") {
      // do nothing
    } else if (tab === "git-shark") {
      window.location.href = "https://github.com/meiy112/study-shark";
    } else {
      setCurrentPage(tab);
    }
  };
  const theme = useTheme();
  return (
    <button
      onClick={onClick}
      className="navlink font-semibold mx-[0.1em] px-[0.5em] py-[0.2em] rounded-[5px]"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <span className="pinkGradient">@{name}</span>
    </button>
  );
}
