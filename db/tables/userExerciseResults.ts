import { defineTable, column, NOW } from 'astro:db';
import { Users } from './users';
import { Exercises } from './exercises';

export const UserExerciseResults = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => Users.columns.id }),
    exerciseId: column.number({ references: () => Exercises.columns.id }),
    score: column.number(),
    completionTime: column.text(),
    completedAt: column.date({ default: NOW })
  }
});
