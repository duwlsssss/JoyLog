import { sql } from 'drizzle-orm';

import { db } from '@db/index';
import { postStats } from '@db/schema';

/**
 * db에 특정 post의 뷰 수 증가시키는 함수
 */
export async function incrementViews(slug: string) {
  await db
    .insert(postStats)
    .values({ slug, views: 1 })
    .onConflictDoUpdate({
      target: postStats.slug,
      set: { views: sql`${postStats.views} + 1` },
    });
}
