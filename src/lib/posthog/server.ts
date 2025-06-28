import { PostHog } from 'posthog-node';

// 서버 컴포넌트, 서버 액션에서 사용
console.log(process.env.POSTHOG_API_KEY);

export const posthogServerClient = new PostHog(process.env.POSTHOG_API_KEY!, {
  host: 'https://us.i.posthog.com',
  flushAt: 1,
  flushInterval: 0,
});
