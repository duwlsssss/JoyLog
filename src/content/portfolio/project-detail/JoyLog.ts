import type { ProjectCase, ProjectDetail } from '@/types/project';

export const JOYLOG_CASES: ProjectCase[] = [
  {
    title: '새로고침·prefetch에도 오르던 조회수를 클라이언트 기록과 쿠키로 실제 방문만 세도록 수정',
    problem: '같은 사람이 포스트를 새로고침하기만 해도 조회수가 계속 오름',
    cause:
      '포스트 페이지 서버 렌더링 중에 incrementViews를 호출해, 렌더링이 일어나면 새로고침·링크 prefetch·크롤러 요청까지 모두 조회수로 집계됨',
    decision:
      '서버 렌더링과 조회수 기록을 분리해 JS를 실행하는 실제 브라우저에서만 기록하기로 함. 로그인이 없는 블로그라 사용자 대신 브라우저 단위 쿠키로 중복을 판별',
    action:
      '화면에 아무것도 그리지 않는 ViewTracker 클라이언트 컴포넌트가 마운트될 때 recordView 서버 액션을 호출. 서버 액션은 외부에서도 호출할 수 있어 존재하는 slug만 기록하고, viewed_{slug} httpOnly 쿠키(24시간)가 있으면 건너뜀',
    result:
      '새로고침과 24시간 안의 재방문은 다시 세지 않고, JS를 실행하지 않는 봇·prefetch 요청도 집계에서 빠짐. 임의 slug로 DB 행이 생기는 것도 차단',
  },
  {
    title:
      '태그·페이지 필터 URL이 홈과 중복 색인되지 않도록 noindex·canonical 신호를 페이지별로 정리',
    problem:
      '홈의 태그 필터(?tag=)와 페이지네이션(?page=) URL이 모두 별도 페이지로 색인될 수 있어, 내용이 겹치는 URL이 검색 결과에 여럿 생길 수 있음',
    cause:
      '페이지별 canonical이 없었고 필터 결과 페이지도 일반 페이지와 같은 메타데이터를 받음. 포트폴리오 OG url도 홈 주소를 가리키고 있었음',
    decision:
      '필터 결과는 noindex로 색인에서 빼되 follow는 유지해 글 링크는 계속 따라가게 함. noindex 페이지에 다른 주소를 가리키는 canonical을 함께 주면 신호가 충돌하므로 canonical은 필터 없는 홈에만 지정',
    action:
      '홈은 generateMetadata에서 searchParams로 필터 여부를 판단해 robots(index: false, follow: true) 또는 canonical "/"를 반환. 포스트·포트폴리오에는 각 경로의 canonical을 지정하고 포트폴리오 OG url을 /portfolio로 수정',
    result:
      '색인 대상이 홈·포스트·포트폴리오의 대표 URL로 정리되고, 필터 페이지를 통해서도 글 링크는 크롤링됨',
  },
];

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
