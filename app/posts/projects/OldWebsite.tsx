import { PostData } from "@/app/interfaces/Thread";

export const OldWebsite: PostData = {
  isPinned: false,
  date: "2024",
  title: "2024 Portfolio",
  typeOf: ["Portfolio"],
  body: [
    <p key="body0">
      <span className="--text-dim">
        It may look like Twitter/X, but it&apos;s actually my 2024 portfolio.
        Built with
      </span>{" "}
      Next.js, TailwindCSS, Framer motion,
      <span className="--text-dim"> and deployed on </span>
      Vercel.
    </p>,
    <p key="body1">
      <span className="--text-dim">
        Inspired by the personal website of Jhey Tompkins.
      </span>
    </p>,
  ],
  image: "/images/Projects/old-mw-website/old-mw-website.webp",
  anchor: "mw-portfolio2024.com",
  link: "https://old-mw-website.vercel.app/",
  imageHash:
    "|B9@eUDm-:.8%ft7%f?b?b~o9H%KbbWUWCoekCs:4mD%M{IAIURQV?9FD$9G%eIVs.xGRQsVR*S2RW_2M|xt%LR%oy%M%MMf-ooMW;NuXRkCsor?MxbDxuRlNJ%MV_V@W9S#Ntoenirt%1MykCXSNLbcRjadadn}RjbIWZ",
  imageWidth: 5760,
  imageHeight: 3333,
};
