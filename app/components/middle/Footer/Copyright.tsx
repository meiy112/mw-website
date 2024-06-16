import { LuCopyright } from "react-icons/lu";

export default function Copyright() {
  return (
    <div className="tracking-[0.02rem]">
      <div className="gap-y-[0.5em] flex flex-col">
        <div className="flex font-regular text-[1rem] flex-row gap-x-[0.15em] items-center">
          <LuCopyright /> <h1>2024 Maggie Weng.</h1>
        </div>
        <p className="opacity-[0.7] font-light text-[0.85rem]">
          Made with Next.js, TailwindCSS, Framer motion, and Shaken Espressos.
        </p>
      </div>
    </div>
  );
}
