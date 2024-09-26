import { defineTable, column } from 'astro:db';
import { Regions } from './regions';
import { Users } from './users';

export const RegionalRankings = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    regionId: column.number({ references: () => Regions.columns.id }),
    userId: column.number({ references: () => Users.columns.id }),
    totalScore: column.number(),
    rank: column.number()
  }
});
