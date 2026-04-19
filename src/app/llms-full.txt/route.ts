import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

import { getAllPosts } from '@libs/posts';

import { SITE_URL } from '@constants/metadata';

export const dynamic = 'force-static';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export async function GET() {
  const posts = await getAllPosts();

  const sections: string[] = [
    `# JoyLog - 전체 콘텐츠`,
    ``,
    `> 프론트엔드 개발자 Joy의 기술 블로그`,
    `> URL: ${SITE_URL}`,
    ``,
    `---`,
    ``,
  ];

  for (const post of posts) {
    const fullPath = path.join(postsDirectory, `${post.slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { content } = matter(fileContents);

    sections.push(`## ${post.metadata.title}`);
    sections.push(`URL: ${SITE_URL}/posts/${post.slug}`);
    sections.push(`날짜: ${post.metadata.date}`);
    sections.push(`태그: ${post.metadata.tags.join(', ')}`);
    if (post.metadata.description) {
      sections.push(`요약: ${post.metadata.description}`);
    }
    sections.push(``);
    sections.push(content.trim());
    sections.push(``);
    sections.push(`---`);
    sections.push(``);
  }

  return new Response(sections.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
