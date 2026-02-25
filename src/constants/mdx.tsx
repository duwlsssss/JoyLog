import type { ReactElement, ReactNode } from 'react';
import { Children, isValidElement } from 'react';

import type { Element } from 'hast';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

import CopyButton from '@components/posts/CopyButton.client';
import ZoomImage from '@components/posts/ZoomImage.client';

import { VideoPlayer } from '../components/posts/VideoPlayer';

// MDX에서 넘어오는 children 노드들의 가능한 타입들
type MDXChildNode = ReactNode | ReactElement<{ children?: MDXChildNode }>;

/**
 * 재귀적으로 텍스트를 추출하는 함수
 */
const extractText = (node: MDXChildNode): string => {
  // 문자열이나 숫자인 경우 바로 반환
  if (typeof node === 'string' || typeof node === 'number') {
    return node.toString();
  }

  // 배열인 경우 각 요소를 재귀적으로 합침
  if (Array.isArray(node)) {
    return node.map(extractText).join('');
  }

  // 리액트 엘리먼트인 경우 props.children 탐색
  // isValidElement가 'node.props' is of type 'unknown' 에러를 해결해줍니다.
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    if (props.children) {
      return extractText(props.children);
    }
  }

  return '';
};

export const mdxComponents: MDXRemoteProps['components'] = {
  // 이미지, 비디오
  img: ({ src, alt, caption }) => {
    if (!src) return null;
    return <ZoomImage src={src} alt={alt} caption={caption} />;
  },
  VideoPlayer,
  // 제목 태그들에 스타일 입히기
  h1: ({ children }) => (
    <h1 className="mt-12 mb-8 text-4xl font-extrabold tracking-tight">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 text-3xl font-bold tracking-tight">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight">{children}</h3>
  ),
  p: ({ children }) => {
    // 자식 요소 중에 figure가 있는지 확인
    const hasBlockElement = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === 'figure',
    );

    if (hasBlockElement) {
      return <div className="my-6">{children}</div>;
    }

    return <p className="text-lg leading-7 whitespace-pre-line not-first:mt-6">{children}</p>;
  },
  br: () => <div className="h-4" />,
  // 코드
  code: ({ children, ...props }) => {
    // rehype-pretty-code가 적용된 코드 블록 내부에 있는 code 태그인지 확인
    const isInline = !props['data-language'];
    return (
      <code
        {...props}
        className={
          isInline &&
          'relative rounded bg-gray-200 px-[0.3rem] py-[0.2rem] font-mono font-semibold dark:bg-zinc-700/70 dark:text-zinc-100'
        }
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => {
    // 코드 텍스트 추출
    const codeText = extractText(children);

    return (
      <div className="group relative mt-6 mb-4 overflow-hidden rounded-lg border border-white/10">
        {/* 상단바: 언어와 복사 버튼 */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
          <span className="font-mono text-xs text-white/70 uppercase">
            {props['data-language'] ?? 'code'}
          </span>
          <CopyButton text={codeText} />
        </div>

        {/* 실제 코드 영역 */}
        <pre {...props} className="text-m overflow-x-auto p-4 leading-6">
          {children}
        </pre>
      </div>
    );
  },
  // 리스트
  ul: ({ children }) => (
    <ul className="marker:text-primary my-4 ml-6 list-disc space-y-1 [&_ol]:my-1 [&_ol]:ml-4 [&_ul]:my-1 [&_ul]:ml-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="marker:text-primary my-4 ml-6 list-decimal space-y-1 marker:font-semibold [&_ol]:my-1 [&_ol]:ml-4 [&_ul]:my-1 [&_ul]:ml-4">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="pl-1 text-lg leading-7">
      <div className="[&_p]:mt-0">{children}</div>
    </li>
  ),
  // 링크
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="decoration-primary/30 hover:text-primary hover:decoration-primary underline underline-offset-4 transition-colors"
    >
      {children}
    </a>
  ),
};

export const mdxOptions: MDXRemoteProps['options'] = {
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
};
