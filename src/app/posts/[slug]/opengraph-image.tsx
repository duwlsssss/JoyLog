import { ImageResponse } from 'next/og';

import { getPostBySlug } from '@libs/posts';

export const contentType = 'image/png';

export const size = {
  width: 1200,
  height: 630,
};

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '24px',
        background: '#0A0A0A',
        color: '#FFFFFF',
        fontFamily: 'roboto mono',
      }}
    >
      {/* 상단 */}
      <div
        style={{
          fontSize: 28,
          opacity: 0.6,
          fontWeight: 500,
        }}
      >
        JoyLog
      </div>

      {/* 중앙 제목 */}

      <div
        style={{
          wordBreak: 'keep-all',
          fontSize: 64,
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}
      >
        {post.metadata.title}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
