import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts', // 스키마 파일 경로
  out: './drizzle', // 마이그레이션 파일이 저장될 폴더
  dialect: 'postgresql', // 사용 중인 DB 종류
  dbCredentials: {
    url: process.env.DATABASE_URL!, // .env에 적은 주소 사용
  },
});
