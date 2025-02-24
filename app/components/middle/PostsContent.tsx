import NavBar from "./Navbar/NavBar";
import { usePageContext } from "../context/PageProvider";
import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
        return (
          <AnimatePresence mode="wait">
            <Page
              pageContent={AboutContent}
              pageName={currentPage}
              key="about"
            />
          </AnimatePresence>
        );
      case "Projects":
        return (
          <AnimatePresence mode="wait">
            <Page
              pageContent={ProjectContent}
              pageName={currentPage}
              key="projects"
            />
          </AnimatePresence>
        );
      case "Blog":
        return (
          <AnimatePresence mode="wait">
            <Page
              pageContent={MaintenanceData}
              pageName={currentPage}
              key="blog"
            />
          </AnimatePresence>
        );
      default:
        return (
          <AnimatePresence mode="wait">
            <Page
              pageContent={AboutContent}
              pageName={currentPage}
              key="about"
            />
          </AnimatePresence>
        );
    }
  };

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
