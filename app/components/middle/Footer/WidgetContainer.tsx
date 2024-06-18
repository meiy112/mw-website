import AnalogClock from "./Widgets/AnalogClock/AnalogClock";
import Calendar from "./Widgets/Calendar";
import DinoGame from "./Widgets/DinoGame";
import DiskContainer from "./Widgets/DiskContainer/DiskContainer";
import FlightToggle from "./Widgets/FlightToggle";
import InteractiveMap from "./Widgets/InteractiveMap";
import MagicBall from "./Widgets/MagicBall";
import Notes from "./Widgets/Notes";
import PhotoContainer from "./Widgets/PhotoStack/PhotoContainer";

export default function WidgetContainer() {
  return (
    <div className="flex flex-col gap-y-[1.3vw]">
      <div className="flex flex-row items-center justify-between">
        <DinoGame />
        <PhotoContainer />
        <Calendar />
        <DiskContainer />
      </div>
      <div className="flex flex-row items-center justify-between">
        <AnalogClock />
        <InteractiveMap />
        <div className="flex flex-col h-[9.6vw] items-center justify-between">
          <MagicBall />
          <FlightToggle />
        </div>
        <Notes />
      </div>
    </div>
  );
}
