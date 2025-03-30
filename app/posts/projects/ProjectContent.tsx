import { PostData } from "@/app/interfaces/Thread";
import { Mangoose } from "./Mangoose";
import { StudyShark } from "./StudyShark";
import { InterviewAI } from "./InterviewAI";
import { GCodePathfinder } from "./GCodePathfinder";
import { PantryPlanner } from "./PantryPlanner";
import { OldWebsite } from "./OldWebsite";
import { Floowbox } from "./Floowbox";
import { Pictoloom } from "./Pictoloom";

export const ProjectContent: PostData[] = [
  Pictoloom,
  Floowbox,
  GCodePathfinder,
  Mangoose,
  InterviewAI,
  StudyShark,
  OldWebsite,
  PantryPlanner,
];
