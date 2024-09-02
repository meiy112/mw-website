import { useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { LuCopyright, LuContainer, LuCode2, LuMusic4 } from "react-icons/lu";
import StaticRecommendations from "../StaticRecommendations/StaticRecommendations";
import { useTheme } from "@mui/material/styles";

export default function OldFooter() {
  // for screen size responsiveness
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth <= 962);
    };

    handleResize(); // Initial check

    // Add event listener on client-side only
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col px-[2vw]">
      <WebsiteDescription />
      {isSmallerScreen ? (
        <div className="flex justify-center">
          <StaticRecommendations />
        </div>
      ) : null}
      <div className=" flex justify-center mt-[7vh] mb-[5vh] opacity-[0.7] text-[0.75rem] font-light">
        <div className="px-[1em] flex flex-row items-center gap-x-[5px] rounded-[10em] py-[0.2em] glass-container-2">
          mweng <LuCopyright /> 2024
        </div>
      </div>
    </div>
  );
}

function WebsiteDescription() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <div
        className="flex flex-col mb-[4vh] gap-y-[1.25rem]"
        style={{
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Ornament />
        <h1 className="font-regular px-[1em] text-[0.8rem] opacity-[0.5]">
          This website was built with...
        </h1>
        <div className="px-[1em] flex flex-row gap-x-[5vw] opacity-[0.85]">
          <List
            listItems={[
              "Typescript",
              "+ Next.js",
              "+ Tailwind.css",
              "+ Framer motion",
              "+ Node.js",
            ]}
            icon={<LuContainer />}
          />
          <List
            listItems={[
              "51 tsx files",
              "+ 140 commits",
              "+ 19 cups of coffee",
              "+ ?? hours of coding",
              "+ and counting...",
            ]}
            icon={<LuCode2 />}
          />
          <List
            listItems={[
              "Etude 'Un Sospiro' - Liszt",
              "Etude No.6 - Liszt",
              "Etude Op.25 No.11 - Chopin",
              "Fantaisie-Impromptu, Op. 66 - Chopin",
              "ACNH 2am ost",
            ]}
            icon={<LuMusic4 />}
          />
        </div>
        {/*<h1 className="mt-[4em] self-end font-regular px-[1em] text-[0.8rem] opacity-[0.5]">
            ...thanks again for stopping by!
          </h1>*/}
      </div>
    </section>
  );
}

function List({ listItems, icon }: { listItems: string[]; icon: ReactNode }) {
  const theme = useTheme();
  return (
    <div
      className="font-medium flex flex-col gap-y-[1.8em] opacity-[0.45]"
      style={{ color: theme.palette.primary.light }}
    >
      {icon}
      <div className="flex flex-col text-[0.75rem] gap-y-[0.4em]">
        {listItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function Ornament() {
  const theme = useTheme();
  return (
    <div className="relative w-[10vw] h-[10vh]">
      <div className="absolute top-4 size-[18vh]">
        {theme.palette.mode === "dark" ? (
          <img alt="" src="/footer-ornament.png" />
        ) : (
          <img alt="" src="/footer-ornament-light.png" />
        )}
      </div>
    </div>
  );
}
