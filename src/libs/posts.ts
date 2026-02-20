import { cache } from 'react';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

/**
 * 슬러그를 기반으로 특정 포스트의 MDX 데이터를 파싱합니다.
 */
export const getPostBySlug = cache((slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // 리딩 타임 계산
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 200); // 분당 200단어 기준

  return { slug, metadata: data, content, readingTime };
});

/**
 * 모든 posts(MDX) 데이터를 최신순으로 반환합니다.
 */
export async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  const filePosts = filenames
    .filter((path) => /\.mdx$/.test(path))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const { metadata } = getPostBySlug(slug);
      return { slug, metadata };
    });

  return filePosts.sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));
}
