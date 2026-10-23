import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Layers,
  Maximize2,
  Ruler,
  PhoneCall,
  CheckCircle,
  FileText,
  MessageSquare,
  Users2,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CategoryCard } from '@/components/products/CategoryCard';
import { ProductCarousel } from '@/components/products/ProductCarousel';
import { productCategories } from '@/data/categories';
import { companyData } from '@/data/company';
import { getFeaturedProducts } from '@/utils/productHelpers';
import { SEO } from '@/components/common/SEO';
import { formatTelLink } from '@/utils/formatters';
import { TopicalAuthorityGuide } from '@/components/seo/TopicalAuthorityGuide';
import { QueryFanoutFAQ } from '@/components/seo/QueryFanoutFAQ';

const heroSlides = [
  {
    category: 'Suction Pipe',
    title: 'Heavy Duty Suction Pipe',
    subtitle: 'Corrugated PVC Vacuum Wall Construction',
    badge: 'Agricultural & Industrial',
    sizeSpec: 'Sizes: 3/4" up to 6"',
    image: '/images/products/suction-pipe/suction-pipe-2.jpg',
    link: '/products?category=suction-pipe',
  },
  {
    category: 'Petrol Pipe',
    title: 'Flexible Petrol Pipe',
    subtitle: 'Translucent Chemical & Fuel Resistant Compound',
    badge: 'Multi-Purpose & Garden',
    sizeSpec: 'Sizes: 3/4", 1", 1 1/4"',
    image: '/images/products/petrol-pipe/petrol-pipe-1.jpg',
    link: '/products?category=petrol-pipe',
  },
  {
    category: 'Braided Pipe',
    title: 'Braided Pipe',
    subtitle: 'Embedded Diamond Mesh Polyester Cross-Braiding',
    badge: 'Enhanced Burst Pressure',
    sizeSpec: 'Sizes: 3/4", 1", 1 1/4"',
    image: '/images/products/braided-pipe/braided-pipe-3-4.jpg',
    link: '/products?category=braided-pipe',
  },
  {
    category: 'Metallic Pipe',
    title: 'Metallic Pipe',
    subtitle: 'Galvanized Spring Wire Embedded in Clear PVC',
    badge: 'Anti-Crush Vacuum Durability',
    sizeSpec: 'Size: 3/4" High Durability',
    image: '/images/products/metallic-pipe/metallic-pipe-3-4.jpg',
    link: '/products?category=metallic-pipe',
  },
];

