import useTheme from "@mui/material/styles/useTheme";
import { Canvas } from "@react-three/fiber";
import { Bounds, Environment, OrbitControls } from "@react-three/drei";
import AvatarModel from "./AvatarModel";
import s from "./ProfilePicture.module.css";
import { Dispatch, SetStateAction } from "react";

const ProfilePicture = ({
  setModelLoaded,
}: {
  setModelLoaded: Dispatch<SetStateAction<boolean>>;
}) => {
  const theme = useTheme();

  return (
    <div className="mt-[-90px] relative">
      <div
        className={`${s.roundBorder} h-[150px] aspect-square flex relative rounded-[50%] overflow-hidden ml-[4px] mt-[4px] z-10 justify-center items-center`}
      >
        <div className="h-[130%] w-[130%] mt-[25%]">
          <Canvas
            orthographic
            camera={{
              position: [10000, 3500, 0],
            }}
          >
            <Environment preset="dawn" environmentIntensity={0.7} />
            <ambientLight
              intensity={0.5}
              color={"#FF0000"}
              position={[5, 5, 5]}
            />
            <Bounds fit clip observe margin={0.8}>
              <AvatarModel setModelLoaded={setModelLoaded} />
            </Bounds>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;