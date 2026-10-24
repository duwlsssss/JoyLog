export interface ProjectDetail {
  images?: {
    src: string;
    alt: string;
  }[];
  techStack?: {
    name: string;
    usedIn: string;
  }[];
}

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
  detail?: ProjectDetail;
}
