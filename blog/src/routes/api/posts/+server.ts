import { json } from '@sveltejs/kit';
import { Post } from '$lib';

function getSlugFromPath(path: string): string {
  return path.split('/').at(-1).replace('.md', '');
}

async function getPosts(categories: string[]) {
  let posts: Post[] = [];

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

  if (categories?.length) {
    posts = posts.filter((post) => {
      return post.categories.some((category: string) =>
        categories.includes(category)
      );
    });
  }

  return posts.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime()
  );
}

export async function GET({ url }) {
  const categories: string[] =
    url.searchParams.get('categories')?.split(',') ?? [];
  const posts: Post[] = await getPosts(categories);

  return json(posts);
}
