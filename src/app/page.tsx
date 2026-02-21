import Link from 'next/link';

import { getAllPosts } from '@libs/posts';

import Pagination from '@components/posts/Pagenation';
import PostCard from '@components/posts/PostCard.client';

const POSTS_PER_PAGE = 5;

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string; page?: string }>;
}) {
  const { tag: selectedTag, page } = await searchParams;
  const allPosts = await getAllPosts();

  const currentPage = page ? parseInt(page, 10) : 1; // 현재 페이지

  // 선택된 태그가 있다면 게시물 필터링
  const filteredPosts = selectedTag
    ? allPosts.filter((post) => post.metadata.tags?.includes(selectedTag))
    : allPosts;

  // 페이지네이션 계산
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  // 현재 페이지에 해당하는 포스트만 추출
  const pagedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  // 모든 태그와 각 태그별 게시물 개수 계산
  const tagCounts: Record<string, number> = {};
  allPosts.forEach((post) => {
    post.metadata.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
    });
  });

  // 태그 목록 정렬
  const tags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  return (
    <main className="flex flex-col gap-10">
      {/* 태그 제목 섹션 */}
      <section className="mt-10 flex flex-col gap-y-3">
        <h2 className="text-3xl font-bold tracking-tight">
          {selectedTag ? `${selectedTag} 포스트` : `모든 포스트`}
        </h2>
        <p className="text-primary text-lg font-medium">{totalPosts}개의 글</p>
      </section>
      {/* 태그 목록 섹션 */}
      <section>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-lg font-medium transition-colors ${
              !selectedTag
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            ALL ({allPosts.length})
          </Link>
          {tags.map(([tagName, count]) => (
            <Link
              key={tagName}
              href={`/?tag=${tagName}`}
              className={`rounded-full px-4 py-1.5 text-lg font-medium transition-colors ${
                selectedTag === tagName
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {tagName} ({count})
            </Link>
          ))}
        </div>
      </section>

      {/* 게시물 목록 섹션 */}
      <section>
        <ul className="flex flex-col border-t">
          {pagedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </ul>

        {totalPosts === 0 && (
          <p className="text-muted-foreground py-20 text-center">해당 태그의 게시물이 없습니다.</p>
        )}
        {/* 페이지네이션 */}
        <Pagination currentPage={currentPage} totalPages={totalPages} tag={selectedTag} />
      </section>
    </main>
  );
}
