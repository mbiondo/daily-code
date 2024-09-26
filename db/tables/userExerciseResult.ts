import { defineTable, column, NOW } from 'astro:db';
import { User } from './user';
import { Exercise } from './exercise';

export const UserExerciseResult = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => User.columns.id }),
    exerciseId: column.number({ references: () => Exercise.columns.id }),
    score: column.number(),
    completionTime: column.text(),
    completedAt: column.date({ default: NOW })
  }
});
