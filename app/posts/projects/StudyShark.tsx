import { GroupBy, SumLikes } from "@/app/components/misc/Code/SQL";
import NavLink from "@/app/components/misc/NavLink";
import { PostData } from "@/app/interfaces/Thread";
import "../posts.css";

export const StudyShark: PostData = {
  isPinned: false,
  date: "2024",
  title: "Study Shark",
  typeOf: ["Mobile App"],
  body: [
    <p key="body0">
      A cross-platform mobile app for storing and sharing study materials.
    </p>,
    <p key="body1">
      <span className="--text-dim">Study Shark uses</span>
      <span> MySQL, React Native, Node.js, and Express </span>
      <span className="--text-dim">
        to create, manage, and track personalized topics, notes, quizzes, and
        flashcards. Users can publicly share their study materials, search for
        study resources created by other users, join study groups, and earn
        achievements.
      </span>
    </p>,
  ],
  anchor: "github/study-shark",
  link: "https://github.com/meiy112/study-shark",
  post: "study shark",
  thread: [
    {
      title: "Let's make an app... with SQL!",
      date: "March 2024",
      content: [
        {
          type: "paragraph",
          paragraph: (
            <>
              <b>
                &#34;Friendship ended with MongoDB. Now MySQL is my best
                friend.&#34;
              </b>
              <div className="opacity-[0.6] text-[0.8rem]">
                - Maggie Weng, Emma Huang, and Oscar Yik before they stepped
                into relational database hell.
              </div>
            </>
          ),
        },
        {
          type: "paragraph",
          paragraph:
            "What better way to learn SQL than by creating an app centered around database design? My friends and I thought so too, so we picked up MySQL and settled on a study-themed mobile app idea. Since I'd been interested in mobile development for a while, this project was long overdue.",
        },
        {
          type: "paragraph",
          paragraph:
            "For the rest of our tech stack, we picked React Native, Node.js, and Express (Javascript my beloved <3).",
        },
        {
          type: "image",
          url: "/images/Projects/StudyShark/figma-1.png",
          description:
            "The home page, the inside of a topic, and topic settings",
        },
        {
          type: "paragraph",
          paragraph:
            "Before we started coding, we came up with these features: ",
        },
        {
          type: "paragraph",
          paragraph: (
            <>
              <b>User Authentication:</b> Users can sign up or log in to an
              account.
            </>
          ),
        },
        {
          type: "paragraph",
          paragraph: (
            <>
              <b>Create and Manage Topics:</b> Users can create their own topics
              to organize their study material. Each topic can have a title,
              description, and privacy settings.
            </>
          ),
        },
        {
          type: "paragraph",
          paragraph: (
            <>
              <b>Create and Share Study Material:</b> Within each topic, users
              can create various types of study material including notes,
              quizzes, and flashcards. They can share these materials with other
              users or groups.
            </>
          ),
        },
        {
          type: "paragraph",
          paragraph: (
            <>
              <b>Search and Discover Study Material:</b> Users can search for
              study material created by other users. They can explore different
              topics and study materials shared within the community.
            </>
          ),
        },
        {
          type: "paragraph",
          paragraph: (
            <>
              <b>Join Study Groups:</b> Users can join study groups to
              collaborate with others who are studying similar topics. They can
              share and discuss study material within these groups.
            </>
          ),
        },
        {
          type: "paragraph",
          paragraph: (
            <>
              <b>Earn Achievements:</b> Users can earn achievements based on
              their study progress. Achievements come in different levels of
              difficulty and provide users with points and rewards.
            </>
          ),
        },
        {
          type: "image",
          url: "/images/Projects/StudyShark/figma-2.png",
          description:
            "The profile page, the inside of a note, and the explore page",
        },
        {
          type: "paragraph",
          paragraph: (
            <>
              By the way, why Study{" "}
              <b>
                <u>Shark</u>
              </b>
              ? We really like sharks. They might even be on par with ducks.
            </>
          ),
        },
      ],
    },
    {
      title: "The Great Database Design",
      date: "March 2024",
      content: [
        {
          type: "paragraph",
          paragraph:
            "Here's how our entities and relationships looked like after we normalized our database to 3NF.",
        },
        {
          type: "image",
          url: "/images/Projects/StudyShark/er-diagram.png",
          description: "The final ER diagram",
        },
        {
          type: "paragraph",
          paragraph: "Some snippets of our SQL queries:",
        },
        {
          type: "code",
          code: <GroupBy />,
          lang: "sql",
          title: "getGroups",
        },
        {
          type: "paragraph",
          paragraph: "We probably had around 60 queries total.",
        },
        {
          type: "code",
          code: <SumLikes />,
          lang: "sql",
          title: "getSumLikes",
        },
      ],
    },
    {
      title: "Get Ready for the Final Result...",
      date: "March 2024",
      content: [
        {
          type: "paragraph",
          paragraph:
            "Enjoy the following video demo of some of our final features!",
        },
        {
          type: "video",
          url: "/Demo/study-shark.mp4",
          description: "Video demo of Study Shark",
        },
        {
          type: "paragraph",
          paragraph: (
            <>
              Check out our <NavLink name="GitHub Repo" tab="git-shark" /> for
              this project if you haven&apos;t already.
            </>
          ),
        },
      ],
    },
  ],
};
//  {
//    isPinned: false,
//    date: "January 2024",
//    title: "Pantry Planner",
//    typeOf: ["Web App"],
//    body: [
//      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//    ],
//    image: "/images/pinned-post.jpg",
//    anchor: "github/pantry-planner",
//    link: "https://github.com/andyh031/pantry-planner",
//    post: "pantry planner",
//  },
//  {
//    isPinned: false,
//    date: "December 2023",
//    title: "AgileMind",
//    typeOf: ["Web App"],
//    body: [
//      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//    ],
//    image: "/images/pinned-post.jpg",
//    anchor: "github/agilemind",
//    link: "https://github.com/emmah47/AgileMind",
//    post: "agilemind",
//  },
//  {
//    isPinned: false,
//    date: "March 2024",
//    title: "InsightUBC API & CampusExplorer",
//    typeOf: ["Web App"],
//    body: [
//      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//    ],
//    image: "/images/pinned-post.jpg",
//    anchor: "github/insightubc",
//    link: "https://github.com/meiy112/InsightUBC-CampusExplorer",
//    post: "insightubc",
//  },
//  {
//    isPinned: false,
//    date: "July 2023",
//    title: "FinStatPro",
//    typeOf: ["Web App"],
//    body: [
//      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//    ],
//    image: "/images/pinned-post.jpg",
//    anchor: "github/finstatpro",
//    link: "https://github.com/meiy112/FinStatPro",
//    post: "finstatpro",
//  },
