export async function load({ fetch }) {
  const response = await fetch('api/categories');
  const categories: string[] = await response.json();
  return { categories };
}
