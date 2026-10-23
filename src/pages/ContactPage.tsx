import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { companyData } from '@/data/company';
import { formatTelLink } from '@/utils/formatters';
import { SEO } from '@/components/common/SEO';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const sizeParam = searchParams.get('size') || '';
  const productParam = searchParams.get('product') || '';

  return (
    <div className="py-8 sm:py-12 pb-20 space-y-12">
      <SEO
        title="Contact Meet Kundariya | Jay Balaji Trading (JBT) Morbi"
        description="Contact Jay Balaji Trading (JBT) / Jay Bajarang Treding in Morbi, Gujarat. Direct wholesale enquiries for suction, petrol, and braided pipes. Call or WhatsApp Meet Kundariya at +91 99749 28731."
        keywords="Contact Jay Balaji Trading, JBT Morbi phone number, Meet Kundariya WhatsApp, Jay Bajarang Treding contact, Best Pipes in morbi, Morbi pipe factory"
        canonicalPath="/contact"
      />
      <Container size="xl" className="space-y-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange-50 text-brand-orange border border-brand-orange-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Customer & Wholesale Enquiries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            Contact Jay Balaji Trading
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Reach out to our sales team in Morbi for product specifications, bulk quantity pricing, delivery schedules, or custom coil requests.
          </p>
        </div>

        {/* Main Grid: Info Cards (Left) and Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Contact Cards */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-50 text-brand-orange flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    Direct Telephone
                  </h3>
                  <p className="text-xs text-slate-500">Call our sales representatives directly</p>
                </div>
              </div>

              <div className="space-y-4">
                {companyData.contacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        {contact.name}
                      </p>
                      <a
                        href={formatTelLink(contact.phone)}
                        className="text-base font-bold text-slate-900 hover:text-brand-orange transition-colors"
                      >
                        {contact.phoneDisplay}
                      </a>
                    </div>
                    <a
                      href={formatTelLink(contact.phone)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm"
                    >
                      Call Now
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email & Location Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-0.5">
                    Email Enquiries
                  </h3>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-sm font-semibold text-brand-teal hover:text-brand-orange transition-colors block break-all"
                  >
                    {companyData.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Send quotation requests or technical enquiries by email.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-50 text-brand-orange flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="font-display font-bold text-base text-slate-900 mb-0.5">
                    Business Address
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {companyData.address.full}
                  </p>
                  <a
                    href={companyData.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal hover:text-brand-orange mt-2 transition-colors"
                  >
                    <span>Open in Google Maps for Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Working Hours / Location Note */}
              <div className="border-t border-slate-100 pt-5 flex items-start gap-3 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  Business Hours: Monday to Saturday, 9:00 AM - 7:30 PM (IST).
                </span>
              </div>
            </div>

            {/* Embedded Google Maps View Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-soft overflow-hidden">
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 relative">
                <iframe
                  title="Jay Balaji Trading Location - Morbi"
                  src={companyData.address.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
                <span>5/6, Lati Plot, Morbi, Gujarat</span>
                <a
                  href={companyData.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-teal hover:underline"
                >
                  View Large Map
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm
              initialCategory={categoryParam}
              initialSize={sizeParam}
              productName={productParam}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
