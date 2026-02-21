import { Suspense } from 'react';

import type { Metadata } from 'next';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { incrementViews } from '@libs/actions';
import { getAdjacentPosts, getPostBySlug } from '@libs/posts';

import PostNavigation from '@components/posts/PostNavigation';
import ReadingProgressBar from '@components/posts/ReadingProgressBar.client';
import ViewCounter from '@components/posts/ViewCounter';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: `${post.metadata.title} | JoyLog`,
    description: `${post.metadata.title} 포스트 읽기`,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: 'article',
      publishedTime: post.metadata.date,
      authors: ['Joy'],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const { prev, next } = await getAdjacentPosts(slug);

  // 조회수 증가는 비동기로 처리 - 렌더링 차단 x
  incrementViews(slug).catch((err) => console.error(err));

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <ReadingProgressBar />
      {/* 상단 정보 */}
      <header className="not-prose mb-12 flex flex-col gap-5 border-b pb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">{post.metadata.title}</h1>
        <div className="flex items-center gap-3 text-gray-500">
          <time>{post.metadata.date}</time>
          <span>•</span>
          <Suspense fallback={<span>조회수 로드 중... </span>}>
            <ViewCounter slug={slug} />
          </Suspense>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.metadata.tags.map((tag: string) => (
            <span key={tag} className="bg-secondary rounded-full px-3 py-1 text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </header>
      {/* 본문 */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      {/* 하단 네비게이션 */}
      <footer className="not-prose mt-20">
        <PostNavigation prev={prev} next={next} />
      </footer>
    </article>
  );
}
