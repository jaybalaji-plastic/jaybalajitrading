import React, { useState } from 'react';
import { Search, X, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ProductFilterState } from '@/types/product';
import { productCategories } from '@/data/categories';
import { getDistinctSizes } from '@/utils/productHelpers';

interface ProductFiltersProps {
  filters: ProductFilterState;
  onUpdateFilter: (key: keyof ProductFilterState, value: string) => void;
  onClearFilters: () => void;
  resultCount: number;
  totalCount: number;
  isFiltered: boolean;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onUpdateFilter,
  onClearFilters,
  resultCount,
  totalCount,
  isFiltered,
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const availableSizes = getDistinctSizes(filters.category);

  return (
    <div className="space-y-6">
      {/* Category Pills Bar (Horizontal scroll on mobile, responsive wrap on desktop) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar sm:flex-wrap">
        <button
          type="button"
          onClick={() => onUpdateFilter('category', 'all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shadow-sm ${
            filters.category === 'all'
              ? 'bg-brand-teal text-white shadow-soft'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          All Products ({totalCount})
        </button>

        {productCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onUpdateFilter('category', cat.slug)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shadow-sm ${
              filters.category === cat.slug || filters.category === cat.name
                ? 'bg-brand-teal text-white shadow-soft'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search and Secondary Filter Row */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-soft">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => onUpdateFilter('searchQuery', e.target.value)}
              placeholder="Search by pipe name, size (e.g. 3/4&quot;, 2&quot;), or material..."
              className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
            />
            {filters.searchQuery && (
              <button
                type="button"
                onClick={() => onUpdateFilter('searchQuery', '')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                aria-label="Clear search text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 bg-slate-50"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-brand-teal" />
              Filter by Size & Specifications
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Desktop Filter Dropdowns (or Mobile Collapsible) */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${
              mobileFiltersOpen ? 'flex' : 'hidden md:flex'
            }`}
          >
            {/* Size Dropdown */}
            <div className="min-w-[160px]">
              <select
                value={filters.size}
                onChange={(e) => onUpdateFilter('size', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white cursor-pointer"
                aria-label="Filter by size"
              >
                <option value="all">All Sizes</option>
                {availableSizes.map((s) => (
                  <option key={s} value={s}>
                    Size: {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Material Dropdown */}
            <div className="min-w-[140px]">
              <select
                value={filters.material}
                onChange={(e) => onUpdateFilter('material', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white cursor-pointer"
                aria-label="Filter by material"
              >
                <option value="all">All Materials</option>
                <option value="PVC">PVC Compound</option>
              </select>
            </div>

            {/* Clear All Filters Button */}
            {isFiltered && (
              <button
                type="button"
                onClick={onClearFilters}
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors shrink-0"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Results summary bar */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing <strong className="text-slate-800 font-semibold">{resultCount}</strong> of{' '}
            <strong className="text-slate-800 font-semibold">{totalCount}</strong> products
          </span>

          {isFiltered && (
            <span className="text-brand-orange font-medium">Filters active</span>
          )}
        </div>
      </div>
    </div>
  );
};
