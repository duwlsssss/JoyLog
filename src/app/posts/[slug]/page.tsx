import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { incrementViews } from '@libs/actions';
import { getPostBySlug } from '@libs/posts';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // 조회수 증가는 비동기로 처리 - 렌더링 차단 x
  incrementViews(slug).catch((err) => console.error(err));

  return (
    <article className="prose lg:prose-xl mx-auto py-10">
      <h1 className="text-gray-900">{post.metadata.title}</h1>
      <p className="text-gray-500">{post.metadata.date}</p>
      <div className="flex gap-x-1">
        {post.metadata.tags.map((tag: string) => (
          <div className="rounded-xl bg-gray-100 px-2 py-1 text-gray-900" key={tag}>
            {tag}
          </div>
        ))}
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
    </article>
  );
}
