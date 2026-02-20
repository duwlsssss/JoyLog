import Link from 'next/link';

import { getAllPosts } from '@libs/posts';

import Header from '@components/layout/header/Header';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-7xl px-5 pb-20">
      <Header />
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-t border-b py-4">
            <Link href={`/posts/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-blue-500">
                {post.metadata.title}
              </h2>
              <div className="mt-2 flex gap-4 text-sm text-gray-500">
                <span>{post.metadata.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
