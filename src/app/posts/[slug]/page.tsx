import { Suspense } from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { incrementViews } from '@libs/actions';
import { getAdjacentPosts, getPostBySlug } from '@libs/posts';

import PostNavigation from '@components/posts/PostNavigation';
import ReadingProgressBar from '@components/posts/ReadingProgressBar.client';
import ViewCounter from '@components/posts/ViewCounter';

import { mdxComponents, mdxOptions } from '@constants/mdx';

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
            <Link
              key={tag}
              href={`/?tag=${tag}`}
              className={
                'bg-secondary hover:bg-secondary/80 rounded-full px-4 py-1.5 text-lg font-medium transition-colors'
              }
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>
      {/* 본문 */}
      <MDXRemote source={post.content} components={mdxComponents} options={mdxOptions} />
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown> */}
      {/* 하단 네비게이션 */}
      <footer className="not-prose mt-20">
        <PostNavigation prev={prev} next={next} />
      </footer>
    </article>
  );
}
