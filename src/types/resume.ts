import type { IconType } from 'react-icons';

export interface ResumeProfile {
  name: string;
  about: string;
  contacts: {
    label: string;
    href: string;
    icon: IconType;
  }[];
}

export interface ResumeItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  icon?: IconType;
  color?: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}
