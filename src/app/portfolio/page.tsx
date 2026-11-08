import type { Metadata } from 'next';

import ProfileHeader from '@components/portfolio/ProfileHeader';
import ProjectCard from '@components/portfolio/ProjectCard.client';

import { SITE_URL } from '@constants/metadata';

import { PROJECTS } from '@/content/portfolio/project';
import { PROFILE } from '@/content/portfolio/resume';

export const metadata: Metadata = {
  title: 'Joy의 포트폴리오',
  description: '프론트엔드 개발자 김여진의 프로젝트와 작업물을 소개합니다.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Joy의 포트폴리오',
    description: '프론트엔드 개발자 김여진의 프로젝트와 작업물을 소개합니다.',
    url: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <ProfileHeader profile={PROFILE} />

      <section className="pt-10">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <div className="grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
