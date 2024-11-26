import { useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { LuCopyright, LuContainer, LuCode2, LuMusic4 } from "react-icons/lu";
import StaticRecommendations from "../StaticRecommendations/StaticRecommendations";
import { useTheme } from "@mui/material/styles";
import Copyright from "./Copyright";
import WidgetContainer from "./WidgetContainer";

export default function Footer() {
  // for screen size responsiveness
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth <= 962);
    };

    handleResize(); // Initial check

    // Add event listener on client-side only
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-[3em] px-[2vw] py-[6em]">
      <WidgetContainer />
      <Copyright />
    </div>
  );
}
