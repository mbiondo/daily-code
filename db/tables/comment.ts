import { column, defineTable, NOW } from 'astro:db';
import { Exercise } from './exercise';
import { User } from './user';

export const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ 
      references: () => User.columns.id
    }),
    content: column.text(),
    createdAt: column.date({
      default: NOW
    }),
    exerciseId: column.number({
      references: () => Exercise.columns.id,
      optional: true
    }),
  }
});
