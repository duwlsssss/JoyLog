import type { ProjectDetail } from '@/types/project';

export const CODENEWS_DETAIL: ProjectDetail = {
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
