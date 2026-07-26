import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-16 space-y-6"
      >
        <div className="flex items-center gap-4 opacity-70">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-beige-deep/60"></div>
          <Sparkles className="w-5 h-5 text-brand-beige-deep" />
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-beige-deep/60"></div>
        </div>
        <div className="text-brand-beige-deep space-y-4 text-center">
          <div className="space-y-4 mb-8">
            <p className="font-cinzel text-[11px] md:text-sm tracking-[0.4em] mb-2 uppercase font-bold drop-shadow-sm">Two Families Join Hands</p>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm md:text-base font-cinzel tracking-wider text-stone-700">Mr. Lesly &amp; Mrs. Chintha</span>
              <span className="font-playball text-3xl text-brand-beige-deep italic my-2">Together with</span>
              <span className="text-sm md:text-base font-cinzel tracking-wider text-stone-700">Mr. Sunil &amp; Mrs. Priyanka</span>
            </div>
          </div>
          <p className="text-[10px] md:text-[13px] text-stone-600 tracking-[0.2em] md:tracking-[0.4em] uppercase font-medium leading-loose max-w-3xl border-t border-b border-brand-beige/30 py-6 px-4">
            With hearts full of love, we request the honour of the presence of<br/>
            <span className="text-brand-beige-deep font-bold text-xs md:text-sm my-2 block">Our Honored Guests</span>
            to celebrate the joyous marriage of our children<br/>
            <span className="text-brand-beige-deep font-bold text-lg md:text-2xl my-2 block font-playball">Tharushi &amp; Ruvintha</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="relative px-4 sm:px-0 flex-shrink-0 group mx-auto w-fit"
      >
        <div className="absolute -inset-2 bg-gradient-to-b from-brand-beige-deep/30 to-transparent rounded-[12rem_12rem_1rem_1rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative w-[300px] h-[400px] sm:w-[380px] sm:h-[500px] lg:w-[460px] lg:h-[600px] rounded-[12rem_12rem_16px_16px] overflow-hidden border-[6px] border-white/90 shadow-[0_20px_50px_rgba(176,137,104,0.2)] bg-brand-champagne mx-auto z-10 transition-transform duration-700 group-hover:-translate-y-2">
          <img
            src="/images/WhatsApp Image 2026-07-16 at 20.09.10.jpeg"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800&h=1000";
              e.currentTarget.onerror = null;
            }}
            alt="Tharushi and Ruvintha"
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-beige-deep/30 to-transparent pointer-events-none mix-blend-overlay" />
        </div>

        <Sparkles className="absolute top-8 left-0 w-8 h-8 text-brand-gold animate-pulse drop-shadow-sm z-20" />
        <Sparkles className="absolute bottom-10 -right-4 w-6 h-6 text-brand-beige animate-pulse delay-300 drop-shadow-sm z-20" />
      </motion.div>
    </div>
  );
};

