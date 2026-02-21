import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const postStats = pgTable('post_stats', {
  slug: text('slug').primaryKey(),
  views: integer('views').default(0).notNull(),
});
