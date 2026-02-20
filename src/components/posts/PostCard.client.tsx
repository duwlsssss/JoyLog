'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Calendar, Clock } from 'lucide-react';

import { ROUTES } from '@constants/routes';

import { PostSummary } from '@/types/posts';

interface PostCardProps {
  post: PostSummary;
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, metadata } = post;

  const router = useRouter();

  // 태그 클릭 시 필터링 페이지로 이동
  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault(); // Link 클릭 방지
    e.stopPropagation(); // 부모로 이벤트 전파 방지
    router.push(ROUTES.POSTS.TAG(tag));
  };

  return (
    <li className="group relative flex flex-col gap-5 border-t border-b px-4 py-8">
      <Link href={`/posts/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">포스트 읽기: {metadata.title}</span>
      </Link>

      {/* 제목 */}
      <h2 className="text-4xl font-bold tracking-tight transition-all duration-300 group-hover:translate-x-1 group-hover:scale-[1.02]">
        {metadata.title}
      </h2>

      {/* 메타 정보 (날짜, 읽기 시간) */}
      <div className="text-muted-foreground text-m flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Calendar className="size-4" />
          <time dateTime={metadata.date}>{metadata.date}</time>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="size-4" />
          <span>{metadata.readingTime}분 분량</span>
        </div>
      </div>

      {/* 요약 */}
      <p className="text-muted-foreground relative z-20 line-clamp-2 cursor-text leading-relaxed">
        {metadata.description}
      </p>

      {/* 태그 영역 */}
      <div className="relative z-20 flex flex-wrap gap-2">
        {metadata.tags.map((tag: string) => (
          <button
            key={tag}
            onClick={(e) => handleTagClick(e, tag)}
            className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground text-s cursor-pointer rounded-full px-3 py-1 font-medium transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </li>
  );
}
