import type { ProjectCase, ProjectDetail } from '@/types/project';

export const BETALAB_CASES: ProjectCase[] = [
  {
    title:
      '모집자가 등록한 YouTube·동영상·외부 이미지가 상세 페이지에서 표시되지 않던 문제를 URL 유형별 미디어 컴포넌트로 해결',
    problem:
      '모집자가 테스트 소개에 YouTube 링크, 동영상 파일, 외부 이미지 URL을 자유롭게 등록하는데, 상세 페이지에서 이미지·영상이 표시되지 않음',
    cause:
      '기존 CustomImage가 모든 URL을 next/image로 렌더링. next/image는 이미지가 아닌 YouTube·동영상 URL을 그릴 수 없고, next.config의 remotePatterns에 없는 외부 호스트 이미지는 불러오지 못함',
    decision:
      '사용자가 입력하는 URL의 호스트는 미리 알 수 없어 remotePatterns에 계속 추가하는 방식으로는 해결되지 않는다고 판단. URL로 미디어 유형을 판별해 맞는 태그로 렌더링하고, 이미지는 Next 이미지 최적화(unoptimized)를 포기하는 대신 임의 호스트를 허용',
    action:
      'CustomMedia 공통 컴포넌트를 만들어 YouTube ID가 추출되면 iframe, 동영상 확장자면 video, 나머지는 이미지로 분기. 이후 QA에서 발견된 이미지 잘림은 고정 크기(854×533)를 없애고 YouTube를 aspect-video로 감싸 해결',
    result:
      'YouTube·동영상·이미지가 섞인 소개글도 상세 페이지에서 유형에 맞게 표시되고, 고정 크기로 잘리던 이미지가 컨테이너 폭에 맞게 표시됨',
  },
];

export const BETALAB_DETAIL: ProjectDetail = {
  imageAspect: '5 / 4',
  images: [
    { src: '/portfolio/betalab/home.webp', alt: '홈 - 추천·마감 임박 테스트' },
    {
      src: '/portfolio/betalab/category-app.webp',
      alt: '카테고리별 테스트 목록 - 장르·플랫폼 필터',
    },
    { src: '/portfolio/betalab/test-create-platform.webp', alt: '테스트 등록 - 플랫폼 선택' },
    {
      src: '/portfolio/betalab/test-create-condition.webp',
      alt: '테스트 등록 - 참여 조건 설정 (스크리너 질문 생성)',
    },
    {
      src: '/portfolio/betalab/project-detail.webp',
      alt: '테스트 모집글 상세 - 미디어 렌더링·접기 리팩토링',
    },
    { src: '/portfolio/betalab/screener-question.webp', alt: '스크리너 - 예/아니오 질문' },
    { src: '/portfolio/betalab/screener-mismatch.webp', alt: '스크리너 - 조건 불일치 안내' },
    { src: '/portfolio/betalab/feedback-form.webp', alt: '피드백 폼 - 평가 및 품질 피드백' },
    { src: '/portfolio/betalab/admin-project-list.webp', alt: '관리자 - 내 프로젝트 목록' },
    {
      src: '/portfolio/betalab/admin-project-condition.webp',
      alt: '관리자 프로젝트 관리 - 참여 조건 수정',
    },
    {
      src: '/portfolio/betalab/data-center.webp',
      alt: '관리자 데이터 센터 - 요약·만족도·품질·사용성 차트와 인사이트',
    },
    {
      src: '/portfolio/betalab/data-center-empty.webp',
      alt: '관리자 데이터 센터 - 피드백이 없을 때',
    },
    {
      src: '/portfolio/betalab/admin-reward.webp',
      alt: '관리자 리워드 지급관리 - 상태별 현황과 지급 처리',
    },
  ],
  techStack: [
    {
      name: 'Google Gemini API',
      usedIn:
        'Route Handler(/api/generate-questions)에서 참여 조건을 스크리너 질문으로 변환, responseSchema로 문자열 배열 응답 강제',
    },
    {
      name: 'Recharts',
      usedIn: '데이터 센터의 사용성 레이더 차트, 만족도·버그 여부 도넛 차트, 평가 막대 차트',
    },
    {
      name: 'Zod',
      usedIn: '피드백 제출·임시 저장 전 폼 데이터 유효성 검사 및 첫 오류 메시지 안내',
    },
    {
      name: 'TanStack Query',
      usedIn:
        '모집글 상세, 신청 여부, 스크리너 질문, 피드백 임시 저장 데이터 조회 및 저장 mutation',
    },
    {
      name: 'Zustand',
      usedIn: '모집글 상세 페이지와 스크리너 다이얼로그 간 열림 상태 공유',
    },
  ],
};
