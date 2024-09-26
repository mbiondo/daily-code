import { column, defineTable, NOW } from 'astro:db';
import { Exercises } from './exercises';
import { Users } from './users';

export const Comments = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ 
      references: () => Users.columns.id
    }),
    content: column.text(),
    createdAt: column.date({
      default: NOW
    }),
    exerciseId: column.number({
      references: () => Exercises.columns.id,
      optional: true
    }),
  }
});
