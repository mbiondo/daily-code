export interface DbAdapter {
  getExercise(lang: string): Promise<any>;
  getExerciseResponses(exerciseId: number, lang: string): Promise<any[]>;
  submitExerciseResponse(userId: number, responseId: number): Promise<void>;
  updateRegionalRanking(userId: number, isCorrect: boolean): Promise<void>;
  getTopRankings(limit?: number): Promise<any[]>;
}