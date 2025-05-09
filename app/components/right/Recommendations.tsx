import TwitterUser from "./TwitterUser";
import { useBrightness } from "../context/BrightnessContext";
import { Plus } from "lucide-react";

const profileData = [
  {
    pfp: "/github-pfp.webp",
    username: "My GitHub",
    at: "@meiy112",
    isVerified: false,
    onClick: function () {
      window.location.href = "https://github.com/meiy112";
    },
  },
  {
    pfp: "/linkedin-pfp.webp",
    username: "My Linkedin",
    at: "@maggieweng",
    isVerified: false,
    onClick: function () {
      window.location.href =
        "https://www.linkedin.com/in/maggie-weng-97a9a526b/";
    },
  },
  {
    pfp: "/dog-pfp.webp",
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
    <div className="w-[100%] overflow-hidden glass-container-2 flex flex-col rounded-[19px]">
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  const brightnessContext = useBrightness();

  if (!brightnessContext) {
    throw new Error(
      "BrightnessControl must be used within a BrightnessProvider"
    );
  }

  const { brightness } = brightnessContext;

  return (
    <div
      className="rec-header px-[1em] rounded-t-[19px] w-[100%] h-[30px] flex flex-row justify-between items-center"
      //      style={{
      //        background: `linear-gradient(
      //  to left,
      //  rgba(64, 64, 64, 1),
      //  rgba(188, 188, 188, ${
      //    brightness / 100 > 100 ? brightness / 100 : brightness / 100 + 0.1
      //  }),
      //  rgba(64, 64, 64, 1))`,
      //      }}
    >
      <div className="glow-element bg-white w-[90%] h-[2px] absolute top-0" />
      <div className="flex flex-row gap-x-[8px]">
        <div
          className="glowing-dot-red"
          style={{
            boxShadow: `0px 0px 15px 2px rgba(244, 109, 93, ${
              brightness / 100 > 100 ? brightness / 100 : brightness / 100 + 0.1
            })`,
          }}
        />
        <div
          className="glowing-dot-yellow"
          style={{
            boxShadow: `0px 0px 15px 2px rgba(244, 189, 78, ${
              brightness / 100 > 100 ? brightness / 100 : brightness / 100 + 0.1
            })`,
          }}
        />
        <div
          className="glowing-dot-green"
          style={{
            boxShadow: `0px 0px 15px 2px rgba(87, 195, 83, ${
              brightness / 100 > 100 ? brightness / 100 : brightness / 100 + 0.1
            })`,
          }}
        />
      </div>
      <Plus className="opacity-[0.3]" size={20} />
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
