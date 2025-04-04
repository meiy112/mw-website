import ProfileHeader from "./ProfileHeader/ProfileHeader";
import PostsContent from "./PostsContent";
import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePageContext } from "../context/PageProvider";
import Stack from "./Stack/StackPage";

export default function Main({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { currentPage } = usePageContext();

  return (
    <AnimatePresence mode="wait">
      {currentPage === "Stack" && (
        <motion.div
          className="h-[100%] w-[100%] flex flex-col"
          style={{
            borderLeft: `1px solid transparent`,
            borderRight: `1px solid transparent`,
            borderImage:
              "linear-gradient(to top, rgba(255, 255, 255, 0.1) 95%, rgba(255, 255, 255, 0)) 1",
          }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          key="stack-content"
        >
          <Stack />
        </motion.div>
      )}

      {currentPage !== "Stack" && (
        <motion.div
          className=" h-[100%] w-[100%] flex flex-col"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          key="profile-content"
        >
          <ProfileHeader
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <PostsContent setIsModalOpen={setIsModalOpen} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
