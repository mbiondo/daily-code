import { defineTable, column } from 'astro:db';
import { Exercise } from './exercise';
import { ExerciseResponse } from './exerciseResponse';

export const MultilingualText = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    referenceId: column.number(),
    language: column.text(),
    text: column.text(),    
    exerciseId: column.number({ references: () => Exercise.columns.id, optional: true }),
    responseId: column.number({ references: () => ExerciseResponse.columns.id, optional: true }),
  }
});
