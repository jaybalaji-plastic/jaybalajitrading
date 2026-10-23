import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Button } from '@/components/common/Button';
import { companyData } from '@/data/company';
import { formatTelLink } from '@/utils/formatters';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer container */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50">
                <BrandLogo size="sm" showTagline={false} />
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="p-4 sm:p-6 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-brand-teal-50 text-brand-teal border-l-4 border-brand-orange'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-brand-teal'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>

              {/* Quote CTA */}
              <div className="px-4 sm:px-6 mt-2">
                <Button
                  to="/contact"
                  variant="primary"
                  className="w-full justify-center shadow-md"
                  onClick={onClose}
                >
                  Get a Quote
                </Button>
              </div>
            </div>

            {/* Direct Contact info at bottom of menu */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/80 space-y-3 text-xs sm:text-sm text-slate-600">
              <p className="font-semibold text-slate-800 uppercase tracking-wider text-xs">
                Direct Contact
              </p>
              <div className="space-y-2">
                {companyData.contacts.map((contact, i) => (
                  <a
                    key={i}
                    href={formatTelLink(contact.phone)}
                    className="flex items-center gap-2.5 font-medium text-slate-700 hover:text-brand-orange transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span>{contact.name}: {contact.phoneDisplay}</span>
                  </a>
                ))}
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center gap-2.5 text-slate-700 hover:text-brand-orange transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span className="truncate">{companyData.email}</span>
                </a>
                <div className="flex items-start gap-2.5 text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                  <span>{companyData.address.full}</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
