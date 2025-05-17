import VerifiedIcon from "@/app/assets/svg/verified";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

interface TwitterUserProps {
  pfp: string;
  username: string;
  at: string;
  isVerified: boolean;
  onClick: () => void;
}

export default function StaticTwitterUser({
  pfp,
  username,
  at,
  isVerified,
  onClick,
}: TwitterUserProps) {
  return (
    <div className="flex-row flex items-center justify-between">
      <div className="flex-row flex items-center gap-x-[1.05em]">
        <ProfilePicture pfp={pfp} />
        <Username username={username} at={at} isVerified={isVerified} />
      </div>
      <VisitButton isVerified={isVerified} onClick={onClick} />
    </div>
  );
}

function ProfilePicture({ pfp }: { pfp: string }) {
  return (
    <Image
      src={pfp}
      alt="pfp"
      width={49.6}
      height={49.6}
      className="rounded-[50%]"
    />
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
        <h1 className="tracking-[0.4px] font-bold text-[0.923rem] h-[1.5em]">
          {username}
        </h1>
        {isVerified ? <VerifiedIcon /> : null}
      </div>
      <span className="text-[0.86rem] opacity-50 font-regular tracking-[0.4px]">
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
      className="ml-[1.2vw] flex items-center justify-center rounded-[2em] w-[30%] max-w-[75px] h-[2.2em] font-bold text-[0.87rem] tracking-[0.32px]"
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
