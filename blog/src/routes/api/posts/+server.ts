import { json } from '@sveltejs/kit';
import { Post } from '$lib/types';

function getSlugFromPath(path: string): string {
  return path.split('/').at(-1).replace('.md', '');
}

async function getPosts() {
  const posts: Post[] = [];

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });
  Object.entries(paths).forEach(([path, file]) => {
    // const post: Post = { value }
    const slug = getSlugFromPath(path);
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>;
      const post: Post = { ...metadata, slug };
      posts.push(post);
    }
  });
  return posts.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime()
  );
}

export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
