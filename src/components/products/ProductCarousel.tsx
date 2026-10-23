import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PipeProduct } from '@/types/product';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/common/Button';

interface ProductCarouselProps {
  products: PipeProduct[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  title = 'Our Featured Products',
  subtitle = 'Browse our top selection of flexible and reinforced pipe solutions.',
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Check scroll position to update buttons and active indicator
  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate active page index
    const cardWidth = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 24 : 300;
    const currentIdx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(currentIdx);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // Scroll by card width
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const card = el.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Optional gentle autoplay
  useEffect(() => {
    if (!autoPlay || isHovered) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('right');
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Header with title and desktop arrow controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-brand-teal hover:text-white hover:border-brand-teal active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-brand-teal hover:text-white hover:border-brand-teal active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth"
        tabIndex={0}
        role="region"
        aria-label="Products carousel"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Bottom bar with pagination progress and View All button */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        {/* Visual Dots Indicators */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {products.slice(0, Math.min(products.length, 8)).map((_, idx) => (
            <span
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex % Math.min(products.length, 8)
                  ? 'w-6 bg-brand-orange'
                  : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* View all products link */}
        <Button
          to="/products"
          variant="ghost"
          size="sm"
          icon={<ArrowRight className="w-4 h-4" />}
          className="font-semibold text-brand-teal hover:text-brand-orange"
        >
          View All Products Catalogue
        </Button>
      </div>
    </div>
  );
};
