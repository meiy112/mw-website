import StaticTwitterUser from "./StaticTwitterUser";

const profileData = [
  {
    pfp: "/github-pfp.webp",
    username: "My GitHub",
    at: "@meiy112",
    isVerified: false,
    onClick: function () {
      window.location.href = "https://github.com/meiy112";
      console.log("hi");
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

// Shows up before footer if screen is small (and does not resize unlike the dynamic one)
export default function StaticRecommendations() {
  return (
    <div className="mt-[50px] w-[100%] max-w-[350px] glass-container-2 rounded-[19px] p-[1.75em] pb-[2em] flex flex-col gap-y-[1.15em]">
      <Heading />
      {profileData.map((profile, index) => (
        <StaticTwitterUser
          pfp={profile.pfp}
          username={profile.username}
          at={profile.at}
          isVerified={profile.isVerified}
          onClick={profile.onClick}
          key={profile.at}
        />
      ))}
      x
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
