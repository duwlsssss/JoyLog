import type { ProjectDetail } from '@/types/project';

export const JOYLOG_DETAIL: ProjectDetail = {
  images: [
    { src: '/portfolio/joylog/home.webp', alt: '홈 화면 - 태그 필터와 포스트 목록' },
    { src: '/portfolio/joylog/post.webp', alt: '포스트 상세 화면' },
  ],
  techStack: [
    {
      name: 'Next.js',
      usedIn: 'App Router, SSR, 동적 메타데이터, OG 이미지 생성, sitemap/robots',
    },
    {
      name: 'React',
      usedIn: 'UI 컴포넌트 전체, cache()로 데이터 요청 중복 제거',
    },
    {
      name: 'TypeScript',
      usedIn: '전체 코드베이스, 타입 정의(PostMetadata, Project 등)1. ',
    },
    {
      name: 'Drizzle ORM',
      usedIn: 'PostgreSQL 연동, post_stats 테이블 스키마 정의 및 조회수 CRUD',
    },
    {
      name: 'Tailwind CSS',
      usedIn: '전체 스타일링, shadcn/ui 기반 디자인 토큰, oklch 색상 시스템',
    },
    {
      name: 'next-mdx-remote',
      usedIn: 'MDX 포스트 서버사이드 렌더링',
    },
    {
      name: 'rehype-pretty-code',
      usedIn: '코드 블록 구문 하이라이팅 (dark-plus 테마)',
    },
    {
      name: '@giscus/react',
      usedIn: 'GitHub Discussions 기반 댓글 시스템',
    },
    {
      name: 'yet-another-react-lightbox',
      usedIn: '포스트 내 이미지 확대(줌) 기능',
    },
    {
      name: 'Lefthook',
      usedIn: 'Git Hooks 관리 (pre-commit, commit-msg, pre-push)',
    },
    {
      name: 'Vercel Blob',
      usedIn: '이미지 원격 호스팅',
    },
  ],
};
