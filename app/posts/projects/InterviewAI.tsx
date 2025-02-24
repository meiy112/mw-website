import { PostData } from "@/app/interfaces/Thread";

export const InterviewAI: PostData = {
  isPinned: false,
  date: "2024",
  title: "Interview.ai",
  typeOf: ["Web App", "Hackathon"],
  body: [
    <p key="body0">
      An AI-powered mock interview platform that simulates real-time video
      conversations.
    </p>,
    <p key="body1">
      <span className="--text-dim">
        Interview.AI features an interactive 2D AI interviewer capable of having
        real-time video conversations with users. Built with
      </span>
      <span>
        {" "}
        Next.js, Django, Pytorch, MongoDB, Intel Xeon, Hume, and OpenAI,{" "}
      </span>
      <span className="--text-dim">
        it offers personalized interviews, emotion analysis, detailed feedback,
        and comprehensive transcripts.
      </span>
    </p>,
  ],
  image: "/images/Projects/interviewai/interview-ai.jpeg",
  anchor: "devpost/interview-ai",
  link: "https://devpost.com/software/interview-ai-2zy6e1",
  imageHash: "LOP7IQI9.T%hF}x^s8RO%hjZM{WA",
  imageWidth: 2800,
  imageHeight: 2023,
};
