import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductGrid } from '@/components/products/ProductGrid';
import { useProductFilters } from '@/hooks/useProductFilters';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';
import { companyData } from '@/data/company';
import { buildWhatsAppUrl } from '@/utils/formatters';
import { SEO } from '@/components/common/SEO';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const {
    filters,
    updateFilter,
    clearFilters,
    filteredProducts,
    totalCount,
    resultCount,
    isFiltered,
  } = useProductFilters(categoryParam);

  const handleUpdateFilter = (key: Parameters<typeof updateFilter>[0], value: string) => {
    updateFilter(key, value);
    if (key === 'category') {
      if (value === 'all') {
        searchParams.delete('category');
      } else {
        searchParams.set('category', value);
      }
      setSearchParams(searchParams, { replace: true });
    }
  };

  const handleClear = () => {
    clearFilters();
    setSearchParams({}, { replace: true });
  };

  return (
    <div className="py-8 sm:py-12 pb-20 overflow-x-hidden">
      <SEO
        title="Pipe Products & Technical Specifications | Jay Balaji Trading (JBT) Morbi"
        description="Browse high quality suction pipes (3/4&quot; to 6&quot;), flexible petrol pipes, reinforced braided hose pipes, and metallic spiral pipes from Jay Balaji Trading (JBT), Morbi, Gujarat. Best pipes in Morbi."
        keywords="Best Pipes in morbi, Best Pipes, JBT, Jay Balaji Trading, Jay Bajarang Treding, Suction Pipe Gujarat, Garden Pipe Morbi, PVC Braided Pipe, Heavy Duty Suction Pipe, Morbi Pipes"
        canonicalPath="/products"
      />
      <Container size="xl" className="space-y-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: 'Products' }]} />

        {/* Page Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-teal-50 text-brand-teal border border-brand-teal-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Full Product Catalogue</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
              Our Pipe Products
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Explore our available pipe categories, sizes, and product specifications. All specifications are compiled directly from verified manufacturing details.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-medium text-slate-500 shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span>Interactive Cursor Spotlight Active</span>
          </div>
        </motion.div>

        {/* Single "GET QUOTE ON WHATSAPP" Button directly below header section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="flex items-center"
        >
          <a
            href={buildWhatsAppUrl(
              companyData.whatsappNumber,
              'Hello Meet Kundariya! I visited the Jay Balaji Trading website and would like to get an official wholesale quotation for pipes.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#168039] hover:bg-[#12682e] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_4px_16px_rgba(22,128,57,0.35)] hover:shadow-[0_6px_22px_rgba(22,128,57,0.5)] transition-all active:scale-[0.98] group"
          >
            <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>GET QUOTE ON WHATSAPP</span>
          </a>
        </motion.div>

        {/* Product Filtering Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ProductFilters
            filters={filters}
            onUpdateFilter={handleUpdateFilter}
            onClearFilters={handleClear}
            resultCount={resultCount}
            totalCount={totalCount}
            isFiltered={isFiltered}
          />
        </motion.div>

        {/* Product Grid with Animate Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <ProductGrid
            products={filteredProducts}
            onClearFilters={handleClear}
          />
        </motion.div>
      </Container>
    </div>
  );
};
