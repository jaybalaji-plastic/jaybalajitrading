import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, PhoneCall, Sparkles } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { MobileMenu } from './MobileMenu';
import { companyData } from '@/data/company';
import { formatTelLink } from '@/utils/formatters';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-bar with quick contact numbers */}
      <div className="bg-brand-teal-900 text-brand-teal-100 text-xs py-1.5 border-b border-brand-teal-800 hidden md:block">
        <Container size="xl" className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-brand-orange-300">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Wholesaler & Industrial Supplier in Morbi, Gujarat
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-brand-orange" />
              <span>Direct Sales (Meet Kundariya):</span>
              <a
                href={formatTelLink(companyData.contacts[0].phone)}
                className="hover:text-white transition-colors font-semibold text-white/95"
              >
                {companyData.contacts[0].phoneDisplay}
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? 'shadow-md border-b border-slate-200/80 py-2 sm:py-2.5'
            : 'border-b border-slate-100 py-3 sm:py-3.5'
        }`}
      >
        <Container size="xl" className="flex items-center justify-between">
          {/* Brand Logo & Title */}
          <BrandLogo size="md" variant="dark" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-1.5 text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-brand-teal'
                      : 'text-slate-700 hover:text-brand-teal'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full animate-in fade-in" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shadow-sm hover:shadow-orange-glow/60"
            >
              Get a Quote
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-brand-teal hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
