import type { User } from "@lib/core/types/user";

export interface Exercise {
  id: number;
  code: string;
  explination?: string;
  difficulty?: number;
  title: string;
  exerciseResponses: ExerciseResponse[];
}

export interface ExerciseResponse {
  id: number;
  text: string;
  correct: boolean;
}

export interface UserExerciseResult {
  user: User;
  exerciseId: number;
  socore: number;
  completionTime: string;
  completedAt: Date;
}