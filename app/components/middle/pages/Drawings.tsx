import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ModalPost from "../../misc/ModalPost/ModalPost";
import Post from "../Post";
import { MaintenanceData } from "../../data/UnderMaintenance";

export default function Drawings() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const closeModal = () => {
    setModalIndex(null);
  };

  useEffect(() => {
    if (modalIndex !== null) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [modalIndex]);

  return (
    <motion.div
      className="p-[1vw] mt-[1vh]"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <LayoutGroup>
        {MaintenanceData.map((post, index) => (
          <Post
            key={"drawings" + index}
            postKey={"drawings" + index}
            isPinned={post.isPinned}
            date={post.date}
            title={post.title}
            typeOf={post.typeOf}
            body={post.body}
            image={post.image}
            anchor={post.anchor}
            link={post.link}
            onClick={() => setModalIndex(index)}
            post={post.post}
          />
        ))}

        <AnimatePresence>
          {/* Overlay */}
          {modalIndex !== null && (
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
          {modalIndex !== null && (
            <ModalPost
              key={modalIndex}
              layoutId={`post-${"drawings" + modalIndex}`}
              {...MaintenanceData[modalIndex]}
              onClick={closeModal}
              {...(MaintenanceData[modalIndex].thread
                ? { thread: MaintenanceData[modalIndex].thread }
                : {})}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}
