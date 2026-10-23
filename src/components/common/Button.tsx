import React from 'react';
import { Link } from 'react-router-dom';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

export type ButtonProps = BaseButtonProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined })
    | { to: string; href?: undefined; onClick?: () => void; disabled?: boolean }
  );

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isLoading = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:active:scale-100 select-none';

  const sizes = {
    sm: 'text-xs sm:text-sm px-3.5 py-1.5 gap-1.5 shadow-sm',
    md: 'text-sm sm:text-base px-5 py-2.5 gap-2 shadow-sm',
    lg: 'text-base sm:text-lg px-6 py-3.5 gap-2.5 shadow-md',
  };

  const variants = {
    primary:
      'bg-brand-orange text-white hover:bg-brand-orange-700 focus-visible:ring-brand-orange shadow-orange-glow/50 hover:shadow-orange-glow',
    secondary:
      'bg-brand-teal text-white hover:bg-brand-teal-700 focus-visible:ring-brand-teal shadow-soft',
    outline:
      'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white focus-visible:ring-brand-teal',
    ghost:
      'text-brand-dark hover:bg-brand-teal-50 hover:text-brand-teal focus-visible:ring-brand-teal',
    white:
      'bg-white text-brand-teal hover:bg-slate-100 focus-visible:ring-white shadow-soft font-semibold',
  };

  const content = (
    <>
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={combinedClasses} onClick={props.onClick}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        className={combinedClasses}
        target={props.target}
        rel={props.rel || (props.target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={isLoading || (props as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};
