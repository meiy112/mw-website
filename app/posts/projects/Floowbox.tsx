import { PostData } from "@/app/interfaces/Thread";

export const Floowbox: PostData = {
  isPinned: false,
  date: "2025",
  title: "Floowbox",
  typeOf: ["Web App", "Hackathon"],
  body: [
    <p key="body0">A no-code AI application builder.</p>,
    <p key="body1">
      <span className="--text-dim">
        Floowbox is a no-code platform that lets users create full-stack AI
        apps, and was built with{" "}
      </span>
      <span>Next.js, Flask, and React Flow</span>{" "}
      <span className="--text-dim">
        in just 24 hours (well, 23, thanks to daylight savings) during the cmd-f
        hackathon. It features integration with models from
      </span>
      <span> OpenAI, Gemini, Hugging Face and Cloudflare. </span>
    </p>,
  ],
  image: "/images/Projects/floowbox/floowbox.jpeg",
  anchor: "devpost/floowbox",
  link: "https://devpost.com/software/floowbox?ref_content=user-portfolio&ref_feature=in_progress",
  imageHash:
    "|5T9IstR.RniM{%Mrsx]tk-poztRaeWVofV@WVkC?^ayDitR%MRjX8njRP.RRQMdo|s:RjpHs:V@IAoL%gX7Mxo2ofR%ofrYozyDRQR*t7VsR*tRspkWNFa0tRX7Vsozbu?vR*Mes:t7S1ozt7RjkqaKnPo}V@aLo}V@aK",
  imageWidth: 3729,
  imageHeight: 2349,
};
