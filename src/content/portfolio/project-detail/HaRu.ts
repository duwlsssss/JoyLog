import type { ProjectDetail } from '@/types/project';

export const HARU_DETAIL: ProjectDetail = {
  techStack: [
    {
      name: 'Web Audio API',
      usedIn:
        'getUserMedia로 마이크 입력, AudioWorklet에서 16kHz 리샘플링, 프레임별 RMS로 음성 레벨 미터 표시',
    },
    {
      name: 'WebSocket',
      usedIn:
        'binaryType arraybuffer로 PCM 프레임 전송, 연결 전 종료·마이크 초기화 실패 시 종료 코드 처리',
    },
    {
      name: 'Playwright',
      usedIn:
        '로그인 상태 저장(auth.setup) 후 404, 모달 열기, 탭 전환, 제목 수정 반영 시나리오 테스트',
    },
    {
      name: 'Sentry',
      usedIn: 'client·server·edge 런타임별 에러 모니터링 설정',
    },
    {
      name: 'TanStack Query',
      usedIn: '서버·클라이언트 Query Client 생성 분리, 회의록 조회 쿼리',
    },
  ],
};
