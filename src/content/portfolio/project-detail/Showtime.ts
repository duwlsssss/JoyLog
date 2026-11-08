import type { ProjectCase, ProjectDetail } from '@/types/project';

export const SHOWTIME_CASES: ProjectCase[] = [
  {
    title:
      '반복 일정 한 회차를 수정·삭제하면 다른 회차나 다른 직원 일정까지 영향을 받던 문제를, 반복 그룹 판별 조건 보강과 그룹 분할로 해결',
    problem:
      '반복 일정의 한 회차를 수정·삭제하면 이후 전체 수정·삭제 범위가 어긋날 수 있었고, 전체 수정 시에는 클릭한 회차가 새 시작일이 되어 그 전 회차들이 사라질 수 있었음',
    cause:
      '회차마다 행을 따로 저장하고 그룹 ID 없이 카테고리·시간·반복 주기·근무 유형이 같은지로 같은 반복인지 판별. 이 조건에 직원 ID와 반복 종료일이 빠져 다른 직원이나 다른 반복의 일정도 같은 그룹으로 잡힐 수 있었고, 전체 수정은 클릭한 회차를 시작점으로 다시 생성했음',
    decision:
      '그룹 ID를 추가하려면 스키마를 바꿔야 해서, 판별 조건을 보강하고 반복 종료일을 그룹 경계로 쓰기로 함. 한 회차만 바꾸면 이전 회차들의 종료일을 그 전날로 당겨 별도 그룹으로 나눔',
    action:
      '판별 조건에 user_id와 repeat_end_date(KST 날짜 기준 비교)를 추가. 전체 수정은 시작일이 바뀌지 않았으면 기존 첫 회차 기준으로 재생성. 단일 수정·삭제 시에는 이전 회차의 repeat_end_date를 조정하고, 반복 설정이 바뀌었으면 해당 회차부터 새 반복으로 재생성',
    result:
      '한 회차를 고쳐도 이전 회차는 그대로 남고, 전체 수정·삭제가 해당 직원의 해당 반복에만 적용됨',
  },
];

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
