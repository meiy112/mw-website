import { PostData } from "@/app/interfaces/Thread";

export const GCodePathfinder: PostData = {
  isPinned: true,
  date: "2024",
  title: "Miru Pathfinder",
  typeOf: ["Web App"],
  body: [
    <p key="body0">
      A custom G-Code generator with interactive, real-time 3D WebGL
      visualizations.
    </p>,
    <p key="body1">
      <span className="--text-dim">
        The Miru Pathfinder is an internal tool inspired by Figma and 3D
        printing software. Built with
      </span>
      <span> React + Vite, WebGL, Flask, MySQL</span>
      <span className="--text-dim"> and deployed with</span>
      <span> Docker, Nginx and HTTPS on AWS EC2</span>
      <span className="--text-dim">
        , it&apos;s now used by real engineers to streamline their workflow.
      </span>
    </p>,
  ],
  image: "/images/Projects/gcode-pathfinder/gcode-pathfinder.png",
  anchor: "devpost/interview-ai",
  imageHash: "L3SPeB%0^+~XXkWDRjVtRi$loJaK",
  imageWidth: 5880,
  imageHeight: 3192,
};
