import type { ProjectDetail } from '@/types/project';

export const SHOWTIME_DETAIL: ProjectDetail = {
  images: [
    {
      src: '/portfolio/showtime/admin-schedule-add.webp',
      alt: '관리자 근무 추가 - 반복 일정 설정',
    },
    {
      src: '/portfolio/showtime/admin-schedule-filter.webp',
      alt: '관리자 근무 조회 - 업무 카테고리 필터링',
    },
    {
      src: '/portfolio/showtime/schedule-detail.webp',
      alt: '일정 관리 - 날짜별 업무 조회 및 수정·삭제',
    },
  ],
  techStack: [
    {
      name: 'Redux / Redux Thunk',
      usedIn: '일정 CRUD 액션과 비동기 요청 처리',
    },
    {
      name: 'Redux-Persist',
      usedIn: '새로고침 시에도 일정 데이터 유지',
    },
    {
      name: 'react-hook-form / Zod',
      usedIn: '일정 추가·수정 모달 폼 유효성 검사',
    },
    {
      name: 'react-calendar',
      usedIn: '근무 일정이 표시되는 캘린더 커스터마이징',
    },
    {
      name: 'Supabase',
      usedIn: '직원·일정 데이터 조회',
    },
  ],
};
