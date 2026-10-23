import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Scale, Layers, Ruler } from 'lucide-react';
import { PipeProduct } from '@/types/product';
import { Button } from '@/components/common/Button';

interface ProductCardProps {
  product: PipeProduct;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Cursor move highlight & 3D tilt state
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Subtle 3D perspective tilt following the cursor
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // max 5deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        y: isHovered ? -6 : 0,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative group bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-soft-xl flex flex-col overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Radial Highlight */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-200 z-30"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(20, 117, 130, 0.12), rgba(245, 130, 32, 0.08), transparent 75%)`,
          }}
        />
      )}

      {/* Dynamic Cursor-Following Border Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-[1.5px] rounded-2xl transition-opacity duration-200 z-20"
          style={{
            background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 130, 32, 0.6), rgba(20, 117, 130, 0.4), transparent 70%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            padding: '1.5px',
          }}
        />
      )}

      {/* Product Image Area */}
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-square w-full overflow-hidden bg-slate-50 p-4 sm:p-5"
        tabIndex={-1}
      >
        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide bg-brand-teal/90 text-white backdrop-blur-sm shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Size Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold tracking-wide bg-white/95 text-brand-dark shadow-sm border border-slate-200">
            {product.size}
          </span>
        </div>

        {/* Skeleton while loading */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-slate-200 animate-pulse" />
        )}

        {/* Image with subtle zoom on cursor hover */}
        <img
          src={imageError ? '/images/products/suction-pipe/suction-pipe-2.jpg' : product.image}
          alt={`${product.name} - Jay Balaji Trading`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-108 filter drop-shadow-sm ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </Link>

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between relative z-10 bg-white">
        <div>
          <Link
            to={`/products/${product.slug}`}
            className="group/title block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-bold text-lg text-slate-900 group-hover/title:text-brand-teal transition-colors line-clamp-1">
                {product.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/title:text-brand-orange transition-colors shrink-0 mt-1" />
            </div>
          </Link>

          <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Key Product Specifications Grid */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
              <Scale className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <div className="truncate">
                <span className="text-slate-400 block text-[10px] leading-tight">Approx. Weight</span>
                <span className="font-semibold text-slate-800">{product.approxWeight}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
              <Layers className="w-3.5 h-3.5 text-brand-teal shrink-0" />
              <div className="truncate">
                <span className="text-slate-400 block text-[10px] leading-tight">Material</span>
                <span className="font-semibold text-slate-800">{product.material}</span>
              </div>
            </div>
          </div>

          {/* Lengths info */}
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500 px-1">
            <Ruler className="w-3 h-3 text-slate-400 shrink-0" />
            <span>Lengths: {product.availableLengths.join(' / ')}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 pt-3 border-t border-slate-100">
          <Button
            to={`/products/${product.slug}`}
            variant="outline"
            size="sm"
            className="w-full text-xs justify-center font-semibold text-slate-700 hover:text-brand-teal hover:border-brand-teal"
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
