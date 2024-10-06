import { useTheme } from "@mui/material/styles";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import PostsContent from "./PostsContent";
import { Dispatch, SetStateAction } from "react";

export default function Main({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const theme = useTheme();
  return (
    <div
      className="h-[100%] pt-[3.125em] w-[100%] flex flex-col"
      style={{
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <ProfileHeader
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <PostsContent setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
