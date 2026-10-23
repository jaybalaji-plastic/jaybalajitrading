import React from 'react';
import { PackageX } from 'lucide-react';
import { PipeProduct } from '@/types/product';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/common/Button';

interface ProductGridProps {
  products: PipeProduct[];
  onClearFilters?: () => void;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onClearFilters,
  className = '',
}) => {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-10 sm:p-16 text-center shadow-soft max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
          <PackageX className="w-8 h-8" />
        </div>
        <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
          No matching pipe products found
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          We couldn't find any products matching your selected search query or filters. Try adjusting your search term or reset all filters.
        </p>
        {onClearFilters && (
          <Button variant="primary" size="sm" onClick={onClearFilters}>
            Reset All Filters
          </Button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
