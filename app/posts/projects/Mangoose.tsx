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
        to create gamified lessons from user-uploaded content, featuring
        question styles like drag-and-drop fill-in-the-blanks and reorderable
        connect-the-dots components. Just don&apos;t run out of lives!
      </span>
    </p>,
  ],
  image: "/images/Projects/mangoose/mangoose2.jpeg",
  anchor: "github/mangoose",
  link: "https://github.com/meiy112/mangoose",
  imageHash:
    "|5R{#{~pbaNzIE0L_0?t4p_2R5I^t9IBM$NHR+?aR5%LM|Nd?TIYDmItD,Ic?FtMt19QD%?sW=Io%09af-_18{?ZoZR+?Z?RRWERIW?Zs6XAtQ-$?Ex?oGx?M{xtj[Ipxb-=V@%Es:R--.NGWAWFxSt7IWD+?FbWofoxxU",
  imageWidth: 3200,
  imageHeight: 2285,
};
