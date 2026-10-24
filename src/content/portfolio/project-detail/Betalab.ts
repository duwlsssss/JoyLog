import type { ProjectDetail } from '@/types/project';

export const BETALAB_DETAIL: ProjectDetail = {
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