// Reusable scroll animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.title = 'Jay Balaji Trading (JBT) | Quality Garden & Suction Pipes in Morbi';
  }, []);

  // Automatic slide switching timer (every 3.8s, pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isHovered]);

  const activeSlide = heroSlides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-x-hidden">
      <SEO
        title="Jay Balaji Trading (JBT) | Best Pipes in Morbi | Suction & Garden Pipe Supplier"
        description="Jay Balaji Trading (JBT) / Jay Bajarang Treding is Morbi's top wholesale supplier of suction pipes, garden pipes, flexible petrol pipes, braided hose pipes, and metallic pipes. Connect with Meet Kundariya (+91 99749 28731)."
        keywords="JBT, Jay Balaji Trading, Jay Bajarang Treding, Best Pipes in morbi, Best Pipes, Garden Pipe Morbi, Suction Pipe Gujarat, Meet Kundariya, PVC Pipes Morbi, Wholesale Pipes"
        canonicalPath="/"
      />
      {/* ============================================================== */}
      {/* SECTION B: HERO SECTION                                        */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal-950 via-brand-teal-900 to-brand-teal-800 text-white pt-10 pb-20 lg:py-24">
        {/* Animated subtle decorative background glowing orbs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full bg-brand-orange/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] rounded-full bg-brand-teal-400/15 blur-[120px] pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content with Animated Typography */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="inline-block">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-brand-orange-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                  <span>JAY BALAJI TRADING</span>
                  <span className="text-white/40">•</span>
                  <span>MORBI, GUJARAT</span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.12]"
              >
                Reliable Pipes for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 via-brand-orange to-amber-300">
                  Every Application
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-brand-teal-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Explore our comprehensive supply of flexible PVC garden pipes, heavy-duty suction hoses, petrol pipes, braided pipes, and metallic pipes with verified specifications and prompt wholesale delivery.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={fadeInUp}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button
                  to="/products"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto shadow-orange-glow font-bold hover:scale-[1.02] transition-transform"
                >
                  Explore Products
                </Button>

                <Button
                  to="/contact"
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto font-semibold hover:scale-[1.02] transition-transform"
                >
                  Contact Our Team
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Hero Product Composition with Automatic Image Switching */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Glowing backdrop card with Auto-Switching Animation */}
                <div className="relative bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/40 text-slate-800 transition-all duration-300">
                  {/* Category switcher pills at top */}
                  <div className="grid grid-cols-4 gap-1.5 mb-4 p-1 rounded-xl bg-slate-100">
                    {heroSlides.map((slide, idx) => (
                      <button
                        key={slide.category}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        className={`py-1.5 px-1 text-[11px] font-bold rounded-lg transition-all truncate text-center ${
                          idx === currentSlide
                            ? 'bg-brand-teal text-white shadow-sm scale-[1.02]'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                        }`}
                        title={slide.category}
                      >
                        {slide.category.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  {/* Animated Image Container */}
                  <div className="aspect-square relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 shadow-inner">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSlide.category}
                        initial={{ opacity: 0, scale: 0.9, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -12 }}
                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                        className="w-full h-full relative flex items-center justify-center"
                      >
                        <img
                          src={activeSlide.image}
                          alt={`${activeSlide.title} - Jay Balaji Trading`}
                          className="w-full h-full object-contain filter drop-shadow-md"
                        />

                        {/* Top Badges with subtle bounce */}
                        <div className="absolute top-2 left-2 flex items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-brand-orange text-white shadow-md">
                            {activeSlide.badge}
                          </span>
                        </div>

                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-700 shadow-sm">
                            {activeSlide.sizeSpec}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Manual Navigation Arrows */}
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 text-slate-700 hover:bg-brand-teal hover:text-white flex items-center justify-center shadow-md transition-all active:scale-90 z-20"
                      aria-label="Previous pipe image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 text-slate-700 hover:bg-brand-teal hover:text-white flex items-center justify-center shadow-md transition-all active:scale-90 z-20"
                      aria-label="Next pipe image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Animated Slide Details */}
                  <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSlide.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.25 }}
                        className="truncate pr-2"
                      >
                        <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 truncate">
                          {activeSlide.title}
                        </h3>
                        <p className="text-xs text-slate-500 truncate">{activeSlide.subtitle}</p>
                      </motion.div>
                    </AnimatePresence>

                    <Link
                      to={activeSlide.link}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-orange/10 hover:bg-brand-orange text-brand-orange hover:text-white text-xs font-bold transition-all shrink-0 shadow-sm"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Auto-Slide Progress Dots */}
                  <div className="mt-3 flex items-center justify-center gap-1.5">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentSlide ? 'w-6 bg-brand-orange' : 'w-2 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* SECTION C: BUSINESS HIGHLIGHTS (Scroll Stagger Animation)      */}
      {/* ============================================================== */}
      <section>
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-teal-50 text-brand-teal flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                Multiple Pipe Categories
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Petrol pipes, braided pipes, suction hoses, and metallic pipes for diverse applications.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange-50 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                <Maximize2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                Multiple Size Options
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From compact 3/4" garden and petrol diameters up to heavy 6" agricultural suction pipe options.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-teal-50 text-brand-teal flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                Available Length Options
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Standard packaged coils available in 30 metre and 50 metre lengths with custom wholesale options.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange-50 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                Direct Business Enquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct communication with our Morbi-based sales representatives for prompt quotes and order tracking.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* SECTION D: PRODUCT CATEGORIES (Scroll Stagger Animation)       */}
      {/* ============================================================== */}
      <section>
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              badge="Product Categories"
              title="Explore Our Pipe Collection"
              subtitle="Find the pipe category and size that suits your agricultural, commercial, or industrial requirements."
              className="mb-12"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {productCategories.map((category) => (
              <motion.div key={category.id} variants={fadeInUp}>
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* SECTION E: FEATURED PRODUCTS CAROUSEL                          */}
      {/* ============================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200/60"
      >
        <Container size="xl">
          <ProductCarousel
            products={featuredProducts}
            title="Our Products"
            subtitle="Explore popular sizes and specifications from our active catalogue. Click any item for full details."
            autoPlay={true}
            autoPlayInterval={6000}
          />
        </Container>
      </motion.section>

      {/* ============================================================== */}
      {/* SECTION: TOPICAL AUTHORITY & APPLICATION GUIDE                 */}
      {/* ============================================================== */}
      <TopicalAuthorityGuide />

      {/* ============================================================== */}
      {/* SECTION F: WHY CHOOSE JBT (Animated Feature Cards)             */}
      {/* ============================================================== */}
      <section>
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-soft"
          >
            <SectionHeading
              badge="Why Choose JBT"
              title="A Reliable Partner for Pipe Supply"
              subtitle="We focus on transparent specifications, broad product ranges, and direct communication to simplify procurement."
              className="mb-12"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-teal-50 text-brand-teal flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  Multiple Product Categories
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Petrol, braided, suction, and metallic options gathered under one dependable supplier in Morbi.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange-50 text-brand-orange flex items-center justify-center mb-4 shadow-sm">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  Clear Product Specifications
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Transparent size measurements, coil weight approximations, and material details for every product.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-teal-50 text-brand-teal flex items-center justify-center mb-4 shadow-sm">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  Convenient Enquiry Process
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Instant prefilled WhatsApp enquiry flow sends your specifications directly to Meet Kundariya for fast quotation.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange-50 text-brand-orange flex items-center justify-center mb-4 shadow-sm">
                  <Users2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  Direct Team Communication
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Speak directly with Meet Kundariya for immediate assistance and wholesale supply logistics.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* SECTION G: ABOUT PREVIEW (Scroll & Photo Hover Animation)      */}
      {/* ============================================================== */}
      <section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-teal-50 text-brand-teal border border-brand-teal-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Company Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                About Jay Balaji Trading
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Jay Balaji Trading is a Morbi, Gujarat based supplier providing an extensive range of pipe products. Our catalogue includes flexible garden pipes, agricultural suction pipes, fuel-resistant petrol hoses, braided high-pressure hoses, and metallic spiral pipes.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe in providing clear, accurate product specifications—including bore sizes, approximate bundle weights, materials, and standard coil lengths—enabling dealers, farmers, and commercial contractors to make well-informed purchasing decisions.
              </p>

              <div className="pt-2">
                <Button
                  to="/about"
                  variant="outline"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="hover:scale-[1.02] transition-transform"
                >
                  Learn More About Us
                </Button>
              </div>
            </motion.div>

            {/* Photos with Premium Tilt & Hover Animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-soft hover:shadow-soft-lg aspect-square flex flex-col items-center justify-between overflow-hidden group"
                >
                  <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/products/petrol-pipe/petrol-pipe-1.jpg"
                      alt="Petrol Pipe - Jay Balaji Trading"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-2 text-center w-full">
                    <span className="text-xs font-bold text-slate-800 block truncate">Flexible Petrol Pipe</span>
                    <span className="text-[10px] text-brand-orange font-semibold">Fuel & Chemical Resistant</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-soft hover:shadow-soft-lg aspect-square flex flex-col items-center justify-between overflow-hidden group"
                >
                  <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/products/braided-pipe/braided-pipe-1.jpg"
                      alt="Braided Pipe - Jay Balaji Trading"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-2 text-center w-full">
                    <span className="text-xs font-bold text-slate-800 block truncate">Braided Hose</span>
                    <span className="text-[10px] text-brand-teal font-semibold">High Pressure Endurance</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* SECTION: QUERY FANOUT FAQ & SEARCH INTENT KNOWLEDGE BASE       */}
      {/* ============================================================== */}
      <QueryFanoutFAQ />

      {/* ============================================================== */}
      {/* SECTION H: CONTACT AND ENQUIRY CTA (Premium Glow & Animation)  */}
      {/* ============================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <Container size="xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-teal-950 via-brand-teal-900 to-brand-teal-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-brand-teal-700/60">
            {/* Animated glowing accent circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                Fast Wholesale Assistance
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                Looking for the Right Pipe?
              </h2>

              <p className="text-sm sm:text-lg text-brand-teal-100 leading-relaxed max-w-2xl mx-auto">
                Explore our available sizes or contact our team directly for product enquiries, stock availability, and tailored quotations for your projects.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  to="/products"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-orange-glow hover:scale-[1.02] transition-transform"
                >
                  Explore Products
                </Button>

                <Button
                  to="/contact"
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto font-semibold hover:scale-[1.02] transition-transform"
                >
                  Contact Us
                </Button>
              </div>

              <div className="pt-4 text-xs sm:text-sm text-brand-teal-200">
                <span>Direct wholesale contact: </span>
                <a
                  href={formatTelLink(companyData.contacts[0].phone)}
                  className="text-brand-orange-300 font-bold hover:text-white transition-colors underline"
                >
                  {companyData.contacts[0].name} ({companyData.contacts[0].phoneDisplay})
                </a>
              </div>
            </div>
          </div>
        </Container>
      </motion.section>
    </div>
  );
};
