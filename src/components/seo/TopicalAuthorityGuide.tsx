import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Tractor,
  Factory,
  Fuel,
  Building2,
  Droplets,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Ruler,
  Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

interface ApplicationCluster {
  id: string;
  label: string;
  icon: React.ElementType;
  title: string;
  description: string;
  recommendedPipes: {
    name: string;
    categorySlug: string;
    sizes: string;
    benefit: string;
  }[];
  specHighlights: string[];
  morbiContext: string;
}

const clusters: ApplicationCluster[] = [
  {
    id: 'agriculture',
    label: 'Agriculture & Irrigation',
    icon: Tractor,
    title: 'Agricultural Farms & Borewell Irrigation',
    description:
      'Heavy-duty suction and water delivery systems engineered for open-well pumps, canal water lifting, and drip system feeder mains across Gujarat farmland.',
    recommendedPipes: [
      {
        name: 'Heavy Duty Suction Pipe',
        categorySlug: 'suction-pipe',
        sizes: '2" up to 6"',
        benefit: 'Rigid corrugated PVC ribs prevent vacuum collapse under deep borehole draw.',
      },
      {
        name: 'Reinforced Braided Pipe',
        categorySlug: 'braided-pipe',
        sizes: '3/4", 1", 1 1/4"',
        benefit: 'Cross-weave polyester mesh handles high pump head delivery without bursting.',
      },
    ],
    specHighlights: [
      'UV-stabilized compound resists brittleness under Saurashtra sun exposure',
      'Smooth inner bore maximizes water discharge volume with minimal head loss',
      'Standard 30m & 50m coils ensure seamless installation over long field runs',
    ],
    morbiContext: 'Widely deployed across agricultural farms in Morbi, Tankara, Wankaner, and Halvad.',
  },
  {
    id: 'ceramic',
    label: 'Ceramic & Tile Industry',
    icon: Factory,
    title: 'Morbi Ceramic Clusters & Industrial Plants',
    description:
      'Robust slurry and industrial water conduits designed specifically for ball mills, glaze lines, spray dryers, and factory sump drainage in Morbi industrial zones.',
    recommendedPipes: [
      {
        name: 'Heavy Suction Hose (Green)',
        categorySlug: 'suction-pipe',
        sizes: '3", 4", 5", 6"',
        benefit: 'Abrasion-resistant internal wall carries clay slurry, feldspar, and dirty wash water.',
      },
      {
        name: 'Metallic Spiral Wire Pipe',
        categorySlug: 'metallic-pipe',
        sizes: '3/4", 1", 1 1/4"',
        benefit: 'Galvanized spring steel wire helix withstands heavy factory mechanical impact.',
      },
    ],
    specHighlights: [
      'High negative pressure rating for continuous heavy vacuum pumping',
      'Corrosion-proof PVC construction unaffected by acidic glaze and ceramic chemicals',
      'Anti-kink design maintains unobstructed flow around factory machinery',
    ],
    morbiContext: 'Trusted by tile manufacturing units and sanitaryware factories on Morbi-2 National Highway & Pipali Road.',
  },
  {
    id: 'fuel',
    label: 'Fuel & Chemical Transfer',
    icon: Fuel,
    title: 'Fuel, Diesel & Liquid Hydrocarbon Lines',
    description:
      'Specialized translucent PVC tubing formulated with non-migrating plasticizers to transport diesel, kerosene, oils, and industrial chemicals without cracking.',
    recommendedPipes: [
      {
        name: 'Flexible Petrol Pipe (Green / Clear)',
        categorySlug: 'petrol-pipe',
        sizes: '3/4", 1", 1 1/4"',
        benefit: 'Resists hydrocarbon degradation and maintains supple flexibility year-round.',
      },
      {
        name: 'Metallic Spring Pipe',
        categorySlug: 'metallic-pipe',
        sizes: '3/4" to 1"',
        benefit: 'Groundable steel helix prevents static buildup during fuel transfer.',
      },
    ],
    specHighlights: [
      'Crystal translucent wall allows immediate visual inspection of liquid flow & air bubbles',
      'Resistant to hardening, swelling, and ozone-induced cracking',
      'Lightweight bundle format for easy field handling on generator & fuel skid setups',
    ],
    morbiContext: 'Ideal for diesel generator fuel feeds, agricultural tractor refueling, and chemical dosing units.',
  },
  {
    id: 'construction',
    label: 'Civil Dewatering & Garden',
    icon: Droplets,
    title: 'Construction Dewatering & Commercial Grounds',
    description:
      'Versatile water lines for civil engineering dewatering, foundation trench pumping, concrete curing water supply, and landscape garden maintenance.',
    recommendedPipes: [
      {
        name: 'Suction Dewatering Pipe',
        categorySlug: 'suction-pipe',
        sizes: '2", 2 1/2", 3", 4"',
        benefit: 'Rapid slurry extraction during foundation excavation and basement drainage.',
      },
      {
        name: 'Braided Garden Hose',
        categorySlug: 'braided-pipe',
        sizes: '3/4", 1"',
        benefit: 'Kink-free water supply for concrete curing and commercial landscaping.',
      },
    ],
    specHighlights: [
      'High-burst rating withstands municipal and booster pump pressures',
      'Flexible bend radius easily wraps around structural columns and terrain contours',
      'Durable exterior resists abrasion from gravel, rough concrete, and mud',
    ],
    morbiContext: 'Supplied directly for real estate construction sites, municipal projects, and nurseries.',
  },
];

