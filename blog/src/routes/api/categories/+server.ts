import { json } from '@sveltejs/kit';
import { Post } from '$lib';

async function getCategories() {
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });
  let categories: string[] = [];
  Object.entries(paths).forEach(([path, file]) => {
    if (file && typeof file === 'object' && 'metadata' in file) {
      categories = [
        ...categories,
        ...(file.metadata as Omit<Post, 'slug'>).categories,
      ];
    }
  });
  return Array.from(new Set(categories));
}

export async function GET() {
  const categories = await getCategories();
  return json(categories);
}
