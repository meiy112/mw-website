import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NavLink from "../../misc/NavLink";
import Post from "../Post";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ModalPost from "../../misc/ModalPost/ModalPost";
import { PostData } from "@/app/interfaces/Thread";
import SmallGradient from "@/app/assets/SmallGradient";

export default function About({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // for contact modal
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // for post modal
  const closeModal = () => {
    setModalIndex(null);
  };

  const postContent: PostData[] = [
    {
      isPinned: true,
      date: "April 30 2024",
      title: "Hello World!",
      typeOf: ["About Me"],
      body: [
        <p key={0}>I&#39;m Maggie Weng and I love crafting interactivity.</p>,
        <p key={1}>
          If you&#39;re curious about my work, check out{" "}
          <NavLink name="Projects" tab="Projects" /> to see what I&#39;ve been
          up to or explore my <NavLink name="Resume" tab="Resume" /> to learn
          more about my experience. Feel free to get in touch via{" "}
          <NavLink
            name="Contact"
            tab="Contact"
            setIsModalOpen={setIsModalOpen}
          />{" "}
          if you have any questions or want to connect!
        </p>,
      ],
      image: "/images/pinned-post.jpg",
      anchor: "wiki.com/Waiting_for_Godot",
      link: "https://en.wikipedia.org/wiki/Waiting_for_Godot",
      post: "about",
      imageDescription: "Home sweet home",
    },
    //{
    //  isPinned: false,
    //  date: "May 2 2024",
    //  title: "Want to Learn Code?",
    //  typeOf: ["About Me"],
    //  body: [
    //    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //  ],
    //  image: "/images/tutor-post.jpg",
    //  anchor: "/thecodeiniative.ca",
    //  link: "https://www.thecodeinitiative.ca/",
    //},
  ];

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
        {postContent.map((post, index) => (
          <Post
            key={"about" + index}
            postKey={"about" + index}
            isPinned={post.isPinned}
            date={post.date}
            title={post.title}
            typeOf={post.typeOf}
            body={post.body}
            image={post.image}
            anchor={post.anchor}
            link={post.link}
            post={post.post}
            onClick={() => setModalIndex(index)}
            {...(post.thread ? { thread: post.thread } : {})}
            imageDescription={post.imageDescription}
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
              <SmallGradient />
            </motion.div>
          )}

          {/* Modal content */}
          {modalIndex !== null && (
            <ModalPost
              key={modalIndex}
              layoutId={`post-${"about" + modalIndex}`}
              {...postContent[modalIndex]}
              onClick={closeModal}
              {...(postContent[modalIndex].thread
                ? { thread: postContent[modalIndex].thread }
                : {})}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}
