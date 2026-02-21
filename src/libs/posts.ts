import { cache } from 'react';

import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

import { PostMetadata } from '@/types/posts';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

/**
 * 슬러그를 기반으로 특정 포스트의 MDX 데이터를 파싱합니다.
 */
export const getPostBySlug = cache(async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // 리딩 타임 계산
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 200); // 분당 200단어 기준

  return {
    slug,
    content,
    metadata: {
      ...data,
      readingTime,
    } as PostMetadata,
  };
});

/**
 * 모든 posts(MDX) 데이터를 최신순으로 반환합니다.
 */
export const getAllPosts = cache(async () => {
  const filenames = await fs.readdir(postsDirectory);
  const postPromises = filenames
    .filter((path) => /\.mdx$/.test(path))
    .map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const { metadata } = await getPostBySlug(slug);
      return { slug, metadata };
    });

  const filePosts = await Promise.all(postPromises); // 모든 비동기 작업 완료 대기
  return filePosts.sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));
});

/**
 * 현재 slug를 기준으로 앞뒤 포스트를 반환
 */
export const getAdjacentPosts = cache(async (slug: string) => {
  const allPosts = await getAllPosts();
  const index = allPosts.findIndex((p) => p.slug === slug);

  return {
    prev: index < allPosts.length - 1 ? allPosts[index + 1] : null,
    next: index > 0 ? allPosts[index - 1] : null,
  };
});
