import { defineDb } from 'astro:db';
import {
  User,
  Exercise,
  ExerciseResponse,
  MultilingualText,
  Region,
  RegionalRanking,
  UserRegion,
  UserExerciseResult,

} from './tables';


// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Exercise,
    ExerciseResponse,
    MultilingualText,
    Region,
    RegionalRanking,
    UserRegion,
    UserExerciseResult
  }
});
