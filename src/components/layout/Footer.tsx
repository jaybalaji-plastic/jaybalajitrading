import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { BrandLogo } from '@/components/common/BrandLogo';
import { companyData } from '@/data/company';
import { formatTelLink } from '@/utils/formatters';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-teal-900 text-brand-teal-100 border-t border-brand-teal-800">
      <div className="py-14 lg:py-16">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1: Brand & Overview */}
            <div className="space-y-4">
              <BrandLogo variant="light" size="md" />
              <p className="text-sm text-brand-teal-200/90 leading-relaxed pr-2">
                Jay Balaji Trading (JBT) is a dedicated supplier of quality PVC garden pipes, heavy-duty suction hoses, petrol pipes, braided pipes, and metallic spiral pipes for agriculture and industry.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs text-brand-orange-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>{companyData.tagline}</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-brand-orange rounded-sm" />
                Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Products Catalogue</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>About Jay Balaji Trading</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Product Categories */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-brand-orange rounded-sm" />
                Pipe Categories
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/products?category=petrol-pipe"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Petrol Pipe</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=braided-pipe"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Braided Pipe</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=suction-pipe"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Suction Pipe</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=metallic-pipe"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Metallic Pipe</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Verified Contact Info */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-brand-orange rounded-sm" />
                Contact Information
              </h3>
              <div className="space-y-3 text-sm">
                <div className="space-y-1.5">
                  {companyData.contacts.map((contact, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                      <span className="text-brand-teal-200">{contact.name}:</span>
                      <a
                        href={formatTelLink(contact.phone)}
                        className="text-white hover:text-brand-orange transition-colors font-medium"
                      >
                        {contact.phoneDisplay}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-white hover:text-brand-orange transition-colors truncate"
                  >
                    {companyData.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                  <div>
                    <p className="text-brand-teal-100 text-xs sm:text-sm leading-relaxed">
                      {companyData.address.full}
                    </p>
                    <a
                      href={companyData.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-brand-orange-300 hover:text-white mt-1 underline transition-colors"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-brand-teal-800/80 bg-brand-teal-950 py-5 text-xs text-brand-teal-300">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {currentYear} Jay Balaji Trading. All rights reserved.</p>
          <p className="text-brand-teal-400">
            Garden Pipe & Suction Pipe Supplier • Morbi, Gujarat, India
          </p>
        </Container>
      </div>
    </footer>
  );
};
