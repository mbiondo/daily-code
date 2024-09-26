import { defineTable, column } from 'astro:db';

export const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    username: column.text(),
    email: column.text({ unique: true }),
    avatar: column.text(),
    provider: column.text(),
    createdAt: column.date({ default: new Date() })
  }
});