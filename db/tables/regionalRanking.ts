import { defineTable, column } from 'astro:db';
import { Region } from './region';
import { User } from './user';

export const RegionalRanking = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    regionId: column.number({ references: () => Region.columns.id }),
    userId: column.number({ references: () => User.columns.id }),
    totalScore: column.number(),
    rank: column.number()
  }
});
