import { PostData } from "@/app/interfaces/Thread";
import "../posts.css";

export const AboutContent: PostData[] = [
  {
    isPinned: true,
    date: "January 18, 2025",
    title: "Hello World!",
    typeOf: ["About Me"],
    body: [
      <div key={0}>
        I&#39;m a CS student with a computer. More importantly, I'm passionate
        about ducks and can name all 1025 pokemon from memory.
      </div>,
      // <p key={1}>
      //   <span className="opacity-[0.5]">Check out </span>
      //   <NavLink name="Projects" tab="Projects" />{" "}
      //   <span className="opacity-[0.5]">
      //     to see what I&#39;ve been up to, or get in touch via{" "}
      //   </span>
      //   <NavLink
      //     name="Contact"
      //     tab="Contact"
      //     setIsModalOpen={setIsModalOpen}
      //   />{" "}
      //   <span className="opacity-[0.5]">
      //     if you have any questions or want to connect!
      //   </span>
      // </p>,
      <div key={2} className="--text-dim">
        This summer, I&rsquo;m joining Gumloop &#40;YC W24&#41; in SF as a
        software engineer intern.
      </div>,
    ],
    anchor: "wiki.com/Waiting_for_Godot",
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
