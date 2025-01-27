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
        I&#39;m a Computer Science student who is passionate about software
        engineering and ducks.
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
        I currently work as a Software Engineer Co-op at a fast growing startup,
        where I&apos;m doing high impact work, wearing different hats, and
        having a blast programming 24/7! In my free time, I&apos;m a coding
        tutor for a non-profit that advocates for diversity in tech.
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
