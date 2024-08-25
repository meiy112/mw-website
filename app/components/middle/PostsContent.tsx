import NavBar from "./NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Drawings from "./pages/Drawings";
import { usePageContext } from "../context/PageProvider";
import { LuCopyright, LuContainer, LuCode2, LuMusic4 } from "react-icons/lu";
import { AnimatePresence, useInView } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import StaticRecommendations from "./StaticRecommendations/StaticRecommendations";
import Footer from "./Footer/Footer";

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
      case "Resume":
        return <Resume />;
      case "Blog":
        return <Drawings />;
      default:
        return <About setIsModalOpen={setIsModalOpen} />;
    }
  };
  return (
    <div>
      <NavBar />
      <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      <Footer />
    </div>
  );
}
