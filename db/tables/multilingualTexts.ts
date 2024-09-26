import { defineTable, column } from 'astro:db';
import { Exercises } from './exercises';
import { ExerciseResponses } from './exerciseResponses';

export const MultilingualTexts = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    referenceId: column.number(),
    language: column.text(),
    text: column.text(),    
    exerciseId: column.number({ references: () => Exercises.columns.id, optional: true }),
    responseId: column.number({ references: () => ExerciseResponses.columns.id, optional: true }),
  }
});
