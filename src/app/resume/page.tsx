import type { Metadata } from 'next';
import Link from 'next/link';

import ProfileHeader from '@components/portfolio/ProfileHeader';
import ResumeItemList from '@components/portfolio/ResumeItemList';
import ResumeSection from '@components/portfolio/ResumeSection';
import SkillList from '@components/portfolio/SkillList';

import { SITE_URL } from '@constants/metadata';
import { ROUTES } from '@constants/routes';

import {
  ACTIVITIES,
  AWARDS,
  CERTIFICATIONS,
  EDUCATION,
  PROFILE,
  SKILLS,
} from '@/content/portfolio/resume';

export const metadata: Metadata = {
  title: 'Joy의 이력서',
  description: '프론트엔드 개발자 김여진의 학력, 기술, 활동, 수상 이력입니다.',
  alternates: { canonical: ROUTES.RESUME },
  openGraph: {
    title: 'Joy의 이력서',
    description: '프론트엔드 개발자 김여진의 학력, 기술, 활동, 수상 이력입니다.',
    url: `${SITE_URL}${ROUTES.RESUME}`,
  },
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <ProfileHeader profile={PROFILE} />

      <Link
        href={ROUTES.PORTFOLIO}
        className="text-muted-foreground hover:text-primary mt-6 inline-block text-sm font-semibold transition-colors"
      >
        프로젝트는 포트폴리오에서 볼 수 있어요 →
      </Link>

      <ResumeSection title="Education">
        <ResumeItemList items={EDUCATION} />
      </ResumeSection>

      <ResumeSection title="Skills">
        <SkillList groups={SKILLS} />
      </ResumeSection>

      <ResumeSection title="Activities">
        <ResumeItemList items={ACTIVITIES} />
      </ResumeSection>

      <ResumeSection title="Awards">
        <ResumeItemList items={AWARDS} />
      </ResumeSection>

      <ResumeSection title="Certifications">
        <ResumeItemList items={CERTIFICATIONS} />
      </ResumeSection>
    </main>
  );
}
