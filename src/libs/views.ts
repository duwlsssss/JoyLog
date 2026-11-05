'use server';

import { cookies } from 'next/headers';

import { incrementViews } from '@libs/actions';
import { getAllPosts } from '@libs/posts';

// 같은 브라우저에서 다시 열어도 24시간 동안은 조회수를 다시 세지 않는다
const VIEW_COOKIE_MAX_AGE = 60 * 60 * 24;

/**
 * 클라이언트에서 호출하는 조회수 기록 서버 액션.
 * 쿠키로 최근 본 글인지 확인해 새로고침으로 조회수가 오르는 것을 막는다
 */
export async function recordView(slug: string) {
  // 서버 액션은 외부에서도 호출할 수 있으므로 존재하는 글만 기록해 임의 slug 행이 생기지 않게 한다
  const posts = await getAllPosts();
  if (!posts.some((post) => post.slug === slug)) return;

  const cookieStore = await cookies();
  const cookieName = `viewed_${encodeURIComponent(slug)}`;
  if (cookieStore.has(cookieName)) return;

  await incrementViews(slug);
  cookieStore.set(cookieName, '1', {
    maxAge: VIEW_COOKIE_MAX_AGE,
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  });
}
