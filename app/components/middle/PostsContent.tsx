import NavBar from "./Navbar/NavBar";
import { usePageContext } from "../context/PageProvider";
import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import Page from "./Page";
import { AboutContent } from "@/app/posts/about/AboutContent";
import { ProjectContent } from "@/app/posts/projects/ProjectContent";
import { MaintenanceData } from "../data/UnderMaintenance";

export default function PostsContent({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { currentPage } = usePageContext();

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <Page pageContent={AboutContent} pageName={currentPage} />;
      case "Projects":
        return <Page pageContent={ProjectContent} pageName={currentPage} />;
      case "Feed":
        return <Page pageContent={MaintenanceData} pageName={currentPage} />;
      case "Blog":
        return <Page pageContent={MaintenanceData} pageName={currentPage} />;
      default:
        return <Page pageContent={AboutContent} pageName={currentPage} />;
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
      <NavBar />
      <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
    </div>
  );
}