export const TopicalAuthorityGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('agriculture');
  const activeCluster = clusters.find((c) => c.id === activeTab) || clusters[0];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80">
      <Container size="xl" className="space-y-10">
        {/* Header with SEO Topical Pillar Context */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-50 text-brand-teal border border-brand-teal-200">
            <Layers className="w-3.5 h-3.5" />
            <span>Topical Authority & Pipe Selection Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Industrial & Agricultural Pipe Solutions in Morbi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Detailed technical suitability and diameter selection guide for PVC suction hoses, reinforced braided pipes, and fuel lines across Saurashtra&apos;s leading sectors.
          </p>
        </div>

        {/* Tab Controls with Smooth Animated Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200 max-w-3xl mx-auto">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            const isActive = activeTab === cluster.id;
            return (
              <button
                key={cluster.id}
                type="button"
                onClick={() => setActiveTab(cluster.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-brand-teal shadow-md shadow-brand-teal/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cluster.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Application Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCluster.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Context, Features & Morbi deployment */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Engineered Use Case
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                  {activeCluster.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeCluster.description}
                </p>
              </div>

              {/* Technical Specifications Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-teal" />
                  Key Technical Advantages
                </h4>
                <div className="space-y-2.5">
                  {activeCluster.specHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Authority Context Note */}
              <div className="p-3.5 rounded-xl bg-brand-orange-50/70 border border-brand-orange-200/70 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-orange text-white flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="text-xs text-brand-dark">
                  <span className="font-bold">Regional Distribution: </span>
                  <span>{activeCluster.morbiContext}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Recommended Pipe Models & Quick Links */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Ruler className="w-4 h-4 text-brand-orange" />
                Recommended Pipe Models
              </h4>

              <div className="space-y-3">
                {activeCluster.recommendedPipes.map((pipe, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">{pipe.name}</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-brand-teal-50 text-brand-teal">
                        {pipe.sizes}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{pipe.benefit}</p>
                    <div className="pt-1">
                      <Link
                        to={`/products?category=${pipe.categorySlug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-orange hover:text-brand-orange-600 transition-colors"
                      >
                        <span>View available sizes</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  to="/products"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full justify-center font-bold shadow-orange-glow"
                >
                  Browse Full Specifications Catalogue
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};
