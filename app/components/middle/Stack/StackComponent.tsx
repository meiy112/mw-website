import s from "./Stack.module.css";

const StackComponent = ({
  svg,
  fadeOut,
}: {
  svg: JSX.Element;
  fadeOut?: boolean;
}) => {
  return (
    <div
      className={`select-none w-[100%] h-[100%] relative aspect-square rounded-[1em] ${s.container} flex items-center justify-center`}
    >
      <div className="opacity-[0.9] glow-element bg-white w-[100%] h-[0.5px] absolute top-[-0.25px]" />
      <div
        className={`w-[92%] aspect-square relative flex items-center rounded-[0.8em] justify-center ${s.innerContainer}`}
      >
        <div className="opacity-[0.8] z-[100] glow-element bg-white w-[60%] h-[0.5px] absolute top-[-0.25px]" />
        <div
          className={`overflow-hidden flex items-center justify-center rounded-[0.45em] w-[70%] aspect-square ${
            fadeOut && s.fadeGradient
          }`}
        >
          {svg}
        </div>
      </div>
    </div>
  );
};

export default StackComponent;
