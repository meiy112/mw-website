import { PostData } from "@/app/interfaces/Thread";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Post from "./Post";
import ImageModal from "./imageModal/ImageModal";

type modalData = {
  image: string;
  url?: string;
  anchor?: string;
};

export default function Page({
  pageContent,
  pageName,
}: {
  pageContent: PostData[];
  pageName: string;
}) {
  const [modalData, setModalData] = useState<modalData | null>(null);

  const closeModal = () => {
    setModalData(null);
  };

  // useEffect(() => {
  //   if (modalData !== null) {
  //     document.body.classList.add("noscroll");
  //   } else {
  //     document.body.classList.remove("noscroll");
  //   }

  //   return () => {
  //     document.body.classList.remove("noscroll");
  //   };
  // }, [modalData]);

  const onSetModalDataClick = (
    image: string,
    url?: string,
    anchor?: string
  ) => {
    const newData = {
      image: image,
      url: url,
      anchor: anchor,
    };

    setModalData(newData);
  };

  return (
    <motion.div
      className="p-[1vw] mt-[1vh]"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {pageContent.map((post, index) => (
        <Post
          key={pageName + index}
          postKey={pageName + index}
          isPinned={post.isPinned}
          date={post.date}
          title={post.title}
          typeOf={post.typeOf}
          body={post.body}
          image={post.image}
          anchor={post.anchor}
          link={post.link}
          onClick={onSetModalDataClick}
          post={post.post}
          imageHash={post.imageHash}
          imageWidth={post.imageWidth}
          imageHeight={post.imageHeight}
        />
      ))}

      <AnimatePresence>
        {/* Overlay */}
        {modalData !== null && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="block z-30 fixed inset-0 backgroundblur-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(241, 244, 249, 0.1), rgba(223, 241, 255, 0.1)))",
            }}
          >
            <section style={{ filter: "blur(150px)" }}>
              <div
                className="absolute w-[700px] h-[400px] left-[300px] top-[100px]"
                style={{ background: "rgba(255, 53, 155, 0.15)" }}
              ></div>
              <div
                className="absolute bottom-[-700px] w-[600px] h-[400px] left-[300px]"
                style={{ background: "rgba(255, 253, 135, 0.2)" }}
              ></div>
              <div
                className="absolute bottom-[-800px] right-[300px] w-[600px] h-[400px]"
                style={{ background: "rgba(0, 210, 255, 0.2)" }}
              ></div>
            </section>
          </motion.div>
        )}

        {/* Modal content */}
        {modalData !== null && (
          <ImageModal
            image={modalData.image}
            url={modalData.url}
            anchor={modalData.anchor}
            closeModal={closeModal}
          />
        )}
        {/* {modalIndex !== null && (
            <ModalPost
              key={modalIndex}
              layoutId={`post-${pageName + modalIndex}`}
              {...pageContent[modalIndex]}
              onClick={closeModal}
              {...(pageContent[modalIndex].thread
                ? { thread: pageContent[modalIndex].thread }
                : {})}
              isPinned={pageContent[modalIndex].isPinned}
              date={pageContent[modalIndex].date}
              title={pageContent[modalIndex].title}
              typeOf={pageContent[modalIndex].typeOf}
              body={pageContent[modalIndex].body}
              image={pageContent[modalIndex].image}
              anchor={pageContent[modalIndex].anchor}
              link={pageContent[modalIndex].link}
            />
          )} */}
      </AnimatePresence>
    </motion.div>
  );
}
