export const ROUTES = {
  ROOT: '/',
  POSTS: {
    DETAIL: (slug: string) => `/posts/${slug}`,
    TAG: (tag: string) => `/?tag=${tag}`,
  },
  PORTFOLIO: '/portfolio',
  NOT_FOUND: '/not-found', // 실제로 없는 주소 - 404 페이지 수동으로 띄우기 위해
} as const;
