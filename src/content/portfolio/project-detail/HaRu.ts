import type { ProjectCase, ProjectDetail } from '@/types/project';

export const HARU_CASES: ProjectCase[] = [
  {
    title:
      'API 에러 응답을 두 번 읽어 실제 에러 대신 "body already used" 오류가 나던 공통 fetcher를 clone으로 해결',
    problem:
      'API가 에러를 반환하면 서버 에러 메시지 대신 응답 본문을 이미 읽었다는 TypeError가 발생해 실제 원인을 알 수 없음',
    cause:
      '토큰 만료(401)인지 확인하려고 res.json()으로 본문을 읽은 뒤, 같은 응답을 에러 핸들러가 다시 읽음. fetch 응답 본문은 스트림이라 한 번만 읽을 수 있음. 또 토큰 재발급 후 재시도가 실패하면 원래 응답으로 에러를 처리했고, 재시도 요청에서 기존 fetch 옵션이 빠져 있었음',
    decision:
      '401 판별은 응답 복사본으로 하고, 원본 응답은 실제로 처리하는 곳에서 한 번만 읽도록 소비 지점을 정함',
    action:
      'Content-Type이 JSON일 때만 res.clone().json()으로 에러 코드를 확인하고 파싱 실패는 무시. 재시도 요청은 기존 fetch 옵션을 유지하고, 재시도도 실패하면 재시도 응답으로 에러를 처리',
    result:
      '에러 응답에서 서버가 보낸 에러 코드와 메시지가 그대로 전달되고, 토큰 재발급 후 재시도도 원래 요청 옵션으로 동작함',
  },
  {
    title:
      '녹음 일시정지 버튼이 화면만 멈추고 음성 전송은 계속되던 문제를 UI와 WebSocket 전송을 함께 제어하도록 수정',
    problem:
      '회의 중 일시정지를 눌러도 파형 UI만 멈추고 마이크 음성은 계속 STT 서버로 전송됨. 재개 버튼도 UI만 재개됨',
    cause:
      '녹음 바의 재생·일시정지가 파형을 그리는 WaveSurfer 녹음 플러그인만 제어하고, WebSocket으로 PCM을 보내는 스트리밍은 별도 훅(useMeetingSocket)에 있어 연결되지 않았음',
    decision:
      '사용자 입장에서 "일시정지"는 전송 중단이어야 하므로, 버튼 하나가 UI와 전송을 함께 제어하도록 훅의 pauseStreaming·resumeStreaming을 녹음 바에 전달',
    action:
      '일시정지·재개·회의 종료 확인 시 WaveSurfer와 WebSocket 전송을 함께 멈추고 재개. 마이크 트랙은 유지하고 전송만 멈춰 재개 시 다시 권한을 요청하지 않게 함. 일시정지 원인을 따로 추적하던 ref는 제거',
    result: '일시정지 중 음성이 회의록에 들어가지 않고, 재생 아이콘과 실제 전송 상태가 일치함',
  },
];

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
