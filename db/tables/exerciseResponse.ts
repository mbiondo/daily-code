import { column, defineTable } from 'astro:db';
import { Exercise } from './exercise';

export const ExerciseResponse = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    exerciseId: column.number({ references: () => Exercise.columns.id }),
    isCorrect: column.boolean(),
  }
});
