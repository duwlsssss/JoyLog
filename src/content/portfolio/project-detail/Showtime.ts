import type { ProjectDetail } from '@/types/project';

export const SHOWTIME_DETAIL: ProjectDetail = {
  images: [
    { src: '/portfolio/showtime/login.webp', alt: '로그인' },
    { src: '/portfolio/showtime/login-success.webp', alt: '로그인 성공' },
    { src: '/portfolio/showtime/home.webp', alt: '홈 - 근무 캘린더와 급여 현황' },
    { src: '/portfolio/showtime/schedule-filter.webp', alt: '홈 - 업무 카테고리 필터링' },
    { src: '/portfolio/showtime/schedule.webp', alt: '일정 관리 - 월간 캘린더' },
    { src: '/portfolio/showtime/schedule-timeline.webp', alt: '일정 관리 - 날짜별 업무 타임라인' },
    { src: '/portfolio/showtime/schedule-empty-day.webp', alt: '일정 관리 - 업무가 없는 날' },
    { src: '/portfolio/showtime/schedule-add.webp', alt: '일정 추가 - 반복 주기와 종료일 설정' },
    { src: '/portfolio/showtime/schedule-edit.webp', alt: '일정 수정' },
    {
      src: '/portfolio/showtime/schedule-detail.webp',
      alt: '일정 관리 - 날짜별 업무 조회 및 수정·삭제',
    },
    { src: '/portfolio/showtime/schedule-after-delete.webp', alt: '일정 삭제 후 캘린더 반영' },
    { src: '/portfolio/showtime/salary-list.webp', alt: '급여 내역 - 월별 급여 목록' },
    { src: '/portfolio/showtime/salary-receipt.webp', alt: '급여 명세서' },
    { src: '/portfolio/showtime/profile-edit.webp', alt: '프로필 - 회원 정보 수정' },
    {
      src: '/portfolio/showtime/admin-schedule-filter.webp',
      alt: '관리자 근무 조회 - 업무 카테고리 필터링',
    },
    {
      src: '/portfolio/showtime/admin-schedule-employee-search.webp',
      alt: '관리자 근무 추가 - 직원 검색',
    },
    {
      src: '/portfolio/showtime/admin-schedule-add.webp',
      alt: '관리자 근무 추가 - 반복 일정 설정',
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
