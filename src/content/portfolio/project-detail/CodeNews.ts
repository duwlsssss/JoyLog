import type { ProjectDetail } from '@/types/project';

export const CODENEWS_DETAIL: ProjectDetail = {
  images: [
    { src: '/portfolio/codeNews/game-list.webp', alt: '게임 목록 - HTML·CSS 사건 선택' },
    {
      src: '/portfolio/codeNews/game-before.webp',
      alt: '문제 풀이 전 - 버그 코드와 실시간 미리보기',
    },
    { src: '/portfolio/codeNews/game-hint.webp', alt: '문제 풀이 - 힌트 확인' },
    { src: '/portfolio/codeNews/game-after.webp', alt: '문제 풀이 후 - 정답이 반영된 미리보기' },
    { src: '/portfolio/codeNews/html-result.webp', alt: '사건 해결 후 HTML 개념 정리' },
    { src: '/portfolio/codeNews/css-result.webp', alt: '사건 해결 후 CSS 개념 정리' },
    { src: '/portfolio/codeNews/learn-list.webp', alt: '학습 페이지 - HTML 개념 목록' },
    { src: '/portfolio/codeNews/article.webp', alt: '아티클 - Flexbox 개념 글' },
  ],
  techStack: [
    {
      name: 'Vanilla JS',
      usedIn:
        'Component 베이스 클래스, Observer 기반 Store, History API(pushState) 라우터 직접 구현',
    },
    {
      name: 'CodeMirror',
      usedIn: '문제 풀이용 HTML·CSS 코드 편집기',
    },
    {
      name: 'highlight.js',
      usedIn: '버그 코드 구문 하이라이팅',
    },
    {
      name: 'iframe srcdoc',
      usedIn: '사용자 코드 실시간 미리보기를 페이지와 격리해 렌더링',
    },
  ],
};
