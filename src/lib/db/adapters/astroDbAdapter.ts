import { db, eq, and, desc } from 'astro:db';
import { Exercise, MultilingualText, ExerciseResponse, User, UserRegion, RegionalRanking, Region, UserExerciseResult } from 'astro:db';
import type { DbAdapter } from '../types';

export const astroDbAdapter: DbAdapter = {
  async getExercise(lang: string) {
    return db
      .select()
      .from(Exercise)
      .innerJoin(MultilingualText, eq(Exercise.id, MultilingualText.exerciseId))
      .where(eq(MultilingualText.language, lang))
      .get();
  },

  async getExerciseResponses(exerciseId: number, lang: string) {
    return db
      .select()
      .from(ExerciseResponse)
      .innerJoin(MultilingualText, eq(ExerciseResponse.id, MultilingualText.responseId))
      .where(and(eq(ExerciseResponse.exerciseId, exerciseId), eq(MultilingualText.language, lang)))
      .all();
  },

  async submitExerciseResponse(userId: number, responseId: number) {
    const response = await db
      .select()
      .from(ExerciseResponse)
      .where(eq(ExerciseResponse.id, responseId))
      .get();

    if (response) {
      await db.insert(UserExerciseResult).values({
        userId,
        exerciseId: response.exerciseId,
        score: response.isCorrect ? 100 : 0,
        completionTime: '00:05:00', // Example time
      }).run();

      await this.updateRegionalRanking(userId, response.isCorrect);
    }
  },

  async updateRegionalRanking(userId: number, isCorrect: boolean) {
    const userRegion = await db
      .select()
      .from(UserRegion)
      .where(eq(UserRegion.userId, userId))
      .get();

    if (userRegion) {
      const currentRanking = await db
        .select()
        .from(RegionalRanking)
        .where(and(
          eq(RegionalRanking.userId, userId),
          eq(RegionalRanking.regionId, userRegion.regionId)
        ))
        .get();

      if (currentRanking) {
        await db.update(RegionalRanking)
          .set({ totalScore: currentRanking.totalScore + (isCorrect ? 100 : 0) })
          .where(eq(RegionalRanking.id, currentRanking.id))
          .run();
      } else {
        await db.insert(RegionalRanking).values({
          regionId: userRegion.regionId,
          userId,
          totalScore: isCorrect ? 100 : 0,
          rank: 1, // Initial rank, you'd need to update this based on other users' scores
        }).run();
      }
    }
  },

  async getTopRankings(limit: number = 10) {
    return db
      .select()
      .from(RegionalRanking)
      .innerJoin(User, eq(RegionalRanking.userId, User.id))
      .innerJoin(Region, eq(RegionalRanking.regionId, Region.id))
      .orderBy(desc(RegionalRanking.totalScore))
      .limit(limit)
      .all();
  },
};