import { PostData } from "@/app/interfaces/Thread";
import { Mangoose } from "./Mangoose";
import { StudyShark } from "./StudyShark";
import { InterviewAI } from "./InterviewAI";
import { GCodePathfinder } from "./GCodePathfinder";
import { PantryPlanner } from "./PantryPlanner";
import { OldWebsite } from "./OldWebsite";

export const ProjectContent: PostData[] = [
  GCodePathfinder,
  Mangoose,
  InterviewAI,
  StudyShark,
  OldWebsite,
  PantryPlanner,
];
