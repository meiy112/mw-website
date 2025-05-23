import { useTheme } from "@mui/material/styles";
import GooButton from "../middle/goo-button/GooButton";
import VerifiedIcon from "@/app/assets/svg/verified";
import ImageLoader from "../misc/ImageLoader";

interface TwitterUserProps {
  pfp: string;
  username: string;
  at: string;
  isVerified: boolean;
  onClick: () => void;
}

export default function TwitterUser({
  pfp,
  username,
  at,
  isVerified,
  onClick,
}: TwitterUserProps) {
  return (
    <div className="flex items-center justify-between gap-x-[2.2em] twitter-profile">
      <div className="flex items-center gap-x-[1.05em]">
        <ProfilePicture pfp={pfp} />
        <Username username={username} at={at} isVerified={isVerified} />
      </div>
      <div className="mr-[0.6em]">
        <GooButton title="Visit" onClick={onClick} />
      </div>
    </div>
  );
}

function ProfilePicture({ pfp }: { pfp: string }) {
  return (
    <div className="rounded-[50%] overflow-hidden w-[49.6px] h-[49.6px]">
      <ImageLoader
        imageUrl={pfp}
        blurhash="LEI5VqWB0tt2PqoJwuNHp0kCronk"
        width={49.6}
        height={49.6}
      />
    </div>
  );
}

function Username({
  username,
  at,
  isVerified,
}: {
  username: string;
  at: string;
  isVerified: boolean;
}) {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row gap-x-[0.3rem]">
        <h1 className="tracking-[0.4px] font-semibold text-[0.9rem] h-[1.5em]">
          {username}
        </h1>
        {isVerified ? <VerifiedIcon /> : null}
      </div>
      <span className="text-[0.85rem] opacity-[0.5] font-regular tracking-[0.4px]">
        {at}
      </span>
    </div>
  );
}

function VisitButton({
  isVerified,
  onClick,
}: {
  isVerified: boolean;
  onClick: () => void;
}) {
  const theme = useTheme();
  return (
    <button
      className="ml-[1.2vw] flex items-center justify-center rounded-[2em] w-[5.5vw] max-w-[75px] h-[2.2em] font-bold text-[0.87rem] tracking-[0.32px]"
      style={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      }}
      type="button"
      onClick={onClick}
    >
      {isVerified ? "Pet" : "Visit"}
    </button>
  );
}
