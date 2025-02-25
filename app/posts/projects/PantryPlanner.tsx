import { PostData } from "@/app/interfaces/Thread";

export const PantryPlanner: PostData = {
  isPinned: false,
  date: "2024",
  title: "Pantry Planner",
  typeOf: ["Web App", "Hackathon"],
  body: [
    <p key="body0">
      A platform that helps reduce food waste by suggesting recipes based on
      ingredients that are nearing expiration.
    </p>,
    <p key="body1">
      <span className="--text-dim">Pantry Planner was built with</span>
      <span> React + Vite, Flask, MongoDB, Auth0, and Chakra UI </span>
      <span className="--text-dim">
        , and was awarded the &quot;Best use of Auth0&quot; award at the NwHacks
        2024 hackathon for its authentication system and user features,
        including secure sign-in, role-based access, and interactive community
        sharing.
      </span>
    </p>,
  ],
  image: "/images/Projects/pantry-planner/pantry-planner.png",
  anchor: "devpost/pantry-planner",
  link: "https://devpost.com/software/pantry-planner-l81gm3",
  imageHash: "L2RWF[00000J000JB4610c_1?F-T",
  imageWidth: 3195,
  imageHeight: 1800,
};
