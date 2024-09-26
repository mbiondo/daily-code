import { defineDb } from 'astro:db';
import {
  Users,
  Exercises,
  ExerciseResponses,
  MultilingualTexts,
  Regions,
  RegionalRankings,
  UserRegions,
  UserExerciseResults,

} from './tables';


// https://astro.build/db/config
export default defineDb({
  tables: {
    Users,
    Exercises,
    ExerciseResponses,
    MultilingualTexts,
    Regions,
    RegionalRankings,
    UserRegions,
    UserExerciseResults
  }
});
