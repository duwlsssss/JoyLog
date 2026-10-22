export const PROJECTS = [
  {
    title: 'JoyLog',
    period: '2026.02 ~ now',
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
  },
  {
    title: 'Peekle',
    period: '2025.08 ~ now',
    description: '시니어 친화적 UX를 적용한 이벤트 큐레이션 및 커뮤니티 서비스',
    tags: ['Next.js', 'TypeScript', 'Ky', 'Zustand', 'Tailwind CSS'],
    achievements: [
      'Ky 라이브러리를 활용해 공통 에러 핸들링, 타임아웃, 베이스 URL 관리가 가능한 커스텀 인스턴스를 구축하여 네트워크 계층의 재사용성 확보',
      'TypeScript 기반의 API 응답 데이터 타입 추론(Inference) 자동화를 통해 런타임 에러를 방지하고 개발 생산성 향상',
      '카테고리, 날짜, 지역 등 다중 조건을 조합한 필터링 로직을 구현하고, Query String을 활용해 새로고침 시에도 검색 상태가 유지되도록 설계',
    ],
    links: {
      github: 'https://github.com/Team-Peekle/peekle-frontend-next',
    },
  },
  {
    title: 'Betalab',
    period: '2025.11 ~ 2026.02',
    description: '베타 테스터 모집부터 리워드 증정까지 전 과정을 관리하는 올인원 서비스',
    tags: ['Next.js', 'TypeScript', 'Recharts', 'Zustand', 'Tailwind CSS', 'Gemini API'],
    achievements: [
      '관리자 페이지 내 각종 테스트 통계 데이터를 차트 및 그래프 라이브러리를 활용해 시각화함으로써 테스트 결과의 직관적 분석 지원',
      '테스트 성격에 따른 맞춤형 피드백 수집을 위해 확장성 있는 폼(Form) 컴포넌트 설계 및 데이터 수집 로직 구현',
      '특정 조건을 충족하는 테스터만 참여할 수 있도록 필터링하는 스크리너 오버레이 시스템을 구축하여 테스트 데이터의 신뢰도 확보',
      'Google Gemini API(JSON Schema 기반 구조화 응답)로 모집자가 입력한 참여 조건을 예/아니오 스크리너 질문으로 자동 생성하고, 응답 검증 실패·API 오류 시 원본 조건으로 대체하는 fallback 처리',
      '복잡한 테스트 요강을 구조화하여 전달하는 상세 페이지 개발 및 사용자 여정을 고려한 인터페이스 최적화',
    ],
    links: {
      github: 'https://github.com/PROJECT-NEXUS-JS/betalab-frontend',
    },
  },
  {
    title: 'HaRu',
    period: '2025.07 ~ 2025.08',
    description: '소규모 팀 운영 서포팅 서비스',
    tags: ['Next.js', 'TypeScript', 'WebSocket', 'Web Audio API', 'react-hook-form', 'Storybook'],
    achievements: [
      'Web Audio API 및 WebSocket을 활용한 실시간 STT(Speech-to-Text) 스트리밍 클라이언트 구축',
      '브라우저별 샘플링 속도 불일치 해결을 위한 실시간 리샘플링(Resampling) 로직 설계 및 데이터 일관성 확보',
      '화자 분리, 핵심 요약, 대화형 의사결정 지원 등 복잡한 비즈니스 로직의 프론트엔드 인터페이스 구현',
      '사용자 경험을 극대화한 Custom 마크다운 편집기 컴포넌트 개발 및 데이터 정교화',
      '이벤트 필터링 엔진 및 팀 분위기 대시보드 시각화를 통해 데이터 활용 능력 증명',
      'Playwright를 활용한 E2E 테스트 시나리오 설계 및 사용자 흐름 기반 자동화 테스트 구현',
    ],
    links: {
      github: 'https://github.com/HaRu-Developers/haru-web',
    },
  },
  {
    title: 'Promeet',
    period: '2025.05 ~ 2025.06',
    description: '약속 잡기 및 스케줄링 서비스',
    tags: ['React', 'JavaScript', 'Zustand', 'Styled-components', 'Vite'],
    achievements: [
      'Zustand를 활용하여 약속 생성부터 확정까지 이어지는 복잡한 다단계 상태 관리 구조 설계',
      '서비스 특성을 고려한 URL 기반 초대 시스템 및 역할별(주최자/참여자) 접근 제어(Routing) 로직 구현',
      '약속, 사용자, 시간표 데이터를 포괄하는 API 스펙 직접 정의 및 효율적인 비동기 통신 처리',
      '사용자 입력부터 최종 장소 확정까지의 전체 비즈니스 플로우를 설계하며 UX 완성도 제고',
    ],
    links: {
      site: 'https://promeet-six.vercel.app',
      github: 'https://github.com/Global-Media-Web-Programming/Promeet',
    },
  },
  {
    title: 'Code News',
    period: '2025.04 ~ 2025.05',
    description: '웹 기초 학습 및 게임형 교육 서비스',
    tags: ['HTML', 'CSS', 'JavaScript'],
    achievements: [
      '사용자가 입력한 코드를 실시간으로 해석하여 화면에 반영하는 마크업 파서 기반 편집기 구현',
      '게임 단계별 진행 상태를 URL과 연동하여 보호하는 Protected Route 로직 적용',
      '학습 흐름을 끊지 않는 정답 판별 시스템 및 게임 종료 후 심화 학습으로 이어지는 UX flow 설계',
      'HTML/CSS/JS만을 활용하여 외부 라이브러리 의존도를 낮춘 순수 웹 기술 구현',
    ],
    links: {
      site: 'https://web-study-game.vercel.app/',
      github: 'https://github.com/Global-Media-Web-Programming/WebStudyGame',
    },
  },
  {
    title: 'Showtime',
    period: '2024.11 ~ 2024.12',
    description: '사내 직원 관리 서비스',
    tags: ['React', 'TypeScript', 'Redux', 'Redux Thunk', 'Supabase', 'Vite', 'Styled-components'],
    achievements: [
      'Redux 기반 상태 관리 시스템 구현 및 Redux Thunk로 서버 비동기 통신 처리',
      '초기 Firebase Realtime Database 사용, 이후 Supabase(PostgreSQL)로 마이그레이션 주도',
      '반복 일정(반복 주기, 종료일, 수정·삭제 옵션) 기능 로직 설계',
      '기술 선택 배경과 구조 변경 과정을 발표하여 멘토 최고 점수 획득 및 타 팀으로부터 구조 공유 요청',
    ],
    links: {
      site: 'https://showtime-drab.vercel.app',
      github: 'https://github.com/duwlsssss/SHOWTIME',
    },
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
];
