import type { Project } from '@/types/project';

import { BETALAB_CASES, BETALAB_DETAIL } from '@/content/portfolio/project-detail/Betalab';
import { CODENEWS_CASES, CODENEWS_DETAIL } from '@/content/portfolio/project-detail/CodeNews';
import { DOPAMING_CASES } from '@/content/portfolio/project-detail/Dopaming';
import {
  FINANCE_SIMULATER_CASES,
  FINANCE_SIMULATER_DETAIL,
} from '@/content/portfolio/project-detail/FinanceSimulater';
import { HARU_CASES, HARU_DETAIL } from '@/content/portfolio/project-detail/HaRu';
import {
  HWP_REPORT_TIDY_CASES,
  HWP_REPORT_TIDY_DETAIL,
} from '@/content/portfolio/project-detail/HwpReportTidy';
import { JOYLOG_CASES, JOYLOG_DETAIL } from '@/content/portfolio/project-detail/JoyLog';
import {
  KIMS_BC_OFFICE_CASES,
  KIMS_BC_OFFICE_DETAIL,
} from '@/content/portfolio/project-detail/KimsBcOffice';
import { PEEKLE_CASES, PEEKLE_DETAIL } from '@/content/portfolio/project-detail/Peekle';
import { PROMEET_CASES, PROMEET_DETAIL } from '@/content/portfolio/project-detail/Promeet';
import { SHOWTIME_CASES, SHOWTIME_DETAIL } from '@/content/portfolio/project-detail/Showtime';

