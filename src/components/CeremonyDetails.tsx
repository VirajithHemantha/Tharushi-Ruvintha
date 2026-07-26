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
        <div className="space-y-5 mb-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-brand-beige-deep/50">Bride</span>
            <h3 className="text-5xl md:text-7xl font-playball text-brand-beige-deep leading-none">Tharushi</h3>
          </div>
        </div>
        <div className="py-2 flex items-center justify-center w-full relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-brand-beige/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 font-playball text-4xl text-brand-beige-deep">With</span>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-brand-beige-deep/50">Groom</span>
            <h3 className="text-5xl md:text-7xl font-playball text-brand-beige-deep leading-none">Ruvintha</h3>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 w-full text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-brand-beige-deep/20 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-brand-beige-deep" />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-beige-deep/40 font-cinzel">Date</div>
              <div className="text-sm md:text-base text-brand-beige-deep font-cinzel tracking-wide font-bold">Wednesday, 22 July 2026</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-brand-beige-deep/20 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-brand-beige-deep" />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-beige-deep/40 font-cinzel">Church Ceremony</div>
              <div className="text-sm md:text-base text-brand-beige-deep font-cinzel tracking-wide font-bold">4:00 PM at Our Lady of Sorrows church, Nainamadama</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-brand-beige-deep/20 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-brand-beige-deep" />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-beige-deep/40 font-cinzel">Reception</div>
              <div className="text-sm md:text-base text-brand-beige-deep font-cinzel tracking-wide font-bold">7:00 PM at Suriya resort, Waikkal</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
