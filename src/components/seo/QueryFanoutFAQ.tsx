import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { companyData } from '@/data/company';
import { formatTelLink } from '@/utils/formatters';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    category: 'Brand & Regional Identity',
    question: 'Who is the leading wholesale supplier of Best Pipes in Morbi, Gujarat?',
    answer:
      'Jay Balaji Trading (widely recognized as JBT, and commonly referred to as Jay Bajarang Treding) is the premier wholesale distributor of high-performance PVC pipes in Morbi, Gujarat. Directed by Meet Kundariya (+91 99749 28731), JBT supplies heavy-duty suction pipes, reinforced braided garden hoses, fuel-resistant petrol pipes, and metallic spiral pipes to ceramic factories, agricultural dealers, and contractors across Saurashtra and Gujarat.',
  },
  {
    category: 'Brand & Regional Identity',
    question: 'Are JBT, Jay Balaji Trading, and Jay Bajarang Treding the same entity?',
    answer:
      'Yes, absolutely. Jay Balaji Trading is the formal enterprise name, JBT is the registered trademark brand mark, and Jay Bajarang Treding is the phonetic and regional Gujarati spelling variation used by local buyers. When you search for JBT, Jay Balaji Trading, or Jay Bajarang Treding, you are connecting directly with Meet Kundariya at our Morbi facility.',
  },
  {
    category: 'Product Specifications',
    question: 'What sizes of PVC suction pipe are available for borewells and agricultural pumps?',
    answer:
      'Jay Balaji Trading stocks an extensive diameter range from 3/4" up to 6" for suction hoses. Standard diameters include 3/4", 1", 1 1/4", 1 1/2", 2", 2 1/2", 3", 3 1/2", 4", 4 1/2", 5", 5 1/2", and 6". Each size is supplied in standard packaged coils of 30 metres or 50 metres, with bundle weights ranging from 5.5 kg up to 72 kg depending on diameter and wall thickness.',
  },
  {
    category: 'Industrial Applications',
    question: 'Why are JBT heavy-duty suction pipes preferred for Morbi ceramic factories?',
    answer:
      'Morbi ceramic tile and sanitaryware manufacturing units require continuous vacuum pumping of heavy abrasive clay slip, glaze wash, and factory wastewater. JBT heavy-duty green suction pipes feature rigid PVC spiral reinforcement ribs that prevent wall collapse under deep negative vacuum pressure, while providing smooth inner bores to prevent sediment clogging.',
  },
  {
    category: 'Product Specifications',
    question: 'What makes reinforced braided pipe superior to standard garden water hoses?',
    answer:
      'Standard unreinforced garden hoses often swell, kink, or burst under booster pump pressure or hot daytime temperatures. JBT braided pipes incorporate high-tenacity cross-braided polyester yarn embedded between virgin PVC layers. This reinforcement delivers high burst pressure endurance while retaining supple flexibility for landscaping, construction curing, and factory wash-down.',
  },
  {
    category: 'Product Specifications',
    question: 'Can JBT flexible petrol pipe be safely used for diesel and generator fuel lines?',
    answer:
      'Yes. Our petrol pipes are manufactured with specialized hydrocarbon-resistant plasticizers that resist hardening, embrittlement, and swelling from regular contact with diesel, petrol, and light oils. The crystal translucent construction allows operators to visually inspect fuel flow and detect airlocks instantly.',
  },
  {
    category: 'Wholesale & Orders',
    question: 'What standard coil lengths and bundle packaging are supplied for wholesale orders?',
    answer:
      'Standard coil packaging is 30 metres and 50 metres per bundle, securely strapped for long-distance transport. Approximate coil weights are clearly published for each product specification (e.g., 3/4" braided pipe is ~5.5 kg per 30m, 2" suction is ~19.5 kg, 4" suction is ~40 kg, and 6" suction is ~72 kg). Custom lengths can be arranged for bulk dealer shipments.',
  },
  {
    category: 'Wholesale & Orders',
    question: 'How do I place a bulk order or request quotation directly from Meet Kundariya?',
    answer:
      'You can reach Meet Kundariya directly via call or WhatsApp at +91 99749 28731. We provide instant wholesale quotes, GST invoices, technical specification sheets, and facilitate prompt road transport dispatch from Morbi across Gujarat and pan-India.',
  },
];

export const QueryFanoutFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  // Structured Data Schema for Google FAQPage Rich Results (Query Fanout Engine)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      {/* Dynamic Google FAQPage Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container size="xl" className="space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange-50 text-brand-orange border border-brand-orange-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Search Query Fanout & Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Frequently Asked Pipe Questions & Buyer Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Essential answers on pipe specifications, Morbi ceramic &amp; agricultural usage, wholesale packaging, and direct ordering with Meet Kundariya.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-brand-teal/40 bg-brand-teal-50/20 shadow-soft'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center mt-0.5 sm:mt-0">
                      {idx + 1}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? 'bg-brand-teal text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout Banner */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-brand-teal-950 to-brand-teal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft-lg border border-brand-teal-800">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need Custom Coil Sizing or Bulk Transport?</span>
            </div>
            <p className="text-xs sm:text-sm text-brand-teal-100">
              Speak directly with Meet Kundariya for distributor rates and doorstep Morbi dispatch.
            </p>
          </div>
          <Button
            href={formatTelLink(companyData.contacts[0].phone)}
            variant="primary"
            size="md"
            icon={<PhoneCall className="w-4 h-4" />}
            className="w-full sm:w-auto font-bold shadow-orange-glow shrink-0"
          >
            Call +91 99749 28731
          </Button>
        </div>
      </Container>
    </section>
  );
};
