import Link from 'next/link';

import { ROUTES } from '@constants/routes';

import { PostSummary } from '@/types/posts';

export default function PostNavigation({
  prev,
  next,
}: {
  prev: PostSummary | null;
  next: PostSummary | null;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 border-t py-10 sm:grid-cols-2">
      {prev ? (
        <Link
          href={ROUTES.POSTS.DETAIL(prev.slug)}
          className="group transition-hover hover:border-primary flex flex-col gap-2 rounded-lg border p-4"
        >
          <span className="text-muted-foreground text-sm">이전 글</span>
          <span className="group-hover:text-primary font-medium">← {prev.metadata.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={ROUTES.POSTS.DETAIL(next.slug)}
          className="group transition-hover hover:border-primary flex flex-col gap-2 rounded-lg border p-4 text-right"
        >
          <span className="text-muted-foreground text-sm">다음 글</span>
          <span className="group-hover:text-primary font-medium">{next.metadata.title} →</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
