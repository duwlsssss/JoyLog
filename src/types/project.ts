export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  achievements: string[];
  links: {
    site?: string;
    github?: string;
  };
}
