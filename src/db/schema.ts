import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const postStats = pgTable('post_stats', {
  slug: text('slug').primaryKey(), // 파일 이름 (예: 'my-first-post')
  views: integer('views').default(0).notNull(),
});
