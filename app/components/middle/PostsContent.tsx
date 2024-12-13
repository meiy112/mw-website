import NavBar from "./Navbar/NavBar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Drawings from "./pages/Drawings";
import { usePageContext } from "../context/PageProvider";
import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Footer from "./OldFooter/Footer";
import OldFooter from "./OldFooter/OldFooter";
import About from "./pages/About";
import { useTheme } from "@mui/material";

export default function PostsContent({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { currentPage } = usePageContext();

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About setIsModalOpen={setIsModalOpen} />;
      case "Projects":
        return <Projects />;
      case "Feed":
        return <Resume />;
      case "Blog":
        return <Drawings />;
      default:
        return <About setIsModalOpen={setIsModalOpen} />;
    }
  };

  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth <= 962);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const theme = useTheme();

  return (
    <div
      className="w-[100%] h-[100%] relative"
      style={{
        borderLeft: `1px solid transparent`,
        borderRight: `1px solid transparent`,
        borderImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 95%, rgba(255, 255, 255, 0)) 1",
      }}
    >
      <div id="navbar" />
      <NavBar />
      <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
    </div>
  );
}
