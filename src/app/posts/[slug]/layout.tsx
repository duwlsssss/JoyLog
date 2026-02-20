import { Suspense } from 'react';

import type { Metadata } from 'next';

import { getPostBySlug } from '@libs/posts';

import { Comments } from '@components/posts/Comments.client';
import Spinner from '@components/ui/Spinner';

interface PostLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: `${post.metadata.title} | JoyLog`,
    description: `${post.metadata.title} 포스트 읽기`,
  };
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      {/* 포스트 본문 영역 */}
      <article className="prose prose-slate dark:prose-invert max-w-none">{children}</article>
      {/* 댓글 섹션 */}
      <Suspense fallback={<Spinner className="size-4" />}>
        <Comments />
      </Suspense>
    </main>
  );
}
