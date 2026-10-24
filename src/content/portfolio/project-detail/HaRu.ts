import type { ProjectDetail } from '@/types/project';

export const HARU_DETAIL: ProjectDetail = {
  imageAspect: '1440 / 1024',
  images: [
    { src: '/portfolio/haru/ai-list.webp', alt: 'AI 회의 진행 매니저 - 내 회의록 목록' },
    { src: '/portfolio/haru/ai-create.webp', alt: '새 회의 생성 - 회의 제목·안건 파일 업로드' },
    {
      src: '/portfolio/haru/ai-recording.webp',
      alt: '회의 녹음 중 - 실시간 발화 기록과 AI 추천 질문',
    },
    { src: '/portfolio/haru/ai-recording-paused.webp', alt: '녹음 일시정지' },
    { src: '/portfolio/haru/ai-recording-end.webp', alt: '녹음 종료 확인' },
    { src: '/portfolio/haru/ai-proceeding-loading.webp', alt: 'AI 회의록 작성 중' },
    { src: '/portfolio/haru/ai-proceeding.webp', alt: '회의록 조회 - AI 요약 회의록' },
    { src: '/portfolio/haru/ai-proceeding-edit.webp', alt: '회의록 수정 - 섹션·불렛 편집기' },
    {
      src: '/portfolio/haru/ai-playback.webp',
      alt: '음성 기록 재생 - 재생 위치에 맞춘 발화 포커스',
    },
    { src: '/portfolio/haru/ai-download.webp', alt: '회의록 다운로드 - 파일 형식 선택' },
    { src: '/portfolio/haru/ai-search.webp', alt: '회의록 검색' },
    { src: '/portfolio/haru/sns-winners.webp', alt: 'SNS 이벤트 어시스턴트 - 당첨자 추첨 결과' },
    { src: '/portfolio/haru/mood-responses.webp', alt: '팀 분위기 트래커 - 설문 응답 통계' },
    { src: '/portfolio/haru/calendar.webp', alt: '내 캘린더' },
  ],
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
