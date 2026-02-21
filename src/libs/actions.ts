import { eq, sql } from 'drizzle-orm';

import { db } from '@db/index';
import { postStats } from '@db/schema';

/**
 * 특정 post의 조회수를 가져오는 함수
 */
export async function getViews(slug: string) {
  const stats = await db
    .select({ views: postStats.views })
    .from(postStats)
    .where(eq(postStats.slug, slug))
    .limit(1);

  return stats[0]?.views ?? 0;
}

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
