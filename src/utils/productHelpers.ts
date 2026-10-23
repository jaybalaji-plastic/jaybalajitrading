import { productsData } from '@/data/products';
import { PipeProduct } from '@/types/product';

/**
 * Find a single product by its unique URL slug
 */
export function getProductBySlug(slug: string): PipeProduct | undefined {
  return productsData.find((p) => p.slug === slug);
}

/**
 * Get all products belonging to a specific category (case-insensitive or by categorySlug)
 */
export function getProductsByCategory(category: string): PipeProduct[] {
  if (!category || category === 'all') return productsData;
  return productsData.filter(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() ||
      p.categorySlug.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get related products within the same category, excluding the current product
 */
export function getRelatedProducts(currentSlug: string, category: string, limit = 4): PipeProduct[] {
  return productsData
    .filter((p) => p.slug !== currentSlug && p.category.toLowerCase() === category.toLowerCase())
    .slice(0, limit);
}

/**
 * Get distinct list of all pipe sizes in the dataset, optionally filtered by category
 */
export function getDistinctSizes(category?: string): string[] {
  const products = category && category !== 'all' ? getProductsByCategory(category) : productsData;
  const sizes = Array.from(new Set(products.map((p) => p.size)));
  return sizes;
}

/**
 * Get featured products for home page carousel / showcase
 */
export function getFeaturedProducts(): PipeProduct[] {
  return productsData.filter((p) => p.isFeatured);
}

