import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { companyData } from '@/data/company';
import { buildWhatsAppUrl } from '@/utils/formatters';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Direct WhatsApp chat link to Meet Kundariya
  const chatMessage = 'Hello Meet bhai, I visited Jay Balaji Trading website and would like to enquire about your pipes and wholesale supply.';
  const chatUrl = buildWhatsAppUrl(companyData.whatsappNumber, chatMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Animated Tooltip / Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 bg-slate-900/95 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-sm border border-slate-700/60 pointer-events-none whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat with Meet Kundariya (+91 99749 28731)</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button matching Image 2 */}
      <motion.a
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Meet Kundariya"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#168039] hover:bg-[#12682e] text-white shadow-[0_8px_25px_rgba(22,128,57,0.45)] hover:shadow-[0_12px_30px_rgba(22,128,57,0.6)] transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Animated Highlight Radar Ping Rings */}
        <span className="absolute -inset-1 rounded-2xl bg-emerald-400 opacity-60 animate-ping pointer-events-none -z-10" />
        <span className="absolute -inset-2 rounded-2xl bg-emerald-500/20 animate-pulse pointer-events-none -z-10" />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" />

        {/* Online Status Beacon Indicator */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow-sm" />
      </motion.a>
    </div>
  );
};
