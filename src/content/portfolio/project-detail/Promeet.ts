import type { ProjectDetail } from '@/types/project';

export const PROMEET_DETAIL: ProjectDetail = {
  imageLayout: 'portrait',
  imageAspect: '9 / 16',
  images: [
    {
      src: '/portfolio/promeet/home.webp',
      alt: '홈 - 다가오는 약속과 내가 만든 약속, 초대받은 약속',
    },
    { src: '/portfolio/promeet/create-info.webp', alt: '약속 생성 - 기본 정보 입력' },
    { src: '/portfolio/promeet/create-date.webp', alt: '약속 생성 - 날짜 선택' },
    { src: '/portfolio/promeet/create-schedule.webp', alt: '약속 생성 - 가능한 시간 선택' },
    {
      src: '/portfolio/promeet/create-location-consent.webp',
      alt: '약속 생성 - 위치 정보 수집 동의',
    },
    {
      src: '/portfolio/promeet/create-location-station.webp',
      alt: '약속 생성 - 현재 위치 기준 가까운 역 자동 입력',
    },
    {
      src: '/portfolio/promeet/create-location-search.webp',
      alt: '약속 생성 - 출발 위치 주소 검색',
    },
    {
      src: '/portfolio/promeet/create-invite-modal.webp',
      alt: '약속 생성 완료 - 공유 링크 초대 모달',
    },
    { src: '/portfolio/promeet/join-sign-in.webp', alt: '약속 참여 - 초대 링크로 들어와 로그인' },
    { src: '/portfolio/promeet/join-schedule.webp', alt: '약속 참여 - 가능한 시간 선택' },
    { src: '/portfolio/promeet/join-waiting.webp', alt: '모든 참여자의 입력 대기' },
    {
      src: '/portfolio/promeet/map-stations.webp',
      alt: '약속 지도 - 참여자별 출발역, 중간역, 이동 시간',
    },
    { src: '/portfolio/promeet/map-places.webp', alt: '약속 지도 - 카테고리별 장소 마커' },
    { src: '/portfolio/promeet/place-like.webp', alt: '장소 목록 - 좋아요 토글' },
    {
      src: '/portfolio/promeet/finalize-locked.webp',
      alt: '약속 확정 - 모든 참여자가 좋아요를 누르기 전에는 선택 불가',
    },
    { src: '/portfolio/promeet/finalize-select.webp', alt: '약속 확정 - 생성자의 최종 장소 선택' },
    { src: '/portfolio/promeet/finalize-waiting.webp', alt: '참여자 화면 - 생성자의 확정 대기' },
    { src: '/portfolio/promeet/finalize-result.webp', alt: '확정된 약속 정보' },
    {
      src: '/portfolio/promeet/my-page.webp',
      alt: '마이페이지 - 다가오는 약속, 제안한 약속, 지난 약속',
    },
  ],
  techStack: [
    {
      name: 'Kakao Maps API',
      usedIn:
        'Map, Marker·MarkerImage, CustomOverlay, Polyline으로 참여자 위치와 경로 표시, 장소 검색',
    },
    {
      name: 'Zustand',
      usedIn: '사용자, 지도, 마커, 위치, 장소 좋아요 store를 state와 action으로 분리해 관리',
    },
    {
      name: 'React Router',
      usedIn:
        'createBrowserRouter로 public·private 라우트 구성, 로그인·약속 생성자 여부 기반 페이지 래퍼',
    },
    {
      name: 'TanStack Query',
      usedIn: '약속·사용자 데이터 조회와 페이지 래퍼의 로딩 상태 처리',
    },
  ],
};
