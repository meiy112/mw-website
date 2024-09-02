import { LuPlus } from "react-icons/lu";
import TwitterUser from "./TwitterUser";

const profileData = [
  {
    pfp: "/github-pfp.png",
    username: "My GitHub",
    at: "@meiy112",
    isVerified: false,
    onClick: function () {
      window.location.href = "https://github.com/meiy112";
    },
  },
  {
    pfp: "/linkedin-pfp.png",
    username: "My Linkedin",
    at: "@maggieweng",
    isVerified: false,
    onClick: function () {
      window.location.href =
        "https://www.linkedin.com/in/maggie-weng-97a9a526b/";
    },
  },
  {
    pfp: "/dog-pfp.png",
    username: "My Dog",
    at: "@javathedog",
    isVerified: true,
    onClick: function () {
      console.log("teehee dog petted");
    },
  },
];

// Container with "You Might Like" + Github, Linkedin
export default function Recommendations() {
  return (
    <div className="overflow-hidden glass-container-2 recommendations flex flex-col rounded-[19px]">
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  return (
    <div className="rec-header px-[16px] rounded-t-[19px] h-[30px] flex flex-row justify-between items-center">
      <div className="glow-element bg-white w-[90%] h-[2px] absolute top-0" />
      <div className="flex flex-row gap-x-[8px]">
        <div className="glowing-dot-red" />
        <div className="glowing-dot-yellow" />
        <div className="glowing-dot-green" />
      </div>
      <LuPlus className="opacity-[0.3]" size={20} />
    </div>
  );
}

function Content() {
  return (
    <div className="rounded-b-[19px] p-[1.75em] pb-[2em] flex flex-col gap-y-[1.15em]">
      {profileData.map((profile) => (
        <TwitterUser
          pfp={profile.pfp}
          username={profile.username}
          at={profile.at}
          isVerified={profile.isVerified}
          onClick={profile.onClick}
          key={profile.at}
        />
      ))}
      <section className="absolute" style={{ filter: "blur(80px)" }}>
        <div
          className="absolute w-[60px] h-[100px] top-[10px] left-[-30px]"
          style={{ background: "rgba(255, 53, 155, 0.6)" }}
        ></div>
        <div
          className="absolute top-[200px] left-[70px] w-[100px] h-[60px]"
          style={{ background: "rgba(0, 210, 255, 0.5)" }}
        ></div>
      </section>
    </div>
  );
}

function Heading() {
  return (
    <p className="font-bold tracking-[0.5px] text-[1.235rem]">You might like</p>
  );
}
