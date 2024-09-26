import { defineTable, column, NOW } from 'astro:db';


export const Exercises = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    code: column.text(),
    difficulty: column.number({ optional: true }),
    createdAt: column.date({ default: NOW }),
    explination: column.text({ optional: true }),
  }
});
