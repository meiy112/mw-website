import { PostData } from "@/app/interfaces/Thread";

export const Mangoose: PostData = {
  isPinned: true,
  date: "2024",
  title: "Mangoose",
  typeOf: ["Web App"],
  body: [
    <p key="body0">
      A gamified Duolingo-inspired lesson generator that targets ADHD students.
    </p>,
    <p key="body1">
      <span className="--text-dim">Mangoose uses</span>
      <span>
        {" "}
        React + Vite, Redux, Node.js, MongoDB, Mongoose, Jest, and OpenAI{" "}
      </span>
      <span className="--text-dim">
        To create interactive lessons from user-uploaded files, featuring
        question styles like drag-and-drop fill-in-the-blanks and reorderable
        connect-the-dots components.
      </span>
    </p>,
  ],
  image: "/images/Projects/mangoose/mangoose.png",
  anchor: "github/mangoose",
  link: "https://github.com/meiy112/mangoose",
  post: "mangoose",
};
