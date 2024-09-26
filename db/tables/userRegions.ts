import { defineTable, column } from 'astro:db';
import { Users } from './users';
import { Regions } from './regions';

export const UserRegions = defineTable({
  columns: {
    userId: column.number({ references: () => Users.columns.id }),
    regionId: column.number({ references: () => Regions.columns.id })
  },
});
