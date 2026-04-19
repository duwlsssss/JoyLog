const PROJECT_DETAIL = {
  title: 'JoyLog',
  period: '2025.03 ~ 현재',
  description:
    'Next.js 16 App Router 기반의 풀스택 개발 블로그. MDX 기반 포스트 작성, PostgreSQL 조회수 추적, 다크모드, SEO 최적화, 포트폴리오 페이지를 포함한 개인 기술 블로그',
  tags: [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Drizzle ORM',
    'PostgreSQL',
    'Tailwind CSS v4',
    'Vercel',
  ],
  achievements: [
    'MDX 기반 포스트 시스템 구축: gray-matter 파싱, rehype-pretty-code 코드 하이라이팅, 커스텀 MDX 컴포넌트(이미지 줌, 코드 복사, 비디오 플레이어) 구현',
    'Drizzle ORM + PostgreSQL 기반 게시글 조회수 추적 시스템 구현 (upsert 패턴 활용, HMR 시 DB 커넥션 중복 방지)',
    '동적 OG 이미지 생성, sitemap/robots 자동화, Google/Naver 검색 엔진 등록을 통한 SEO 체계 구축',
    'Lefthook 기반 Git Hooks 체계 구축: pre-commit(ESLint + Prettier + 타입체크), commit-msg(commitlint), pre-push(빌드 검증)',
  ],
  techStack: [
    {
      name: 'Next.js',
      version: '16.1.6',
      usedIn: 'App Router, SSR, 동적 메타데이터, OG 이미지 생성, sitemap/robots',
    },
    {
      name: 'React',
      version: '19.2.3',
      usedIn: 'UI 컴포넌트 전체, cache()로 데이터 요청 중복 제거',
    },
    {
      name: 'TypeScript',
      version: '5.x',
      usedIn: '전체 코드베이스, 타입 정의(PostMetadata, Project 등)',
    },
    {
      name: 'Drizzle ORM',
      version: '0.45.1',
      usedIn: 'PostgreSQL 연동, post_stats 테이블 스키마 정의 및 조회수 CRUD',
    },
    {
      name: 'Tailwind CSS',
      version: '4.x',
      usedIn: '전체 스타일링, shadcn/ui 기반 디자인 토큰, oklch 색상 시스템',
    },
    {
      name: 'next-mdx-remote',
      version: '6.0.0',
      usedIn: 'MDX 포스트 서버사이드 렌더링',
    },
    {
      name: 'rehype-pretty-code',
      version: '0.14.1',
      usedIn: '코드 블록 구문 하이라이팅 (dark-plus 테마)',
    },
    {
      name: '@giscus/react',
      version: '3.1.0',
      usedIn: 'GitHub Discussions 기반 댓글 시스템',
    },
    {
      name: 'yet-another-react-lightbox',
      version: '3.29.1',
      usedIn: '포스트 내 이미지 확대(줌) 기능',
    },
    {
      name: 'Lefthook',
      version: '2.1.0',
      usedIn: 'Git Hooks 관리 (pre-commit, commit-msg, pre-push)',
    },
    {
      name: 'Vercel Blob',
      version: '2.3.0',
      usedIn: '이미지 원격 호스팅',
    },
  ],
  troubles: [
    {
      problem: 'MDX에서 img 태그가 p 태그 안에 렌더링되어 HTML 중첩 에러 발생',
      cause: 'MDX 파서가 이미지를 p 태그의 자식으로 감싸는 기본 동작',
      solution:
        '커스텀 p 컴포넌트에서 children을 순회하며 블록 요소(figure, img, ZoomImage) 포함 여부를 검사, 블록 요소가 있으면 div로 래핑',
      codeRef: 'src/constants/mdx.tsx:57-79',
    },
    {
      problem:
        'next-mdx-remote에 mdxOptions를 외부에서 전달하면 rehype 플러그인이 적용되지 않는 문제',
      cause: 'next-mdx-remote의 옵션 전달 방식 이슈',
      solution: 'MDXRemote 컴포넌트 내부에서 options 객체를 인라인으로 직접 전달',
      codeRef: 'src/app/posts/[slug]/page.tsx:78-98',
    },
    {
      problem: 'Next.js dev 모드에서 Hot Reload 시 DB 커넥션이 중복 생성되는 문제',
      cause: 'HMR 시 모듈이 재평가될 때마다 new Pool() 호출',
      solution:
        'global 객체에 Pool 인스턴스를 캐싱하는 싱글톤 패턴 적용, production에서는 매번 새로 생성',
      codeRef: 'src/db/index.ts:6-15',
    },
  ],
  // retrospective: {
  //   good: [
  //     "Lefthook + commitlint + ESLint + Prettier로 코드 품질 자동화 파이프라인을 처음부터 구축",
  //     "커스텀 MDX 컴포넌트(ZoomImage, CopyButton, VideoPlayer)로 블로그 UX를 세밀하게 제어",
  //     "Server Component와 Client Component를 명확히 분리 (.client.tsx 네이밍 컨벤션 일관 적용)",
  //     "React cache()로 동일 요청 내 데이터 중복 fetching 제거",
  //     "upsert 패턴(onConflictDoUpdate)으로 조회수 증가 로직을 단일 쿼리로 처리",
  //   ],
  //   improve: [
  //     "테스트 코드 부재 — 단위/통합 테스트 없음",
  //     "error.tsx(에러 바운더리) 미구현으로 런타임 에러 시 UX 미흡",
  //     "Lighthouse/Core Web Vitals 수치 측정 및 개선 필요",
  //   ],
  // },
  links: {
    site: 'https://joy-log-kappa.vercel.app',
    github: 'https://github.com/duwlsssss/JoyLog',
  },
};
