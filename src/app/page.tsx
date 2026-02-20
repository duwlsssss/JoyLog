import Link from 'next/link';

import { getAllPosts } from '@libs/posts';

import PostCard from '@components/posts/PostCard.client';

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag: selectedTag } = await searchParams;
  const allPosts = await getAllPosts();

  // 모든 태그와 각 태그별 게시물 개수 계산
  const tagCounts: Record<string, number> = {};
  allPosts.forEach((post) => {
    post.metadata.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
    });
  });

  // 태그 목록 정렬
  const tags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  // 선택된 태그가 있다면 게시물 필터링
  const filteredPosts = selectedTag
    ? allPosts.filter((post) => post.metadata.tags?.includes(selectedTag))
    : allPosts;

  return (
    <main className="flex flex-col gap-10 py-10">
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
        <h2 className="mb-6 text-xl font-bold">
          {selectedTag ? `${selectedTag} 포스트` : `모든 포스트`} {filteredPosts.length}개
        </h2>
        <ul className="flex flex-col gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </ul>

        {filteredPosts.length === 0 && (
          <p className="text-muted-foreground py-20 text-center">해당 태그의 게시물이 없습니다.</p>
        )}
      </section>
    </main>
  );
}
