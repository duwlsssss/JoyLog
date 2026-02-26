import type { Metadata } from 'next';

import { SITE_URL } from '@constants/metadata';

export const metadata: Metadata = {
  title: 'Joy의 포트폴리오',
  description: '프론트엔드 개발자 김여진의 프로젝트와 작업물을 소개합니다.',
  openGraph: {
    title: 'Joy의 포트폴리오',
    description: '프론트엔드 개발자 김여진의 프로젝트와 작업물을 소개합니다.',
    url: SITE_URL,
  },
};

export default function PortfolioPage() {
  return <main className="mx-auto max-w-4xl py-10">portfolio</main>;
}
