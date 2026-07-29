import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface CeremonyDetailsProps {
  event?: string;
}

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 w-full max-w-[560px] bg-white p-8 md:p-14 shadow-[0_30px_70px_-15px_rgba(176,137,104,0.2)] border border-brand-beige/50 flex flex-col items-center justify-center text-center mx-auto"
      >
        <div className="absolute inset-2 border-[0.5px] border-brand-beige-deep/30 pointer-events-none"></div>
        <div className="space-y-6 w-full text-left">
          <div className="flex items-center gap-4">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-brand-beige-deep/80 whitespace-nowrap">
              The Reception
            </span>
            <div className="h-px flex-1 bg-brand-beige-deep/30"></div>
          </div>
          
          <div className="flex flex-col mt-2">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-playball text-stone-800 leading-[1.2] text-left">
              A Celebration of <br/>
              <span className="text-brand-beige-deep ml-0 sm:ml-6 md:ml-12">Love, Joy &amp; Togetherness</span>
            </h3>
          </div>

          <p className="text-[13px] md:text-[15px] text-stone-500 font-serif leading-loose pt-4 text-justify sm:text-left">
            We are delighted to invite you to our Wedding Reception at <span className="italic text-stone-700 font-semibold">Suriya Resort, Waikkal</span>, where we will celebrate the beginning of our journey as husband and wife, surrounded by the love, blessings, and cherished company of our family and friends.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 w-full text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-brand-beige-deep/20 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-brand-beige-deep" />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-beige-deep/40 font-cinzel">Date</div>
              <div className="text-sm md:text-base text-brand-beige-deep font-cinzel tracking-wide font-bold">Saturday, 26 December 2026</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-brand-beige-deep/20 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-brand-beige-deep" />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-beige-deep/40 font-cinzel">Church Ceremony</div>
              <div className="text-sm md:text-base text-brand-beige-deep font-cinzel tracking-wide font-bold">Our Lady of Sorrows church, Nainamadama</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-brand-beige-deep/20 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-brand-beige-deep" />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-beige-deep/40 font-cinzel">Reception</div>
              <div className="text-sm md:text-base text-brand-beige-deep font-cinzel tracking-wide font-bold">Suriya resort, Waikkal</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
