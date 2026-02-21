import { Suspense } from 'react';

import { Comments } from '@components/posts/Comments.client';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto mt-10 w-full max-w-3xl">
      {/* 포스트 본문 영역 */}
      {children}
      {/* 댓글 섹션 */}
      <Suspense
        fallback={
          <div className="mt-10 flex w-full items-center justify-center">
            <div className="border-t-primary size-10 animate-spin rounded-full border-3" />
          </div>
        }
      >
        <Comments />
      </Suspense>
    </main>
  );
}
