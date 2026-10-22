import { FaSlack } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import {
  SiCss,
  SiDrizzle,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLefthook,
  SiNextdotjs,
  SiNotion,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVelog,
  SiVercel,
} from 'react-icons/si';

import type { ResumeItem, ResumeProfile, SkillGroup } from '@/types/resume';

export const PROFILE: ResumeProfile = {
  name: '김여진',
  role: '프론트엔드 개발자',
  about: '사용자 경험을 데이터와 안정성으로 풀어내는 프론트엔드 개발자, 김여진입니다.',
  contacts: [
    { label: 'Email', href: 'mailto:rladuwls0814@gmail.com', icon: MdOutlineEmail },
    { label: 'GitHub', href: 'https://github.com/duwlsssss', icon: SiGithub },
    { label: 'Velog', href: 'https://velog.io/@kimlj0814', icon: SiVelog },
  ],
};

export const EDUCATION: ResumeItem[] = [
  {
    title: '숭실대학교',
    organization: '글로벌미디어학부',
    period: '2021.03 ~ 2026.08',
    description: '학점 4.12 / 4.5',
  },
];

// color를 생략한 아이콘은 글자색(currentColor)을 따른다 — 검은색 로고가 다크모드에서 묻히는 것을 방지
export const SKILLS: SkillGroup[] = [
  {
    category: 'Language',
    skills: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js (App Router)', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Styled-components', icon: SiStyledcomponents, color: '#DB7093' },
    ],
  },
  {
    category: 'State / Network',
    skills: [
      { name: 'Zustand' },
      { name: 'Redux (Thunk)', icon: SiRedux, color: '#764ABC' },
      { name: 'Ky' },
    ],
  },
  {
    category: 'Backend / DB',
    skills: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Drizzle ORM', icon: SiDrizzle },
      { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
      { name: 'Firebase Realtime Database', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    category: 'Test / Tooling',
    skills: [
      { name: 'Playwright' },
      { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
      { name: 'Lefthook', icon: SiLefthook, color: '#FF1E1E' },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
  {
    category: 'Collaboration',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Notion', icon: SiNotion },
      { name: 'Slack', icon: FaSlack },
    ],
  },
];

export const AWARDS: ResumeItem[] = [
  {
    title: '슈퍼스타 창업경진대회 최우수상',
    organization: '숭실대학교',
    period: '2025.12',
    description: '베타 테스트 연결 웹서비스(Betalab)로 수상',
  },
  {
    title: 'UMC 8기 데모데이 장려상',
    organization: 'Neordinary',
    period: '2025.08',
    description: 'AI 기반 팀관리 웹서비스(HaRu)로 수상',
  },
  {
    title: '2학년 1학기 차석, 성적 우수 장학금',
    organization: '숭실대학교',
    period: '2022.09',
  },
];

export const CERTIFICATIONS: ResumeItem[] = [
  { title: '빅데이터분석기사 필기', organization: '한국데이터산업진흥원', period: '2026.09' },
  { title: '정보처리기사', organization: '한국산업인력공단', period: '2026.09' },
  { title: 'TOEIC Speaking (IH)', organization: 'YBM', period: '2026.03' },
  { title: 'SQLD', organization: '한국데이터산업진흥원', period: '2024.12' },
  { title: 'GTQ 1급', organization: '한국생산성본부', period: '2023.02' },
];
