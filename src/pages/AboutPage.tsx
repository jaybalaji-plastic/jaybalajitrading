import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Layers,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Building2,
  Award
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { productCategories } from '@/data/categories';
import { companyData } from '@/data/company';
import { formatTelLink } from '@/utils/formatters';
import { SEO } from '@/components/common/SEO';

export const AboutPage: React.FC = () => {
  // Track which category has its "Side to Open" drawer active
  const [activeSideCategory, setActiveSideCategory] = useState<string | null>(productCategories[0].id);

  const toggleCategoryDrawer = (catId: string) => {
    setActiveSideCategory(prev => (prev === catId ? null : catId));
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      <SEO
        title="About Jay Balaji Trading (JBT) | Best Pipes in Morbi, Gujarat"
        description="Learn about Jay Balaji Trading (JBT / Jay Bajarang Treding), Morbi's premier distributor of agricultural and industrial suction pipes, petrol pipes, and braided hoses led by Meet Kundariya."
        keywords="About JBT, Jay Balaji Trading Morbi, Jay Bajarang Treding, Best Pipes in morbi, Best Pipes, Garden Pipe Morbi, Suction Pipe Gujarat, Meet Kundariya"
        canonicalPath="/about"
      />
      {/* Hero Banner with Scroll Scale ("scall") and Slide-In Animation */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-br from-brand-teal-950 via-brand-teal-900 to-brand-teal-800 text-white py-16 sm:py-24 overflow-hidden shadow-soft-lg"
      >
        {/* Subtle decorative background light blooms */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Breadcrumbs
              items={[{ label: 'About Us' }]}
              className="text-brand-teal-200"
            />
          </motion.div>

          <div className="max-w-3xl space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-brand-orange-300 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span>ABOUT JAY BALAJI TRADING</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight"
            >
              Quality Pipes.{' '}
              <span className="text-brand-orange bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-orange-400 to-amber-300">
                Reliable Supply.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-xl text-brand-teal-100/90 leading-relaxed max-w-2xl"
            >
              Based in Morbi, Gujarat, Jay Balaji Trading (JBT) is a dedicated wholesale supplier of premium PVC garden pipes, heavy-duty suction hoses, petrol pipes, braided pipes, and metallic spiral reinforced hoses.
            </motion.p>
          </div>
        </Container>
      </motion.section>

      {/* Company Overview Section with "Side to Open" Left & Right Entrance */}
      <section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Slides in from the left ("side to open") */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-50 text-brand-teal border border-brand-teal-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>Our Business Identity</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-snug">
                Supplying Dependable Pipe Solutions Across Agriculture & Industry
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Jay Balaji Trading operates from the commercial industrial hub of Morbi, Gujarat, serving agricultural dealers, contractors, and regional wholesalers with high-grade flexible and rigid PVC pipe products.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our inventory is structured to fulfill diverse fluid handling demands: from flexible petrol and chemical hoses to pressure-resistant braided garden pipes, heavy corrugated suction hoses for agricultural pump-sets, and steel wire reinforced metallic spiral hoses for vacuum integrity.
              </p>

              {/* Sub-cards with scale-in ("scall") effect */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5">Authentic Specifications</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Clear size ratings, approximate weights, and coil lengths to ensure transparent purchasing.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5">Direct Wholesaler Access</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Direct access to company representatives for quick order quotes, dispatch details, and stock availability.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Slides in from the right ("side to open") */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft-xl space-y-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Business Information
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-orange-50 text-brand-orange border border-brand-orange-200">
                    Verified Seller
                  </span>
                </div>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3.5 group">
                    <div className="p-2 rounded-xl bg-brand-teal-50 text-brand-teal shrink-0 mt-0.5 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Registered Office Address</strong>
                      <span className="text-slate-600 leading-relaxed">{companyData.address.full}</span>
                      <a
                        href={companyData.address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-brand-teal hover:text-brand-orange font-semibold mt-1 transition-colors"
                      >
                        <span>Open on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group">
                    <div className="p-2 rounded-xl bg-brand-orange-50 text-brand-orange shrink-0 mt-0.5 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Contact Representative</strong>
                      {companyData.contacts.map((c, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-slate-700">{c.name}:</span>
                          <a
                            href={formatTelLink(c.phone)}
                            className="font-semibold text-brand-teal hover:text-brand-orange transition-colors"
                          >
                            {c.phoneDisplay}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group">
                    <div className="p-2 rounded-xl bg-brand-teal-50 text-brand-teal shrink-0 mt-0.5 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Business Email</strong>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-brand-teal hover:text-brand-orange transition-colors break-all"
                      >
                        {companyData.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    to="/contact"
                    variant="primary"
                    className="w-full justify-center shadow-orange-glow font-bold"
                  >
                    Contact Us for Wholesale
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Product Categories Overview with Interactive "Side to Open" Drawer & Scale Reveal */}
      <section className="bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 py-20 border-y border-slate-200/80 relative">
        <Container size="xl" className="space-y-12">
          {/* Header scales into view ("scall") */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-50 text-brand-teal border border-brand-teal-200 shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Catalogue Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900">
              Four Specialized Pipe Categories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Click <span className="font-semibold text-brand-orange">“Side to Open”</span> on any category to expand specifications, technical features, and size ranges in an animated side drawer.
            </p>
          </motion.div>

          {/* Cards with alternating Left/Right Slide-in ("side to open") and Scale Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {productCategories.map((cat, index) => {
              const isEven = index % 2 === 0;
              const isSideOpen = activeSideCategory === cat.id;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: isEven ? -60 : 60, scale: 0.94 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white rounded-3xl border transition-all duration-300 shadow-soft hover:shadow-soft-xl flex flex-col overflow-hidden ${
                    isSideOpen
                      ? 'border-brand-orange ring-2 ring-brand-orange/20 shadow-orange-glow/20'
                      : 'border-slate-200/90'
                  }`}
                >
                  {/* Top / Main Card View */}
                  <div className="p-6 flex flex-col sm:flex-row gap-6 items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 bg-slate-50 rounded-2xl p-3 border border-slate-100 flex items-center justify-center relative overflow-hidden group/img"
                    >
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-110 drop-shadow-sm"
                      />
                      <span className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-bold text-slate-500 bg-white/90 rounded px-1 py-0.5 shadow-sm border border-slate-100">
                        {cat.sizeRange}
                      </span>
                    </motion.div>

                    <div className="space-y-2.5 flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <h3 className="font-display font-extrabold text-xl text-slate-900">
                          {cat.name}
                        </h3>
                        <span className="text-xs font-bold text-brand-teal bg-brand-teal-50 px-2.5 py-1 rounded-full self-center sm:self-auto border border-brand-teal-100">
                          {cat.sizeRange}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-brand-orange-600 line-clamp-1">
                        {cat.tagline}
                      </p>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                        <button
                          type="button"
                          onClick={() => toggleCategoryDrawer(cat.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            isSideOpen
                              ? 'bg-brand-orange text-white shadow-sm'
                              : 'bg-brand-teal-50 text-brand-teal hover:bg-brand-teal hover:text-white'
                          }`}
                        >
                          <span>{isSideOpen ? 'Close Side Specs' : 'Side to Open Specs'}</span>
                          <motion.span
                            animate={{ rotate: isSideOpen ? 90 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </motion.span>
                        </button>

                        <Button
                          to={`/products?category=${cat.slug}`}
                          variant="ghost"
                          size="sm"
                          icon={<ArrowRight className="w-3.5 h-3.5" />}
                          className="text-xs font-bold text-slate-600 p-0 hover:bg-transparent hover:text-brand-orange"
                        >
                          Browse All
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* "Side to Open" Animated Expanding Specs Drawer */}
                  <AnimatePresence>
                    {isSideOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="border-t border-brand-orange/20 bg-gradient-to-r from-brand-orange/5 via-amber-50/30 to-brand-teal/5 px-6 py-5 overflow-hidden"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
                            <Sparkles className="w-4 h-4 text-brand-orange" />
                            <span>Detailed Specifications & Key Highlights</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {cat.features.map((feat, fIdx) => (
                              <motion.div
                                key={fIdx}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.15 + fIdx * 0.05 }}
                                className="flex items-start gap-2 text-xs text-slate-700 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/70 shadow-sm"
                              >
                                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                                <span className="leading-snug">{feat}</span>
                              </motion.div>
                            ))}
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200/60">
                            <span className="text-xs text-slate-500">
                              Available Sizes: <strong className="text-slate-800">{cat.sizeRange}</strong>
                            </span>
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                              <Button
                                to={`/products?category=${cat.slug}`}
                                variant="outline"
                                size="sm"
                                className="w-full sm:w-auto text-xs"
                              >
                                View Category Products
                              </Button>
                              <Button
                                to={`/contact?category=${encodeURIComponent(cat.name)}`}
                                variant="primary"
                                size="sm"
                                className="w-full sm:w-auto text-xs shadow-orange-glow font-bold"
                              >
                                Request Quote
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Our Approach to Specifications & Enquiries with Staggered Side & Scale Reveal */}
      <section>
        <Container size="xl">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Title scales into view ("scall") */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-3"
            >
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900">
                Our Approach to Specifications & Enquiries
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
                We prioritize accuracy, accessibility, and transparency across our entire catalog.
              </p>
            </motion.div>

            {/* 3 Approach Cards with Left / Center / Right animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Slides from left ("side to open") */}
              <motion.div
                initial={{ opacity: 0, x: -60, scale: 0.92 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-xl space-y-3 transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal flex items-center justify-center font-bold text-lg shadow-sm border border-brand-teal-100">
                  1
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Data Accuracy
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We document approximate weights, coil lengths, and material compositions without exaggerating claims or inventing non-existent metrics.
                </p>
              </motion.div>

              {/* Card 2: Scales from center ("scall") */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-6 border border-brand-orange/30 shadow-soft hover:shadow-soft-xl space-y-3 transition-shadow relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange-50 text-brand-orange flex items-center justify-center font-bold text-lg shadow-sm border border-brand-orange-100">
                  2
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Direct Response
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We ensure customer queries are routed directly to active team contacts via phone, WhatsApp, and email without intermediary friction.
                </p>
              </motion.div>

              {/* Card 3: Slides from right ("side to open") */}
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.92 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-xl space-y-3 transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal flex items-center justify-center font-bold text-lg shadow-sm border border-brand-teal-100">
                  3
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Transparent Quotes
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pipe pricing in commercial markets fluctuates based on raw materials and shipment volumes. We provide timely, custom quotes for every inquiry.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA with Scroll Scale ("scall") and Glow */}
      <section>
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-gradient-to-r from-brand-teal-950 via-brand-teal-900 to-brand-teal-800 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-soft-xl overflow-hidden"
          >
            {/* Background ambient decorative effects */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-teal-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md text-brand-orange-300 border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Discuss Requirements?</span>
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                Have Questions or Need a Custom Pipe Order?
              </h2>

              <p className="text-sm sm:text-base text-brand-teal-100 max-w-xl mx-auto leading-relaxed">
                Our team in Morbi is ready to assist you with technical specifications, packaging sizes, and wholesale quotation details.
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button to="/contact" variant="primary" size="lg" className="w-full sm:w-auto font-bold shadow-orange-glow">
                  Contact Jay Balaji Trading
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button to="/products" variant="white" size="lg" className="w-full sm:w-auto font-semibold">
                  View Full Catalogue
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};
