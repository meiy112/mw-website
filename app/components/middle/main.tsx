import { useTheme } from "@mui/material/styles";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import PostsContent from "./PostsContent";
import { Dispatch, SetStateAction } from "react";

export default function Main({
  isModalOpen,
  setIsModalOpen,
  setModelLoaded,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModelLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const theme = useTheme();
  return (
    <div
      className="h-[100%] w-[100%] flex flex-col rounded-t-[30px]"
      style={{
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <ProfileHeader
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setModelLoaded={setModelLoaded}
      />
      <PostsContent setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
