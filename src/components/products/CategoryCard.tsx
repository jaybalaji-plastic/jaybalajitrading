import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProductCategoryInfo } from '@/types/product';

interface CategoryCardProps {
  category: ProductCategoryInfo;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={`group bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-soft-lg flex flex-col overflow-hidden transition-all duration-300 ${className}`}
    >
      <Link
        to={`/products?category=${category.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-t-2xl flex-1 flex flex-col"
      >
        {/* Category Image Header */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 p-4">
          <img
            src={category.image}
            alt={`${category.name} - Jay Balaji Trading`}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle size range badge */}
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-teal/90 text-white backdrop-blur-sm shadow-sm">
              Sizes: {category.sizeRange}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-brand-teal transition-colors">
              {category.name}
            </h3>
            <p className="text-xs font-medium text-brand-orange mt-1">
              {category.tagline}
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
              {category.description}
            </p>

            {/* Feature bullets */}
            <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
              {category.features.slice(0, 2).map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-brand-teal group-hover:text-brand-orange transition-colors">
            <span>View {category.name} Catalogue</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
