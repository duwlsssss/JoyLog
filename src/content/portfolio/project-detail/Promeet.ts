import type { ProjectDetail } from '@/types/project';

export const PROMEET_DETAIL: ProjectDetail = {
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
