import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isLight = variant === 'light'; // Light text for dark backgrounds (Footer)

  // Scale settings
  const iconSizes = {
    sm: 'w-10 h-7',
    md: 'w-14 h-10',
    lg: 'w-20 h-14',
  };

  const titleSizes = {
    sm: 'text-base font-bold',
    md: 'text-lg sm:text-xl font-extrabold tracking-tight',
    lg: 'text-2xl sm:text-3xl font-black tracking-tight',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] sm:text-xs tracking-widest',
    lg: 'text-xs sm:text-sm tracking-widest',
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg p-1 transition-all duration-200 ${className}`}
      aria-label="Jay Balaji Trading - Home"
    >
      {/* Official JBT Brand Mark from original logo */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <img
          src="/images/branding/jbt-mark.png"
          alt="Jay Balaji Trading (JBT)"
          className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-slate-900 group-hover:text-brand-teal'
          } transition-colors`}
        >
          Jay Balaji Trading
        </span>
        {showTagline && (
          <div
            className={`flex items-center gap-1.5 uppercase font-medium mt-1 ${subtitleSizes[size]} ${
              isLight ? 'text-brand-teal-200' : 'text-slate-500'
            }`}
          >
            <span>Garden Pipe</span>
            <span className="text-brand-orange font-bold">|</span>
            <span>Suction Pipe</span>
          </div>
        )}
      </div>
    </Link>
  );
};
