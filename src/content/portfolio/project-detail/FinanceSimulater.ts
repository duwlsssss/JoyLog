import type { ProjectDetail } from '@/types/project';

export const FINANCE_SIMULATER_DETAIL: ProjectDetail = {
  techStack: [
    {
      name: 'FastAPI',
      usedIn: '도메인별 router·schema·service·repository 레이어 구성, 예외 핸들러 분리',
    },
    {
      name: 'SQLAlchemy · Alembic',
      usedIn:
        'MySQL 8.0 연동, SELECT … FOR UPDATE 잠금, unique 제약 기반 활성 대출 1건 보장, 마이그레이션',
    },
    {
      name: 'Redis',
      usedIn: 'refresh token과 이메일 인증번호를 원문 대신 해시로 저장',
    },
    {
      name: 'pytest',
      usedIn:
        '단위 테스트, openapi.yaml 기반 계약 테스트, MySQL 통합·동시성 테스트, 24턴 E2E 테스트',
    },
    {
      name: 'Git Submodule',
      usedIn: 'spec 레포의 openapi.yaml을 서브모듈로 연결해 API 스펙 단일 출처(SSOT)로 사용',
    },
    {
      name: 'GitHub Actions',
      usedIn:
        'PR 테스트(MySQL·Redis 서비스 컨테이너), spec 서브모듈 포인터 검사, Swagger 문서 GitHub Pages 배포',
    },
    {
      name: 'Claude Code Action',
      usedIn:
        'PR 자동 코드 리뷰(인라인 코멘트·요약), @claude 호출 응답, 이슈 라벨 기반 구현 전략 정리',
    },
  ],
};
