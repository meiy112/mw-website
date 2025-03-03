import { PostData } from "@/app/interfaces/Thread";

export const OldWebsite: PostData = {
  isPinned: false,
  date: "2024",
  title: "2024 Portfolio",
  typeOf: ["Portfolio"],
  body: [
    <p key="body0">
      <span className="--text-dim">
        It isn't Twitter/X, it's my 2024 portfolio. Built with
      </span>{" "}
      Next.js, TailwindCSS, Framer motion,
      <span className="--text-dim"> and hosted on </span>
      Vercel.
    </p>,
    <p key="body1">
      <span className="--text-dim">
        Inspired by the personal website of Jhey Tompkins.
      </span>
    </p>,
  ],
  image: "/images/Projects/old-mw-website/old-mw-website.png",
  anchor: "mw-portfolio2024.com",
  link: "https://old-mw-website.vercel.app/",
  imageHash: "L2RWF[00000J000JB4610c_1?F-T",
  imageWidth: 5760,
  imageHeight: 3333,
};
