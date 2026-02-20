export const ROUTES = {
  ROOT: '/',
  POST: {
    DETAIL: (id: string) => `/${id}`,
  },
  PORTFOLIO: '/portfolio',
  NOT_FOUND: '/not-found', // 실제로 없는 주소 - 404 페이지 수동으로 띄우기 위해
} as const;
