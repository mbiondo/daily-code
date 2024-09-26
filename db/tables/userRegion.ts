import { defineTable, column } from 'astro:db';
import { User } from './user';
import { Region } from './region';

export const UserRegion = defineTable({
  columns: {
    userId: column.number({ references: () => User.columns.id }),
    regionId: column.number({ references: () => Region.columns.id })
  },
});
