import { Suspense } from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import type { Element } from 'hast';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

import { incrementViews } from '@libs/actions';
import { getAdjacentPosts, getPostBySlug } from '@libs/posts';

import PostNavigation from '@components/posts/PostNavigation';
import ReadingProgressBar from '@components/posts/ReadingProgressBar.client';
import ViewCounter from '@components/posts/ViewCounter';

import { mdxComponents } from '@constants/mdx';
import { SITE_URL } from '@constants/metadata';

import { FaqItem } from '@/types/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: `${post.metadata.title} | JoyLog`,
    description: post.metadata.description ?? `${post.metadata.title} 포스트 읽기`,
    keywords: post.metadata.tags,
    authors: [{ name: 'Joy', url: SITE_URL }],
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description ?? `${post.metadata.title} 포스트 읽기`,
      type: 'article',
      publishedTime: post.metadata.date,
      authors: ['Joy'],
      url: `${SITE_URL}/posts/${slug}`,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const { prev, next } = await getAdjacentPosts(slug);

  // 조회수 증가는 비동기로 처리 - 렌더링 차단 x
  incrementViews(slug).catch((err) => console.error(err));

  const articleNode = {
    '@type': 'TechArticle',
    '@id': `${SITE_URL}/posts/${slug}#article`,
    headline: post.metadata.title,
    description: post.metadata.description,
    datePublished: post.metadata.date,
    dateModified: post.metadata.date,
    author: {
      '@type': 'Person',
      name: 'Joy',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Joy',
      url: SITE_URL,
    },
    url: `${SITE_URL}/posts/${slug}`,
    mainEntityOfPage: `${SITE_URL}/posts/${slug}`,
    keywords: post.metadata.tags.join(', '),
    inLanguage: 'ko-KR',
    timeRequired: `PT${post.metadata.readingTime}M`,
  };

  const graph = post.metadata.faq?.length
    ? [
        articleNode,
        {
          '@type': 'FAQPage',
          '@id': `${SITE_URL}/posts/${slug}#faq`,
          mainEntity: post.metadata.faq.map((item: FaqItem) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        },
      ]
    : [articleNode];

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ReadingProgressBar />
      {/* 상단 정보 */}
      <header className="not-prose mb-10 flex flex-col gap-4 border-b pb-10">
        <h1 className="text-2xl font-extrabold tracking-tight">{post.metadata.title}</h1>
        <div className="flex items-center gap-3 text-gray-500">
          <time>{post.metadata.date}</time>
          <span>•</span>
          <Suspense fallback={<span>조회수 로드 중... </span>}>
            <ViewCounter slug={slug} />
          </Suspense>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.metadata.tags.map((tag: string) => (
            <Link
              key={tag}
              href={`/?tag=${tag}`}
              className={
                'bg-secondary hover:bg-secondary/80 rounded-full px-4 py-1.5 text-sm font-medium transition-colors'
              }
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>
      {/* 본문 */}
      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: 'dark-plus',
                  // 빈 줄은 공백으로 유지
                  onVisitLine(node: Element) {
                    if (node.children.length === 0) {
                      node.children = [{ type: 'text', value: ' ' }];
                    }
                  },
                },
              ],
            ],
          },
        }}
      />
      {/* 하단 네비게이션 */}
      <footer className="not-prose mt-20">
        <PostNavigation prev={prev} next={next} />
      </footer>
    </article>
  );
}