export const PROJECTS: Project[] = [
  {
    title: 'hwp-report-tidy',
    period: '2026.10 ~ now',
    description: '한글(HWP/HWPX) 보고서에서 줄 끝에 잘린 단어를 자간 조정으로 붙이는 자동화 도구',
    tags: ['Python', 'pyhwpx', 'HWPX', 'Claude API'],
    cases: HWP_REPORT_TIDY_CASES,
    achievements: [
      '한글이 화면에 그린 줄 시작 위치가 담긴 hwpx linesegarray를 임시 저장 후 파싱해 잘린 단어 위치를 판별 (본문·표·중첩 표 지원)',
      '오탈자·안 쓰는 스타일 점검과 직접 확인할 항목만 담은 CSV 리포트 제공, --check로 실제 적용 후 되돌리는 미리 보기 지원',
      '(선택) Claude API 문장 줄이기 제안: 문단마다 전송 내용을 먼저 보여주고 동의한 경우에만 전송, 문서는 수정하지 않음',
    ],
    links: {
      github: 'https://github.com/duwlsssss/hwp-report-tidy',
    },
    detail: HWP_REPORT_TIDY_DETAIL,
  },
  {
    title: 'Finance Simulater',
    period: '2026.06 ~ 2026.10',
    description:
      '월급·소비·투자·대출·상환을 24개월 동안 가상으로 겪어 보는 금융 시뮬레이터 (서버 개발)',
    tags: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'MySQL',
      'Redis',
      'pytest',
      'GitHub Actions',
      'Claude Code Action',
    ],
    cases: FINANCE_SIMULATER_CASES,
    achievements: [
      'merge 과정에서 spec 서브모듈 포인터가 원격에 없는 커밋으로 덮어써져 스펙 자동 갱신 PR이 멈춘 문제를 계기로, PR마다 포인터의 spec main 포함 여부와 과거 커밋으로의 되돌림을 검사하도록 CI 구성',
      'loan_id만 알면 타인의 대출을 조회할 수 있던 IDOR와 422 응답의 서버 파일 경로 노출을 수정하고, 라우터 인증 배선 누락을 잡는 통합 테스트 추가',
      'Claude Code Action 자동 리뷰가 백그라운드 에이전트 대기 중 세션 종료로 게시되지 않던 문제와 @claude 호출 시 중복 응답 문제 해결',
      '24턴 시뮬레이션 종료, 대출 연체 재시도·부도 처리, 신용점수 조회 API를 구현하고 회원가입부터 24턴 완료까지 E2E 테스트 작성',
    ],
    links: {
      docs: 'https://finance-simulater.github.io/backend/',
      github: 'https://github.com/finance-simulater/backend',
    },
    detail: FINANCE_SIMULATER_DETAIL,
  },
  {
    title: 'JoyLog',
    period: '2026.02 ~ 2026.03',
    description: 'Next.js 기반의 풀스택 개발 블로그',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Tailwind CSS v4'],
    cases: JOYLOG_CASES,
    achievements: [
      '서버 렌더링 때마다 오르던 조회수를 클라이언트 마운트 시 서버 액션으로 기록하도록 옮기고, 24시간 httpOnly 쿠키로 새로고침·재방문 중복 집계 차단 (봇·prefetch 제외, 존재하는 slug만 기록)',
      '태그·페이지 필터 URL이 홈 목록과 중복 색인되지 않도록 필터 페이지는 noindex·follow, 홈·포스트·포트폴리오에는 canonical 지정 (noindex 페이지엔 canonical을 두지 않아 신호 충돌 방지)',
      '공백 없는 긴 인라인 코드가 모바일에서 화면 밖으로 넘치던 문제를 wrap-anywhere로 수정하고, sticky를 깨뜨리는 hidden 대신 html·body에 overflow-x: clip 적용',
      'MDX 포스트 시스템 구축 (rehype-pretty-code 하이라이팅, 이미지 줌, 코드 복사, 구조도·GFM 표), 언어 미지정 코드 블록에 인라인 코드 스타일이 입혀지던 문제를 defaultLang으로 수정',
      'Lefthook 기반 Git Hooks로 lint·타입체크, commitlint, 빌드 검증 자동화',
    ],
    links: {
      site: 'https://joy.me.kr',
      github: 'https://github.com/duwlsssss/JoyLog.git',
    },
    detail: JOYLOG_DETAIL,
  },
  {
    title: 'Betalab',
    period: '2025.11 ~ 2026.02',
    description:
      '베타 테스터 모집부터 리워드 증정까지 전 과정을 관리하는 올인원 서비스 (숭실대 슈퍼스타 창업경진대회 최우수상)',
    tags: [
      'Next.js',
      'TypeScript',
      'TanStack Query',
      'Zod',
      'Recharts',
      'Zustand',
      'Tailwind CSS',
      'Gemini API',
    ],
    cases: BETALAB_CASES,
    achievements: [
      'Recharts로 만족도, 사용성, 버그 유형 등 테스트 결과 통계 차트 6종(레이더·도넛·막대)을 단독 구현해 관리자 데이터 센터 페이지 구성',
      '조건을 충족하는 테스터만 참여하도록 예/아니오 질문을 순차 제시하는 스크리너를 구축해 테스트 데이터의 신뢰도 확보 (불일치 시 안내, 기신청자 제외, 개인정보 동의 질문 자동 추가)',
      'Google Gemini API(JSON Schema 기반 구조화 응답)로 모집자가 자유롭게 입력한 참여 조건을 최대 5개의 예/아니오 스크리너 질문으로 자동 변환하고, 응답 검증 실패·API 오류 시 원본 조건으로 대체하는 fallback 처리',
      '16개 항목 피드백 폼에 Zod 스키마 유효성 검사, 임시 저장·복원, 중복 제출 방지, 참여 정보 기반 접근 가드 구현',
      '승인된 테스터만 피드백을 작성해야 하는데 진입 조건이 테스트 완료(TEST_COMPLETED) 상태로 잡혀 있던 문제를 수정하고, 참여 상태(승인 대기·승인·제출 완료 등)별 버튼 문구와 동작을 한 곳에서 결정하도록 정리해 재제출 차단',
      '소개글 길이와 관계없이 항상 접히고 더보기 버튼이 보이던 상세 페이지를, 렌더링 후 실제 높이(scrollHeight)를 측정해 630px을 넘을 때만 접도록 수정 (QA 발견)',
    ],
    links: {
      github: 'https://github.com/PROJECT-NEXUS-JS/betalab-frontend',
    },
    detail: BETALAB_DETAIL,
  },
  {
    title: 'Peekle',
    period: '2025.08 ~ 2025.11',
    description: '시니어 친화적 UX를 적용한 이벤트 큐레이션 및 커뮤니티 서비스',
    tags: ['Next.js', 'TypeScript', 'Ky', 'Zod', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
    cases: PEEKLE_CASES,
    achievements: [
      '찜 버튼이 서버 응답 전까지 바뀌지 않던 문제를, 낙관적 업데이트를 실제 캐시 구조({ event })에 맞춰 고쳐 해결 (cancelQueries로 덮어쓰기 방지, 실패 시 스냅샷 롤백, 완료 후 상세·목록 무효화)',
      '없는 이벤트 주소에서 404 페이지 대신 클라이언트 오류가 나던 문제를, eventId 양의 정수 검증과 공통 fetcher의 HTTP 404 → notFound() 변환으로 해결',
      "'강남,서초,양재'처럼 쉼표가 들어간 지역 그룹 값이 개별 지역과 섞여 선택·해제와 선택된 필터 칩 표시가 어긋나던 문제를, 그룹을 토큰 단위로 비교하고 칩은 그룹 단위로 묶어 표시하도록 수정 (필터 상태는 Query String과 동기화해 새로고침·공유 시 유지)",
      '한글 입력 중 Enter를 누르면 조합 중인 글자까지 검색되던 문제를 isComposing 검사로 수정',
      'Ky 공통 fetcher와 Zod 응답 스키마로 베이스 URL·타임아웃·401 처리와 런타임 응답 검증을 한 곳에서 수행하고, 클라이언트(cookies-next)·서버(next/headers)용 인증 fetcher를 분리',
      'S3 Presigned URL로 프로필 이미지를 브라우저에서 S3에 직접 업로드하고, 업로드마다 AbortController를 id로 관리해 개별 취소 지원 (취소 시 미리보기 Object URL 해제로 메모리 정리)',
      '백엔드 응답마다 fileUrl·publicUrl·key 중 내려오는 필드와 형식(절대·프로토콜 상대·경로)이 달라도 최종 이미지 주소를 https 절대 URL로 정규화하는 유틸 작성',
      '짧은 로딩에서 스피너가 깜빡이지 않도록 500ms가 지나야 표시하는 지연 로더를 만들어 Suspense fallback에 적용',
    ],
    links: {
      github: 'https://github.com/Team-Peekle/peekle-frontend-next',
    },
    detail: PEEKLE_DETAIL,
  },
  {
    title: 'HaRu',
    period: '2025.07 ~ 2025.08',
    description: '소규모 팀 운영 서포팅 서비스 (UMC 8기 데모데이 장려상)',
    tags: [
      'Next.js',
      'TypeScript',
      'WebSocket',
      'Web Audio API',
      'Playwright',
      'Sentry',
      'Storybook',
    ],
    cases: HARU_CASES,
    achievements: [
      'FE 리드로서 디자인 토큰(컬러·폰트), lint·prettier 규칙, Sentry 등 프론트엔드 개발 환경을 세팅하고 팀 컨벤션 정립',
      'AI 회의 매니저 기능(실시간 녹음·STT 스트리밍, 회의록 편집·재생) 프론트엔드 개발',
      '헤더 없는 16kHz·모노·16bit PCM을 전제로 처리하는 STT 서버에 맞춰, 48kHz Float32 마이크 입력을 AudioWorklet에서 16kHz로 선형 보간 리샘플링하고 Int16으로 변환해 20ms(1280B) 프레임 단위로 WebSocket 스트리밍 (전송량 초당 192KB → 32KB)',
      '화자 분리, 핵심 요약 등 AI 회의록 화면을 구현하고 재생 위치에 맞춰 해당 발화로 포커스를 이동하도록 세그먼트 시간축 정규화',
      '섹션·불렛 구조의 회의록 편집기 개발 (방향키 이동, Enter로 불렛 생성, 맨 앞 Backspace로 섹션 병합)',
      'Playwright로 로그인 인증 상태를 재사용하는 5개 핵심 사용자 흐름의 E2E 테스트 설계 및 배포 주소 대상 자동화 테스트 구현',
    ],
    links: {
      github: 'https://github.com/HaRu-Developers/haru-web',
    },
    detail: HARU_DETAIL,
  },
  {
    title: 'Promeet',
    period: '2025.05 ~ 2025.06',
    description: '약속 잡기 및 스케줄링 서비스',
    tags: [
      'React',
      'JavaScript',
      'Kakao Maps API',
      'Zustand',
      'TanStack Query',
      'Styled-components',
      'Vite',
    ],
    cases: PROMEET_CASES,
    achievements: [
      '장소 좋아요를 누를 때마다 지도·장소 목록 전체가 다시 그려지고 주변 장소 검색이 다시 실행되던 문제를, 좋아요 버튼 분리, Zustand useShallow 선택 구독, 중심역 값 기준 메모이제이션으로 해결',
      'Vercel 배포 후 중첩 경로(/promise/:id/...)에서 새로고침하면 404와 모듈 MIME 오류가 나던 문제를 SPA rewrites와 Vite base 절대 경로로 해결',
      '카카오 LatLng 객체의 내부 필드(Ma/La)에 의존해 위·경도가 뒤바뀌거나 SDK 버전에 따라 깨질 수 있던 좌표를 { Ma: 위도, La: 경도 } 일반 객체로 통일해 저장',
      'Kakao Maps API로 참여자 출발역·중간역 마커, 이동 경로(Polyline), 주변 장소 검색과 좋아요 토글을 포함한 약속 장소 지도 구현',
      '로그인 여부와 약속 생성자 여부로 접근을 제어하는 라우트 래퍼로 주최자·참여자 페이지 보호',
      '약속·사용자·시간표 API 스펙을 직접 정의하고 생성부터 확정까지 약속 플로우 API 연결',
    ],
    links: {
      site: 'https://promeet-six.vercel.app',
      github: 'https://github.com/Global-Media-Web-Programming/Promeet',
    },
    detail: PROMEET_DETAIL,
  },
  {
    title: 'Code News',
    period: '2025.04 ~ 2025.05',
    description: '웹 기초 학습 및 게임형 교육 서비스',
    tags: ['JavaScript', 'HTML', 'CSS', 'CodeMirror', 'Vite'],
    cases: CODENEWS_CASES,
    achievements: [
      '배포본에서 아티클·학습 데이터를 못 불러오던 문제를, fetch 상대 경로가 페이지 URL 기준으로 풀리고 src/가 빌드에 포함되지 않는 원인을 찾아 JSON을 모듈 import로 번들에 포함시켜 해결',
      '프레임워크 없이 Component 베이스 클래스와 Observer 기반 상태 관리를 직접 설계하고, 연속 변경은 마이크로태스크로 모아 한 번만 렌더링, 배열·중첩 객체 변경도 감지하도록 개선',
      'History API 기반 SPA 라우터(동적 파라미터, 404 fallback)와 풀이 진행도에 따라 접근을 제한하는 Protected Route 구현',
      'CodeMirror 편집기와 iframe 실시간 미리보기를 연결하고, HTML은 DOM 파싱 비교·CSS는 공백·따옴표 정규화 비교로 정답 판별',
    ],
    links: {
      site: 'https://web-study-game.vercel.app/',
      github: 'https://github.com/Global-Media-Web-Programming/WebStudyGame',
    },
    detail: CODENEWS_DETAIL,
  },
  {
    title: 'Showtime',
    period: '2024.11 ~ 2024.12',
    description: '사내 직원 관리 서비스',
    tags: [
      'React',
      'TypeScript',
      'Redux',
      'Redux Thunk',
      'Redux-Persist',
      'Supabase',
      'Vite',
      'Styled-components',
    ],
    cases: SHOWTIME_CASES,
    achievements: [
      '그룹 ID 없이 필드 비교로 묶던 반복 일정에서, 한 회차 수정·삭제 시 다른 직원·다른 반복 일정까지 영향을 받던 문제를 판별 조건 보강(직원 ID, 반복 종료일)과 이전 회차 종료일 조정을 통한 그룹 분할로 해결',
      '반복 일정(주기, 종료일) 생성 로직을 설계하고, 전체 수정 시 시작일 변경 여부에 따라 기준 회차를 정해 재생성',
      'Redux Thunk로 Supabase 일정 CRUD를 처리하고 Redux-Persist로 새로고침 시에도 일정 데이터 유지',
      'react-hook-form과 Zod로 일정 추가·수정 폼을 검증하고, 일반 직원은 오늘 이전 일정을 추가·수정·삭제하지 못하도록 제한',
      '기술 선택 배경과 구조 변경 과정을 발표하여 멘토 최고 점수 획득 및 타 팀으로부터 구조 공유 요청',
    ],
    links: {
      site: 'https://showtime-drab.vercel.app',
      github: 'https://github.com/duwlsssss/SHOWTIME',
    },
    detail: SHOWTIME_DETAIL,
  },
  {
    title: 'Dopaming',
    period: '2024.10 ~ 2024.11',
    description:
      '효율적인 수강생 관리와 소통을 위한 가상의 학습 플랫폼 회사 도파밍의 인트라넷 서비스',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vite'],
    cases: DOPAMING_CASES,
    achievements: [
      '사용자 휴가/공가 신청·수정·삭제·필터링을 구현하고, 수정·삭제 후 페이지 전체를 새로고침하던 방식을 해당 항목과 잔여 휴가 요약만 다시 그리도록 개선',
      '프로필 수정 시 Firebase set()이 사용자 노드 전체를 덮어써 폼에 없는 필드(잔여 휴가 등)가 사라지던 문제를 update()로 바꾸고, 빈 입력은 기존 값을 유지하도록 수정',
      '프로필 이름·사진 변경을 커스텀 이벤트로 알려 새로고침 없이 헤더에 반영',
      '로그인·프로필·휴가 신청 폼의 유효성 검사를 utils로 분리해 공통화하고 필드별 오류 메시지 표시',
      '동적 경로를 지원하는 라우터와 not-found 페이지, 사용자 홈·공지 목록·상세 페이지 구현',
    ],
    links: {
      github: 'https://github.com/duwlsssss/DOPAMING',
    },
  },
  {
    title: "Kim's Business Card Office",
    period: '2024.01 ~ 2024.05',
    description:
      '3D 사무실을 돌아다니며 나만의 명함을 만들고, 전시 방문자의 명함을 3D 갤러리에서 감상하는 졸업 전시 웹 서비스',
    tags: [
      'React',
      'Three.js',
      'React Three Fiber',
      'Rapier',
      'GSAP',
      'Zustand',
      'Styled-components',
      'Vite',
    ],
    cases: KIMS_BC_OFFICE_CASES,
    achievements: [
      '214MB 사무실 3D 모델을 분석해 Draco 압축·텍스처 변환·메시 단순화로 10.9MB(-95%)로 줄이고 체감 로딩을 분 단위에서 약 20초로 단축',
      '카카오톡·라인·삼성 인터넷 인앱 브라우저에서 모바일 명함 링크가 열리지 않던 문제를 외부 브라우저 전환으로 해결하고, html2canvas로 명함 앞·뒷면 이미지 저장 구현',
      'three-stdlib Water 셰이더와 그림자를 적용해 사무실 외부·내부 3D 씬을 구성하고 진입 여부에 따라 씬 전환',
      'Rapier 물리 엔진(RigidBody·CapsuleCollider)으로 카메라 방향 기준 WASD·방향키 이동 캐릭터와 3인칭 추적 카메라 구현',
      'kinematic 이동 NPC와 말풍선 대화·선택지 분기로 서비스 이용 흐름을 안내하는 온보딩 구현',
      'GSAP으로 인트로 진입, 모니터 클릭 시 포커스, 로그아웃 시 재시작 등 카메라 연출 구현',
      'drei Html과 iframe으로 3D 모니터 안에 명함 편집 화면을 삽입하고 occlude로 3D 물체에 가려지도록 처리',
      '여러 GLB 애니메이션을 Promise.all로 동기화한 명함 출력 연출, 카드 뒤집기, 갤러리로 연결되는 QR 코드 구현',
      '방문자 명함을 3D 갤러리 공간에 전시하고 세션별 필터와 페이지 넘김, GSAP 카드 등장 효과 구현',
    ],
    links: {
      video: 'https://www.youtube.com/watch?v=C984XiIuqX4',
    },
    detail: KIMS_BC_OFFICE_DETAIL,
  },
];
