export type Difficulty = "Easy" | "Medium" | "Hard";
export type Status = "Not Started" | "In Progress" | "Done" | "Needs Revision";
export interface Problem { id:string; title:string; difficulty:Difficulty; articleUrl:string; videoUrl:string; practiceUrl:string; tags:string[]; stepId:number; topic:string; }
export interface Step { id:number; title:string; problemCount:number; prerequisites:string[]; importance:"Critical"|"High"|"Medium"; keySubtopics:string[]; }
export interface ProgressRecord { status:Status; firstAttemptAt?:string; solvedIndependently?:boolean; editorialNeeded?:boolean; nextRevisionAt?:string; pattern?:string; mistake?:string; notes?:string; updatedAt?:string; revisionCount?:number; revisionStage?:0|1|2|3; }
export interface DayPlan { day:number; date:string; type:"study"|"revision"|"final-review"; stepId?:number; stepTitle?:string; problemIds:string[]; targetCount:number; }