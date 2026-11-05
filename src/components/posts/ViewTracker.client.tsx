'use client';

import { useEffect } from 'react';

import { recordView } from '@libs/views';

// 화면에 그리는 것 없이, 글이 브라우저에 처음 뜰 때 조회수 기록만 요청한다 (봇·prefetch는 JS를 실행하지 않아 제외됨)
export default function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    recordView(slug).catch((err) => console.error(err));
  }, [slug]);

  return null;
}
