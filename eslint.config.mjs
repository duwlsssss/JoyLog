import eslint from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

const eslintConfig = defineConfig([
  globalIgnores([
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
  ]),

  // Next.js 공식 플랫 설정 적용
  ...nextVitals,
  ...nextTs,

  eslint.configs.recommended,
  // TypeScript ESLint의 권장 설정
  ...tseslint.configs.recommended,

  // 커스텀 규칙
  {
    // CommonJS 파일에 대한 특별 설정
    files: ['scripts/**/*.cjs', '*.cjs'],
    languageOptions: {
      globals: {
        // Node.js 전용 전역 변수들을 '읽기 전용'으로 허용
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      // 스크립트 파일에서는 require 사용이 필수적이므로 관련 경고 끄기
      '@typescript-eslint/no-require-imports': 'off',
      'no-console': 'off', // 스크립트는 터미널 출력이 필요하므로 허용
    },
  },
  // TypeScript 파일에 대한 설정
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // 사용하지 않는 변수 경고 (_, _로 시작하는 변수는 제외)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  // React와 JSX 파일에 대한 설정
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
    },
    settings: {
      // React 버전 자동 감지
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      // React import 구문 필수 해제
      'react/react-in-jsx-scope': 'off',
      // prop-types 검사 비활성화
      'react/prop-types': 'off',
    },
  },
  prettierConfig,
]);

export default eslintConfig;
