import { LuCopyright } from "react-icons/lu";

export default function Copyright() {
  return (
    <div className="tracking-[0.03rem]">
      <div className="gap-y-[0.5em] flex flex-col">
        <div className="flex font-regular text-[1rem] flex-row gap-x-[0.15em] items-center">
          <LuCopyright /> <h1>2024 Maggie Weng.</h1>
        </div>
        <p className="opacity-[0.7] text-[0.85rem] flex">
          Built with Next.js, TailwindCSS, Framer motion, React Three Fiber, and
          Love&nbsp;
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Revolving%20Hearts.png"
            alt="Revolving Hearts"
            width="25"
            height="25"
          />
          .
        </p>
      </div>
    </div>
  );
}
