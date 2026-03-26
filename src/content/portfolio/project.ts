export const PROJECTS = [
  {
    title: 'JoyLog',
    period: '2026.02 ~ now',
    description: 'Next.js App Router 기반의 풀스택 개발 블로그',
    tags: ['Next.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Tailwind CSS'],
    achievements: [
      'Drizzle ORM을 활용하여 PostgreSQL 기반의 효율적인 관계형 데이터 모델(Post-Category-Tag) 설계',
      '서버 사이드 렌더링(SSR)과 정적 재생성(ISR)을 조합하여 빠른 포스트 로딩 및 사용자 경험 최적화',
      'Husky와 lint-staged를 도입하여 코드 커밋 전 자동 린트 검사 및 포맷팅 체계 구축',
      '동적 메타데이터 생성 및 사이트맵 자동화를 통한 검색 엔진 최적화(SEO) 반영',
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
      'Ky 기반 커스텀 Fetcher를 설계하여 공통 에러 핸들링 및 API 응답 데이터의 타입 추론 자동화',
      'Query String을 활용한 복합 필터링 시스템을 구현하여 페이지 새로고침 시에도 검색 조건 유지',
      'AWS S3 Pre-signed URL을 도입하여 클라이언트 직접 업로드 방식을 통한 서버 부하 절약',
      'Next.js의 Error 처리 방식을 활용하여 API 오류 시에도 서비스 중단 없는 Fallback UI 제공',
    ],
    links: {
      site: 'https://peekle-frontend-next-1v5h.vercel.app',
      github: 'https://github.com/Team-Peekle/peekle-frontend-next',
    },
  },
  {
    title: 'Betalab',
    period: '2025.11 ~ 2026.02',
    description: '베타 테스트 모집 및 테스터 선별을 지원하는 B2B/B2C 서비스',
    tags: ['Next.js', 'TypeScript', 'Recharts', 'Zustand', 'Tailwind CSS'],
    achievements: [
      'Recharts를 활용하여 테스트 진행 현황 및 응답 데이터를 시각화한 관리자 대시보드 구현',
      '조건부 참여 제어(Screener) 시스템을 설계하여 테스트 데이터의 신뢰도 및 타겟 적합성 확보',
      '다양한 질문 유형에 대응 가능한 확장성 있는 동적 피드백 수집 폼(Form) 엔진 개발',
      '복잡한 테스트 가이드를 구조화하여 전달하는 직관적인 상세 페이지 UI 설계',
    ],
    links: {
      site: 'https://betalab.co.kr',
      github: 'https://github.com/PROJECT-NEXUS-JS/betalab-frontend',
    },
  },
  {
    title: 'HaRu',
    period: '2025.07 ~ 2025.08',
    description: 'AI 회의 매니저 및 팀 운영 관리 플랫폼',
    tags: ['Next.js', 'TypeScript', 'WebSocket', 'Web Audio API', 'react-hook-form', 'Storybook'],
    achievements: [
      'WebSocket 프로토콜을 활용한 실시간 STT(Speech-to-Text) 스트리밍 클라이언트 구현',
      'Web Audio API를 통한 음성 데이터 청크 처리 및 브라우저 간 샘플링 속도 불일치 해결(Resampling)',
      '발화자 구분 기능을 적용한 실시간 채팅 대시보드 구현',
      '사용자 친화적인 기능이 포함된 React 기반 커스텀 마크다운 편집기 컴포넌트 개발',
      'Playwright를 활용한 E2E 테스트 시나리오 설계 및 사용자 흐름 기반 자동화 테스트 구현',
    ],
    links: {
      site: 'https://haru.it.kr',
      github: 'https://github.com/HaRu-Developers/haru-web',
    },
  },
  {
    title: 'Promeet',
    period: '2025.05 ~ 2025.06',
    description: '대학생들의 약속 조율 및 일정 관리를 돕는 웹 서비스',
    tags: ['React', 'JavaScript', 'Zustand', 'Styled-components', 'Vite'],
    achievements: [
      '약속, 사용자, 시간표 관련 API 스펙 정의 및 Zustand를 활용한 상태 동기화 구조 설계',
      'React Router를 사용한 페이지 라우팅 및 역할별(주최자/참여자) 접근 제어 로직 구현',
      '참여자 수집부터 최종 장소 확정까지 이어지는 약속 생성 프로세스 전반 설계 및 구현',
      'URL 기반 초대 시스템을 통한 간편한 참여자 유입 흐름 구축',
    ],
    links: {
      site: 'https://promeet-six.vercel.app',
      github: 'https://github.com/Global-Media-Web-Programming/Promeet',
    },
  },
  {
    title: 'Code News',
    period: '2025.04',
    description: 'HTML/CSS 학습을 위한 코드 편집기 기반 게임 및 교육 사이트',
    tags: ['HTML', 'CSS', 'JavaScript'],
    achievements: [
      '사용자가 작성한 코드를 실시간으로 렌더링하여 확인하는 마크업 파서 기반 편집기 구현',
      'URL 파라미터를 활용한 단계별 게임 진행 제어 및 비정상 접근 리디렉션 처리',
      '게임 플레이와 개념 학습을 연결하는 UX 흐름 설계 및 전체 UI 퍼블리싱 담당',
    ],
    links: {
      site: 'https://web-study-game.vercel.app/',
      github: 'https://github.com/Global-Media-Web-Programming/WebStudyGame',
    },
  },
  {
    title: 'Showtime',
    period: '2024.11 ~ 2024.12',
    description: '영화관 아르바이트생 스케줄 및 급여 관리 서비스',
    tags: ['React', 'TypeScript', 'Redux', 'Redux-Persist', 'Vite', 'Styled-components'],
    achievements: [
      'Redux-Persist를 연동하여 로컬 스토리지를 통한 전역 상태 자동 유지 및 스케줄 데이터 관리',
      'react-calendar를 커스터마이징하여 개인 근무 일정과 연동된 달력 인터페이스 구현',
      '디자인 토큰 설계를 통한 공통 UI 컴포넌트(버튼, 스피너 등) 및 디자인 시스템 기반 구축',
      '관리자/사용자 권한에 따른 스케줄 조회 및 급여 이의 신청 프로세스 개발',
    ],
    links: {
      site: 'https://showtime-drab.vercel.app',
      github: 'https://github.com/duwlsssss/SHOWTIME',
    },
  },
  {
    title: 'Dopaming',
    period: '2024.10 ~ 2024.11',
    description: '가상 학습 플랫폼을 위한 인트라넷 및 출결 관리 서비스',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vite'],
    achievements: [
      '출근/퇴근/외출 등 실시간 상태 기록을 위한 출결 관리 시스템 및 모달 인터랙션 구현',
      '휴가 및 공가 신청 폼의 유효성 검사 로직 개발 및 백엔드 연동을 통한 내역 조회 기능 구현',
      '프로필 사진 업로드 미리보기 및 사용자 정보 수정 등 마이페이지 전반 기능 개발',
      '공지사항 및 수강생 목록 조회를 위한 시맨틱 마크업 및 스타일링 수행',
    ],
    links: {
      github: 'https://github.com/duwlsssss/DOPAMING',
    },
  },
];
