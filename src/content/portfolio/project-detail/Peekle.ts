import type { ProjectCase, ProjectDetail } from '@/types/project';

export const PEEKLE_CASES: ProjectCase[] = [
  {
    title: '찜 버튼이 응답이 올 때까지 바뀌지 않던 문제를 캐시 구조에 맞춘 낙관적 업데이트로 해결',
    problem: '찜 버튼을 눌러도 화면이 바로 바뀌지 않고, 서버 응답 후 재조회가 끝나야 반영됨',
    cause:
      '낙관적 업데이트가 캐시에 isScrapped를 최상위 필드로 썼는데, 상세 쿼리 캐시의 실제 구조는 { event: {...} }. 화면은 data.event.isScrapped를 읽으므로 바꾼 값이 렌더링에 쓰이지 않음',
    decision:
      '찜하기는 실패 가능성이 낮고 즉각적인 반응이 중요한 동작이라, 낙관적 업데이트는 유지하고 캐시 구조를 맞추기로 함',
    action:
      'setQueryData를 { ...prev, event: { ...prev.event, isScrapped } } 형태로 수정하고, 시작 전 cancelQueries로 진행 중인 조회가 덮어쓰지 않게 함. 실패 시 스냅샷으로 롤백, 완료 후 상세 쿼리를 무효화해 서버 상태와 맞추고, 성공 시 목록 쿼리도 무효화',
    result: '버튼을 누르는 즉시 찜 상태가 바뀌고, 실패하면 원래대로 돌아가며, 목록에도 반영됨',
  },
  {
    title: '없는 이벤트 주소에서 클라이언트 오류가 나던 문제를 2단계 검증으로 404 페이지 처리',
    problem: '없는 이벤트 주소(/abc, 삭제된 ID)에 들어가면 404 페이지 대신 클라이언트 오류가 남',
    cause:
      '서버 프리패치에서 Ky가 404를 HTTPError로 던지는데 공통 fetcher가 이를 구분하지 않고 일반 오류로 넘김. 숫자가 아닌 eventId도 검증 없이 API를 호출함',
    decision:
      '요청 전에 걸러낼 수 있는 잘못된 주소는 API 호출 전에 막고, 서버가 판단해야 하는 "없는 이벤트"는 응답 상태로 처리하는 2단계로 나눔',
    action:
      'isPositiveNumber로 eventId가 양의 정수가 아니면 바로 notFound()를 호출하고, 공통 fetcher에서 HTTPError 404일 때만 notFound()로 변환하고 나머지 오류는 그대로 throw',
    result:
      '잘못된 주소와 없는 이벤트 모두 not-found 페이지가 뜸. fetcher에서 처리하므로 다른 상세 API에도 똑같이 적용됨',
  },
];

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
