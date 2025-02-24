import { PostData } from "@/app/interfaces/Thread";
import { Mangoose } from "./Mangoose";
import { StudyShark } from "./StudyShark";
import { InterviewAI } from "./InterviewAI";
import { GCodePathfinder } from "./GCodePathfinder";

export const ProjectContent: PostData[] = [
  GCodePathfinder,
  Mangoose,
  InterviewAI,
  StudyShark,
];
