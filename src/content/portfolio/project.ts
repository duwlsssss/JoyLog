import type { Project } from '@/types/project';

import { BETALAB_DETAIL } from '@/content/portfolio/project-detail/Betalab';
import { CODENEWS_DETAIL } from '@/content/portfolio/project-detail/CodeNews';
import { FINANCE_SIMULATER_DETAIL } from '@/content/portfolio/project-detail/FinanceSimulater';
import { HARU_DETAIL } from '@/content/portfolio/project-detail/HaRu';
import { HWP_REPORT_TIDY_DETAIL } from '@/content/portfolio/project-detail/HwpReportTidy';
import { JOYLOG_DETAIL } from '@/content/portfolio/project-detail/JoyLog';
import { KIMS_BC_OFFICE_DETAIL } from '@/content/portfolio/project-detail/KimsBcOffice';
import { PEEKLE_DETAIL } from '@/content/portfolio/project-detail/Peekle';
import { PROMEET_DETAIL } from '@/content/portfolio/project-detail/Promeet';
import { SHOWTIME_DETAIL } from '@/content/portfolio/project-detail/Showtime';

export const PROJECTS: Project[] = [
  {
    title: 'hwp-report-tidy',
    period: '2026.10 ~ now',
    description: '한글(HWP/HWPX) 보고서에서 줄 끝에 잘린 단어를 자간 조정으로 붙이는 자동화 도구',
    tags: ['Python', 'pyhwpx', 'HWPX', 'Claude API'],
    achievements: [
      '보고서 마무리 때마다 잘린 단어를 찾아 수동으로 자간을 맞추던 반복 작업을 자동화',
      '잘린 줄을 좁혀 뒷부분을 윗줄로 올리고, 안 되면 넓혀 앞부분을 아랫줄로 내리는 2단계 자간 조정 구현 (본문·표·중첩 표 지원)',
      '커서 이동 방식은 51곳 중 11곳만 찾아, 임시 hwpx의 linesegarray(줄 시작 위치)를 파싱하는 방식으로 전환해 줄 나눔 판별 정확도 개선',
      '자간 한 단계마다 임시 저장 후 다시 읽어 단어가 한 줄에 모였는지·문단 줄 수가 늘지 않았는지 검증하고, 실패 시 Undo로 원래 값을 복구한 뒤 형광펜으로 표시',
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
    achievements: [
      'spec 레포를 git 서브모듈로 연결해 openapi.yaml을 API 스펙 단일 출처(SSOT)로 두고, CI에서 서브모듈 포인터가 spec main에 없는 커밋이거나 이전 커밋으로 되돌려졌는지 검사',
      'openapi.yaml로 실제 API 응답을 검증하는 계약 테스트를 추가해 스펙과 구현의 불일치를 조기에 발견',
      'Claude Code Action으로 PR 자동 리뷰와 @claude 호출을 설정하고, 백그라운드 에이전트 대기 중 세션이 끝나 리뷰가 게시되지 않던 문제와 PR·이슈 코멘트 중복 응답 문제 해결',
      'MySQL 통합·동시성 테스트 인프라를 구축하고, 대출 동시 신청 시 unique 제약 위반이 500으로 나가던 문제를 409로 변환',
      '24턴 시뮬레이션 종료, 대출 연체 재시도·부도 처리, 신용점수 조회 API 구현',
      '대출 조회 IDOR(소유자 검증 누락)와 422 응답에 서버 파일 경로·입력 원본값이 노출되던 보안 문제 수정',
      'Swagger 문서를 GitHub Pages로 배포하고 회원가입부터 24턴 완료까지 E2E 테스트 작성',
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
    achievements: [
      'MDX 기반 포스트 시스템 구축 및 코드 하이라이팅, 이미지 줌, 코드 복사 등 커스텀 MDX 컴포넌트 구현',
      'Query String 기반 태그 필터링 및 페이지네이션 구현',
      'Drizzle ORM & PostgreSQL 기반 조회수 추적 시스템 구축 (upsert 패턴, HMR 시 DB 커넥션 중복 방지)',
      '동적 메타데이터, OG 이미지, sitemap/robots 자동화를 통한 SEO 체계 구축 및 shadcn/ui 커스터마이징을 통한 반응형 디자인과 다크모드 구현',
      'Lefthook 기반 Git Hooks 자동화로 코드 품질 유지 체계 구축 (lint·타입체크, commitlint, 빌드 검증)',
    ],
    links: {
      site: 'https://joy-log-kappa.vercel.app',
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
    achievements: [
      'Recharts로 만족도, 사용성, 버그 유형 등 테스트 결과 통계 차트 6종(레이더·도넛·막대)을 단독 구현해 관리자 데이터 센터 페이지 구성',
      '조건을 충족하는 테스터만 참여하도록 예/아니오 질문을 순차 제시하는 스크리너를 구축해 테스트 데이터의 신뢰도 확보 (불일치 시 안내, 기신청자 제외, 개인정보 동의 질문 자동 추가)',
      'Google Gemini API(JSON Schema 기반 구조화 응답)로 모집자가 자유롭게 입력한 참여 조건을 최대 5개의 예/아니오 스크리너 질문으로 자동 변환하고, 응답 검증 실패·API 오류 시 원본 조건으로 대체하는 fallback 처리',
      '16개 항목 피드백 폼에 Zod 스키마 유효성 검사, 임시 저장·복원, 중복 제출 방지, 참여 정보 기반 접근 가드 구현',
      '이미지·영상이 표시되지 않던 테스트 상세 페이지를 리팩토링해, URL을 분석해 YouTube·동영상 파일·이미지를 구분 렌더링하는 공통 미디어 컴포넌트 구현',
      '상세 소개 영역의 실제 높이를 측정해 일정 높이를 넘을 때만 접기 버튼을 노출하도록 개선',
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
    achievements: [
      'Ky 커스텀 인스턴스 기반 공통 fetcher를 설계해 베이스 URL·타임아웃 관리와 401(토큰 삭제·로그인 리다이렉트), 404(notFound) 에러 처리를 한 곳에서 수행',
      'Zod 스키마로 API 응답을 런타임에 검증하고 z.infer로 응답 타입을 추론해 서버 응답 불일치를 조기에 감지',
      '클라이언트(cookies-next)와 서버(next/headers) 환경별 인증 fetcher를 분리해 서버 컴포넌트에서도 인증 API 호출 지원',
      '카테고리·기간·지역·가격 4종 필터를 Query String과 동기화해 새로고침·링크 공유 시에도 검색 상태 유지',
      'S3 Presigned URL 기반 클라이언트 직접 업로드를 구현하고 AbortController로 진행 중인 업로드 취소 지원',
      '500ms 지연 로더로 짧은 로딩에서 스피너가 깜빡이지 않도록 개선',
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
    achievements: [
      'FE 리드로서 디자인 토큰(컬러·폰트), lint·prettier 규칙, Sentry 등 프론트엔드 개발 환경을 세팅하고 팀 컨벤션 정립',
      'AI 회의 매니저 기능(실시간 녹음·STT 스트리밍, 회의록 편집·재생) 프론트엔드 개발',
      'AudioWorklet에서 마이크 입력을 모노로 합친 뒤 실제 입력 샘플레이트 기준 선형 보간으로 16kHz 리샘플링해 브라우저·기기별 샘플레이트 차이에 대응',
      '16kHz 리샘플링과 Float32→Int16 PCM 변환으로 전송량을 1/6로 줄이고(48kHz Float32 대비), 고정 크기 프레임 단위로 WebSocket 바이너리 전송하는 실시간 STT 스트리밍 클라이언트 구축',
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
    achievements: [
      'Kakao Maps API로 참여자 위치·역 마커, 이동 경로(Polyline), 장소 검색과 좋아요 토글을 포함한 약속 장소 지도 구현',
      '카카오 SDK 로드를 커스텀 훅으로 분리하고 지도·마커·위치 상태를 Zustand store로 나눠 관리',
      '로그인 여부와 약속 생성자 여부에 따라 접근을 제어하는 라우트 래퍼를 구현해 역할별(주최자/참여자) 페이지 보호',
      '약속, 사용자, 시간표 데이터를 포괄하는 API 스펙을 직접 정의하고 생성부터 확정까지 약속 플로우 API 연결',
      '약속 생성·참여 페이지와 공유 링크 초대 모달 제작',
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
    achievements: [
      '프레임워크 없이 Component 베이스 클래스와 Observer 패턴(마이크로태스크 배치 업데이트) 기반 상태 관리 구조 직접 설계',
      'History API 기반 SPA 라우터(동적 파라미터, 404 fallback)와 풀이 진행도에 따라 접근을 제한하는 Protected Route 구현',
      'CodeMirror 편집기와 iframe 실시간 미리보기를 연결하고, HTML은 DOM 파싱 비교·CSS는 공백·따옴표 정규화 비교로 정답 판별',
      '게임 종료 후 심화 학습으로 이어지는 UX flow 설계',
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
    achievements: [
      '반복 일정(반복 주기, 종료일) 계산 로직을 설계하고, 반복 일정 수정 시 이전 회차 종료일 조정과 이후 회차 재생성 처리',
      'Redux 기반 상태 관리와 Redux Thunk 비동기 처리를 구현하고 Redux-Persist로 새로고침 시에도 일정 데이터 유지',
      'react-hook-form과 Zod로 일정 추가·수정 폼을 검증하고 사용자가 오늘 이전 일정을 수정·삭제하지 못하도록 제한',
      'ErrorBoundary와 Suspense를 적용해 데이터 로딩·에러 상태를 선언적으로 처리',
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
    achievements: [
      '출퇴근, 외출, 복귀 등 다양한 상태값을 다루는 실시간 출결 관리 시스템 및 모달 인터랙션 구현',
      '휴가/공가 신청 폼의 복합 유효성 검사(Validation) 로직을 통해 데이터 무결성 확보',
      '프로필 이미지 미리보기 및 비동기 업로드 처리 등 실무적인 편의 기능 개발',
      '관리자 전용 대시보드(직원 관리, 부재 승인)와 사용자 페이지 간의 권한 분리 및 데이터 연동 최적화',
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
    achievements: [
      '압축 GLB 모델과 three-stdlib Water 셰이더, 그림자를 적용해 사무실 외부·내부 3D 씬을 구성하고 진입 여부에 따라 씬 전환',
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
