import type { ProjectDetail } from '@/types/project';

export const PEEKLE_DETAIL: ProjectDetail = {
  imageLayout: 'portrait',
  images: [
    { src: '/portfolio/peekle/event-list.webp', alt: '이벤트 목록 - 카테고리 탭과 정렬' },
    { src: '/portfolio/peekle/event-list-filtered.webp', alt: '이벤트 목록 - 필터 적용' },
    { src: '/portfolio/peekle/event-detail.webp', alt: '이벤트 상세' },
    { src: '/portfolio/peekle/scrapped-events.webp', alt: '찜한 이벤트' },
    { src: '/portfolio/peekle/search-recent.webp', alt: '검색 - 최근·인기 검색어' },
    { src: '/portfolio/peekle/search-validation.webp', alt: '검색 - 두 글자 미만 입력 안내' },
    { src: '/portfolio/peekle/search-result.webp', alt: '검색 결과' },
  ],
  techStack: [
    {
      name: 'Ky',
      usedIn:
        '공통 인스턴스(prefixUrl, timeout)와 extend로 만든 인증 인스턴스, beforeRequest/afterResponse 훅으로 토큰 주입·401 처리',
    },
    {
      name: 'Zod',
      usedIn:
        '공통 응답 스키마(apiResponseSchema)와 도메인별 스키마로 API 응답 런타임 검증 및 타입 추론',
    },
    {
      name: 'Next.js',
      usedIn: 'App Router, next/headers 기반 서버 fetcher, notFound()·not-found 페이지',
    },
    {
      name: 'TanStack Query',
      usedIn: '이벤트 목록·상세 조회 쿼리 관리 (query-key-factory로 쿼리 키 일원화)',
    },
    {
      name: 'AWS S3 Presigned URL',
      usedIn: '프로필 이미지 업로드 - 백엔드에서 업로드 URL 발급 후 브라우저에서 S3로 PUT 요청',
    },
  ],
};
