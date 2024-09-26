import { defineTable, column } from 'astro:db';

export const Region = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text()
  }
});
