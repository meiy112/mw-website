import { PostData } from "@/app/interfaces/Thread";

export const Pictoloom: PostData = {
  isPinned: false,
  date: "2025",
  title: "Pictoloom",
  typeOf: ["Game", "Hackathon"],
  body: [
    <p key="body0">Telephone pictionary powered by Reddit&apos;s community.</p>,
    <p key="body1">
      <span className="--text-dim">
        Pictoloom is a daily Reddit game where players take turns drawing
        phrases and interpreting each other&apos;s drawings over 5 hour drawing
        rounds, followed by a final guessing round. Each game ends with a public
        gallery revealing the full chains, and it&apos;s built using
      </span>
      <span> Devvit, React, and Redis.</span>
    </p>,
  ],
  image: "/images/Projects/pictoloom/pictoloom-cover.png",
  anchor: "devpost/pictoloom",
  link: "https://devpost.com/software/pictoloom",
  imageHash:
    "|LGb$Z}$v_WHJFxmEExVIynG5ef{xSrw+@Ng$Kjv$?WYt6NhJEt1N4s*kAounR$d$Kr?bqS5ShV|nDjJI^OXbGjIxlWZosXlnUi+r]WYShjIW:s8Rjs*tdj=Vzn$kRR.WEj]jJn+oaW;jIaQnSbEteR:R-ayV{oskRk8j0",
  imageWidth: 3108,
  imageHeight: 2056,
};
