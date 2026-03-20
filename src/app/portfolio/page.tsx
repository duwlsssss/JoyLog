import type { Metadata } from 'next';

import ProjectCard from '@components/portfolio/ProjectCard.client';

import { SITE_URL } from '@constants/metadata';

import { PROJECTS } from '@/content/portfolio/project';

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
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight lg:text-5xl">Portfolio</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          프론트엔드 개발자 Joy(김여진)의 프로젝트입니다.
        </p>
      </header>

      <div className="grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
