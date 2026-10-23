import React, { useEffect } from 'react';
import { Home, ArrowLeft, PackageSearch } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found (404) | Jay Balaji Trading';
  }, []);

  return (
    <div className="py-20 sm:py-28 text-center">
      <Container size="sm" className="space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-brand-orange-50 text-brand-orange flex items-center justify-center mx-auto shadow-inner">
          <PackageSearch className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            The page you requested could not be found. It may have been moved, updated, or you might have followed an outdated link.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Go to Home Page
          </Button>

          <Button
            to="/products"
            variant="outline"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Explore Catalogue
          </Button>
        </div>
      </Container>
    </div>
  );
};
