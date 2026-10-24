export interface ProjectDetail {
  images?: {
    src: string;
    alt: string;
  }[];
  // 모바일 세로 화면은 'portrait'로 지정해 더 많은 열로 작게 보여준다 (기본값: 'landscape')
  imageLayout?: 'landscape' | 'portrait';
  // 썸네일 비율(CSS aspect-ratio 값, 예: '5 / 4'). 생략 시 landscape는 '16 / 10', portrait는 '9 / 20'
  imageAspect?: string;
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
