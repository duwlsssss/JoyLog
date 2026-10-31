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

export interface ProjectCase {
  // 접힌 상태에서 bullet로 보이는 한 줄 — 문제와 결과가 함께 드러나게 쓴다
  title: string;
  problem: string;
  cause: string;
  decision: string;
  action: string;
  result: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  // 대표 문제 해결 사례: Key Solutions 맨 위에 펼칠 수 있는 bullet로 보인다
  cases?: ProjectCase[];
  achievements: string[];
  links: {
    site?: string;
    github?: string;
    docs?: string;
    video?: string;
  };
  detail?: ProjectDetail;
}
