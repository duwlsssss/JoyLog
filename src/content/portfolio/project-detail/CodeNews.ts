import type { ProjectCase, ProjectDetail } from '@/types/project';

export const CODENEWS_CASES: ProjectCase[] = [
  {
    title:
      '배포본에서 아티클·학습 데이터를 못 불러오던 문제를 JSON을 모듈로 import해 빌드에 포함시켜 해결',
    problem: '로컬 개발 서버에서는 보이던 아티클·학습 목록이 Vercel 배포본에서는 비어 있음',
    cause:
      "fetch('src/data/articles.json')처럼 상대 경로로 요청했는데, fetch의 상대 경로는 파일 위치가 아니라 현재 페이지 URL 기준으로 풀림(/article/1이면 /article/src/data/...). 또 src/는 Vite 빌드 결과물에 복사되지 않아 배포본에는 파일 자체가 없었음",
    decision:
      'public/에 두고 절대 경로로 fetch하는 방법도 시도했지만, 빌드 시점에 내용이 정해지는 정적 데이터라 런타임에 요청하지 않고 import로 번들에 포함하는 쪽을 선택',
    action:
      "import articles from '../../data/articles.json'으로 바꾸고, 부모 페이지에서 fetch해 props로 넘기던 구조를 없애 목록 컴포넌트가 직접 import하게 함. SPA 새로고침 404는 vercel.json rewrites로 해결",
    result: '어느 경로에서 접근해도 데이터가 표시되고, 데이터 요청과 비동기 로딩 처리가 사라짐',
  },
  {
    title:
      '상태가 여러 번 바뀌면 그만큼 다시 렌더링되고 배열·중첩 객체 변경은 감지하지 못하던 Observer를 개선',
    problem:
      '한 동작에서 상태를 여러 개 바꾸면 바뀐 횟수만큼 렌더링이 실행됨. 배열 push나 중첩 객체 값 변경은 화면에 반영되지 않음',
    cause:
      'setter가 값이 바뀔 때마다 구독자를 바로 실행했고, Object.defineProperty를 최상위 키에만 걸어 배열 메서드와 중첩 객체는 감시하지 못함',
    decision:
      '같은 작업 안의 변경은 한 번에 처리하면 되므로, 구독자를 바로 실행하지 않고 모아서 마이크로태스크에서 한 번만 실행하기로 함',
    action:
      '구독자를 Set 큐에 넣어 중복을 없애고 Promise.resolve().then()으로 한 번에 실행. 객체·배열은 재귀로 반응형 처리하고, push·splice 등 배열 변경 메서드를 감싸 변경을 알리게 함',
    result: '연속 변경도 렌더링은 한 번만 일어나고, 배열·중첩 객체 변경도 화면에 반영됨',
  },
];

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
