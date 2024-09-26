import { column, defineTable } from 'astro:db';
import { Exercises } from './exercises';

export const ExerciseResponses = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    exerciseId: column.number({ references: () => Exercises.columns.id }),
    isCorrect: column.boolean(),
  }
});
