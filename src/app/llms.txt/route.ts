import { getAllPosts } from '@libs/posts';

import { SITE_URL } from '@constants/metadata';

export const dynamic = 'force-static';

export async function GET() {
  const posts = await getAllPosts();

  const postList = posts
    .map(
      (post) =>
        `- [${post.metadata.title}](${SITE_URL}/posts/${post.slug}): ${post.metadata.description}`,
    )
    .join('\n');

  const content = `# JoyLog

> 프론트엔드 개발자 Joy의 기술 블로그 및 포트폴리오

## 블로그 소개

JoyLog는 프론트엔드 개발자 Joy가 학습하고 경험한 내용을 정리하는 기술 블로그입니다.
React, Next.js, TypeScript 등 웹 프론트엔드 기술을 주로 다룹니다.

## 페이지

- [홈](${SITE_URL}): 전체 포스트 목록
- [포트폴리오](${SITE_URL}/portfolio): 프로젝트 소개

## 포스트 목록

${postList}

## 추가 정보

- llms-full.txt: ${SITE_URL}/llms-full.txt
- sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
