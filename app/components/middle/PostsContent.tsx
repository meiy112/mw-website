import NavBar from "./NavBar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Drawings from "./pages/Drawings";
import { usePageContext } from "../context/PageProvider";
import { AnimatePresence, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import OldFooter from "./Footer/OldFooter";
import About from "./pages/About";

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

  return (
    <div>
      <NavBar />
      <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      {isSmallerScreen ? <OldFooter /> : <Footer />}
    </div>
  );
}
