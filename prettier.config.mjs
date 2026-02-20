const config = {
  // 들여쓰기 너비 (2칸)
  tabWidth: 2,
  // 들여쓰기 시 스페이스 사용 (true: 탭, false: 스페이스)
  useTabs: false,
  // 줄 끝에 세미콜론 사용
  semi: true,
  // 자바스크립트(타입스크립트)에서 싱글 쿼트(') 사용
  singleQuote: true,
  // JSX/HTML 속성에서는 더블 쿼트(") 사용
  jsxSingleQuote: false,
  // 마지막 요소 뒤에 항상 쉼표(trailing comma) 추가
  trailingComma: 'all',
  // 한 줄 최대 길이(가독성을 위한 줄바꿈 기준)
  printWidth: 100,
  // 객체 리터럴에서 중괄호 사이에 띄어쓰기 허용 여부
  bracketSpacing: true,
  // 화살표 함수의 매개변수 괄호 사용 방식 ("always": 항상 괄호 사용)
  arrowParens: 'always',
  // 줄 끝 형태 (운영체제 따라 자동: 'auto', 강제 LF: 'lf')
  endOfLine: 'auto',

  // import 정렬 규칙(순서 지정)
  // (팀 컨벤션과 프로젝트 구조를 최대한 상세하게 반영)
  importOrder: [
    // 기본 프레임워크
    '^(react/(.*)$)|^(react$)', // React
    '^(next/(.*)$)|^(next$)', // Next.js

    // 외부 라이브러리
    '^@tanstack/react-query$',
    '^lucide-react$',
    '<THIRD_PARTY_MODULES>',

    // 전역 공유 모듈
    '^@db/(.*)$',
    '^@schemas/(.*)$',
    '^@libs/(.*)$',
    '^@hooks/(.*)$',
    '^@components/(.*)$',
    '^@constants/(.*)$',
    '^@/types/(.*)$',
    '^@utils/(.*)$',
    '^@stores/(.*)$',
    '^@assets/(.*)$',
    '^@/(.*)$', // 나머지 전역 공유 모듈

    // 도메인 전용 모듈
    '^\\./db/(.*)$',
    '^\\./_schemas/(.*)$',
    '^\\./_libs/(.*)$',
    '^\\./_hooks/(.*)$',
    '^\\./_components/(.*)$',
    '^\\./_constants/(.*)$',
    '^\\./_types/(.*)$',
    '^\\./_utils/(.*)$',
    '^\\./_stores/(.*)$',
    '^\\./_assets/(.*)$',
    '^\\./_/(.*)$', // 나머지 도메인 전용 모듈

    // 일반 상대 경로 (부모 폴더나 형제 파일)
    '^\\.\\./',
    '^\\./',

    // Style 파일
    '^.+\\.css$',
  ],

  // import 그룹 구분(빈 줄 추가)
  importOrderSeparation: true,
  // import 객체/함수 등 specifier 알파벳 순 정렬
  importOrderSortSpecifiers: true,

  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};

export default config;
