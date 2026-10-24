import type { ProjectDetail } from '@/types/project';

export const HWP_REPORT_TIDY_DETAIL: ProjectDetail = {
  imageAspect: '5 / 2',
  images: [
    { src: '/portfolio/hwp-report-tidy/before.webp', alt: '정리 전 - 줄 끝에서 잘린 단어' },
    { src: '/portfolio/hwp-report-tidy/after.webp', alt: '정리 후 - 자간 조정으로 붙인 단어' },
    {
      src: '/portfolio/hwp-report-tidy/table.webp',
      alt: '--check 미리 보기 - 잘린 단어 강조와 조정 결과',
    },
    { src: '/portfolio/hwp-report-tidy/check.webp', alt: '오탈자·스타일 검사 결과' },
    { src: '/portfolio/hwp-report-tidy/csv.webp', alt: '직접 확인할 항목을 담은 CSV 리포트' },
  ],
  techStack: [
    {
      name: 'pyhwpx',
      usedIn: '한글 COM 자동화로 자간 조정, 임시 저장, 되돌리기(Undo), 형광펜 표시',
    },
    {
      name: 'HWPX(XML) 파싱',
      usedIn: 'linesegarray의 줄 시작 위치를 읽어 한글이 화면에 그린 줄 나눔 판별',
    },
    {
      name: 'Claude API',
      usedIn: '(선택 기능) 자간으로 해결되지 않은 문단에 대해 문장 줄이기 수정안 2개 제안',
    },
  ],
};
