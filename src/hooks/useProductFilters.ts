import { useState, useMemo, useEffect, useCallback } from 'react';
import { ProductFilterState } from '@/types/product';
import { productsData } from '@/data/products';

export function useProductFilters(initialCategory: string = 'all') {
  const [filters, setFilters] = useState<ProductFilterState>({
    searchQuery: '',
    category: initialCategory,
    size: 'all',
    material: 'all',
  });

  useEffect(() => {
    if (initialCategory !== filters.category) {
      setFilters((prev) => ({
        ...prev,
        category: initialCategory,
        size: 'all',
      }));
    }
  }, [initialCategory, filters.category]);

  const updateFilter = useCallback((key: keyof ProductFilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      // Reset size when category changes
      ...(key === 'category' ? { size: 'all' } : {}),
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      searchQuery: '',
      category: 'all',
      size: 'all',
      material: 'all',
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Category filter
      if (
        filters.category !== 'all' &&
        product.category.toLowerCase() !== filters.category.toLowerCase() &&
        product.categorySlug.toLowerCase() !== filters.category.toLowerCase()
      ) {
        return false;
      }

      // Size filter
      if (filters.size !== 'all' && product.size !== filters.size) {
        return false;
      }

      // Material filter
      if (filters.material !== 'all' && product.material !== filters.material) {
        return false;
      }

      // Search query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesSize = product.size.toLowerCase().includes(query);
        const matchesMaterial = product.material.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);

        if (!matchesName && !matchesCategory && !matchesSize && !matchesMaterial && !matchesDesc) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const isFiltered = useMemo(() => {
    return (
      filters.searchQuery !== '' ||
      filters.category !== 'all' ||
      filters.size !== 'all' ||
      filters.material !== 'all'
    );
  }, [filters]);

  return {
    filters,
    updateFilter,
    clearFilters,
    filteredProducts,
    totalCount: productsData.length,
    resultCount: filteredProducts.length,
    isFiltered,
  };
}
