import type { ProjectDetail } from '@/types/project';

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
