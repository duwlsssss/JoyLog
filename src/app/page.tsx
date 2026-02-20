import Link from 'next/link';

import { getAllPosts } from '@libs/posts';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <main className="pb-20">
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
