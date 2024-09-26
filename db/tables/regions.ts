import { defineTable, column } from 'astro:db';

export const Regions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text()
  }
});
