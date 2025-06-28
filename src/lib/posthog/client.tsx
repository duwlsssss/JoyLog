'use client';

import { ReactNode, useEffect } from 'react';
import { Suspense } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';

const PostHogProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY!, {
      api_host: 'https://us.i.posthog.com',
      capture_pageview: false, // 수동 추적
      capture_pageleave: true, // 사용자가 페이지를 떠나는 이벤트 추적
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PageView />
      </Suspense>
      {children}
    </PHProvider>
  );
};

function PageView() {
  const posthog = usePostHog();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!posthog) return;
    let url = window.origin + pathname;
    const search = searchParams.toString();
    if (search) url += `?${search}`;
    // 라우팅 변화가 있을 때 PostHog에 페이지뷰를 보냄
    posthog.capture('$pageview', { $current_url: url });
  }, [pathname, searchParams, posthog]);

  return null;
}

export default PostHogProvider;
