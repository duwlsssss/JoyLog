import type { ProjectCase, ProjectDetail } from '@/types/project';

export const FINANCE_SIMULATER_CASES: ProjectCase[] = [
  {
    title:
      '스펙 기반 계약 테스트로 모든 API 경로를 openapi.yaml과 1:1로 대조하고, 항상 422로 거부되던 대출 견적 조회 버그 발견',
    problem:
      'openapi.yaml을 API 스펙 단일 출처로 정했지만, 스펙과 실제 응답이 어긋나도 알려주는 장치가 없었음. 응답 형태를 확인하는 테스트는 기댓값이 하드코딩돼 있어 스펙이 바뀌면 따라가지 못함',
    cause:
      '서비스 단위 테스트가 서비스 함수를 직접 호출해 HTTP 경로(쿼리 파싱·응답 직렬화)를 거치지 않았고, auth·loans·stocks 17개 경로는 스펙에 문서화조차 안 돼 있었음',
    decision:
      '기댓값을 테스트에 적는 대신 openapi.yaml을 직접 파싱해 jsonschema로 대조하기로 함. 기존 TestClient + dependency_overrides 목 패턴을 재사용하면 DB·JWT 없이 유닛 테스트로 돌릴 수 있어 CI 부담이 적음',
    action:
      '스펙↔앱 라우트 양방향 대조, 상태 코드·응답 스키마 검증, 공통 응답 $ref 해석을 구현. 미문서화 경로는 허용 목록으로 관리하다 스펙 문서화와 함께 비우고, CI에서 spec이 없으면 skip이 아니라 실패하도록 설정',
    result:
      '허용 목록 없이 앱의 모든 경로가 스펙과 1:1로 대조됨. 확장 과정에서 쿼리 문자열 "12"가 Literal[3, 6, 12]와 매칭되지 않아 대출 견적 조회가 항상 422로 거부되던 버그를 발견해 수정. 계약 테스트가 놓친 datetime 타임존 누락(브라우저에서 로컬 시간으로 해석될 수 있음)은 원인(FormatChecker 미동작, DB와 다른 픽스처)을 찾아 테스트에 반영',
  },
  {
    title: '동시 대출 신청 시 500이 나던 레이스를 MySQL 동시성 테스트로 재현하고 409로 변환',
    problem:
      '같은 사용자가 거의 동시에 대출을 두 번 신청하면, 레이스에서 진 요청이 의미 있는 409 대신 처리되지 않은 500을 받음',
    cause:
      '활성 대출 존재 여부 확인과 생성 사이에 락이 없는 check-then-act 구조. DB unique 제약(uq_loans_one_active_per_user)이 중복 생성은 막았지만 이때 나는 IntegrityError를 어디서도 잡지 않음',
    decision:
      '데이터 무결성은 이미 DB 제약이 보장하므로 락을 추가하지 않고 제약 위반을 도메인 에러로 변환하기로 함. 다른 IntegrityError까지 409로 가려지지 않도록 제약 이름으로 범위를 한정',
    action:
      '실제로 커밋되는 독립 세션과 barrier 기반 동시 실행 유틸을 만들어 MySQL 통합 테스트에서 레이스를 재현하고, 서비스 레이어에서 해당 제약 위반만 LOAN_ALREADY_ACTIVE 409로 변환',
    result:
      '동시 신청 시 활성 대출은 1건만 생기고 나머지 요청은 409를 받는 것을 동시성 테스트로 검증. 같은 유틸로 턴 진행의 row lock이 lost update를 막는지도 검증',
  },
];

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
