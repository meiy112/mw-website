import TwitterUser from "./TwitterUser";

const profileData = [
  {
    pfp: "/github-pfp.png",
    username: "My GitHub",
    at: "@meiy112",
    isVerified: false,
    onClick: function () {
      window.location.href = "https://github.com/meiy112";
      console.log("hi");
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
    <div className="recommendations glass-container-2 rounded-[19px] p-[1.75em] pb-[2em] flex flex-col gap-y-[1.15em]">
      <Heading />
      {profileData.map((profile, index) => (
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
