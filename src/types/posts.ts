export interface PostMetadata {
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: number;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

export type PostSummary = Pick<Post, 'slug' | 'metadata'>;
