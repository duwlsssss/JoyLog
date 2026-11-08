import type { ProjectCase, ProjectDetail } from '@/types/project';

export const PROMEET_CASES: ProjectCase[] = [
  {
    title:
      '좋아요 한 번에 지도·목록 전체가 다시 그려지고 장소 검색이 재실행되던 문제를 구독 범위를 좁혀 해결',
    problem:
      '장소 카드의 좋아요를 누르면 목록 전체가 다시 그려지고, 카드 배경 애니메이션이 다시 재생되며, 주변 장소 검색이 다시 실행돼 목록이 비었다가 채워짐',
    cause:
      '좋아요 정보를 장소 목록에 합쳐(mergedNearbyPlaces) props로 내려줘서 좋아요 하나만 바뀌어도 목록 전체가 새 배열이 됨. 지도 컴포넌트는 약속 데이터 전체를 구독해 likedPlaces 변경에도 반응했고, 서버 재조회 시 centerStation 객체 참조가 바뀌어 값이 같아도 검색 effect가 재실행됨. 카드 key도 index였음',
    decision:
      '좋아요 상태를 실제로 쓰는 곳은 버튼뿐이므로 상위에서 합쳐 내려주지 않고 버튼이 직접 구독하게 함. 나머지 컴포넌트는 필요한 필드만 구독',
    action:
      'LikeButton을 분리해 store에서 자기 장소의 좋아요만 읽게 함. 지도 컴포넌트는 useShallow로 centerStation·canFix만 선택 구독하고, centerStation은 이름·좌표 값 기준으로 useMemo해 참조를 고정. 카드 key는 placeId로 바꾸고 framer-motion animate 객체도 메모이제이션',
    result: '좋아요를 눌러도 해당 버튼만 다시 그려지고, 검색 재실행과 애니메이션 재생이 사라짐',
  },
  {
    title:
      '배포 후 중첩 경로에서 새로고침하면 404, 이어서 모듈 MIME 오류가 나던 문제를 단계별로 해결',
    problem:
      'Vercel 배포본에서 /promise/:id/... 같은 경로에서 새로고침하면 404가 남. 이를 고치자 흰 화면과 함께 모듈 스크립트 MIME 타입 오류가 남',
    cause:
      'SPA라 서버에는 index.html 하나만 있는데 Vercel이 경로 그대로 파일을 찾아 404를 반환. 또 Vite base가 상대 경로(./)라 중첩 경로에서는 에셋을 /promise/:id/assets/...로 요청했고, rewrites가 이 요청에 index.html(text/html)을 돌려줘 JS 모듈로 불러오지 못함',
    decision:
      '모든 경로를 index.html로 보내되, 에셋은 어느 경로에서든 루트 기준으로 요청되게 해야 한다고 판단',
    action:
      'vercel.json에 모든 경로를 /index.html로 보내는 rewrites를 추가하고 Vite base를 /로 변경',
    result: '어느 경로에서 새로고침하거나 공유 링크로 바로 들어와도 페이지가 정상적으로 뜸',
  },
];

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
