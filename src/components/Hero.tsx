import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { FloatingPetals } from './FloatingPetals';

interface HeroProps {
  event?: string | null;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  return touch;
}

export const Hero: React.FC<HeroProps> = ({ event = 'both' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const useParallax = !reducedMotion && !isTouch;

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-brand-ivory/30">
      <motion.div
        className="absolute inset-0 z-0 origin-center bg-cover bg-center grayscale"
        style={{ 
          backgroundImage: 'url("/images/WhatsApp Image 2026-07-16 at 20.09.13.jpeg")',
          ...(useParallax ? { y: y1, scale } : {})
        }}
      >
        {/* Subtle dark overlay to ensure text remains readable against the black and white image */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0 z-[5] opacity-70">
        <FloatingPetals />
      </div>



      <div className="absolute inset-5 sm:inset-8 border-[0.5px] border-brand-gold/30 rounded-3xl pointer-events-none z-20 hidden sm:block" />
      <div className="absolute inset-6 sm:inset-9 border-[0.5px] border-brand-gold/15 rounded-[1.3rem] pointer-events-none z-20 hidden sm:block" />

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl -mt-32 sm:mt-16"
        style={useParallax ? { opacity } : undefined}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="mb-2 sm:mb-4 inline-block px-6 sm:px-10 py-2.5 sm:py-3 bg-white/40 backdrop-blur-sm border border-brand-gold/50 rounded-full shadow-[0_4px_15px_rgba(131,130,110,0.1)]">
            <span className="text-stone-900 uppercase tracking-[0.6em] sm:tracking-[0.8em] text-[9px] sm:text-xs font-black block font-sans drop-shadow-sm">
              The Celebration of Love
            </span>
          </div>

          {/* Upper Divider */}
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-10 w-full max-w-[280px]">
            <div className="h-[0.5px] flex-1 bg-brand-gold/60" />
            <div className="w-1 h-1 rounded-full bg-brand-gold/60" />
            <Heart className="w-3.5 h-3.5 text-brand-gold stroke-[1.5]" />
            <div className="w-1 h-1 rounded-full bg-brand-gold/60" />
            <div className="h-[0.5px] flex-1 bg-brand-gold/60" />
          </div>

          <div className="relative mb-2 sm:mb-12 w-full flex justify-center py-2 sm:py-10 px-2 overflow-visible">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[125%] h-[150%] sm:h-[160%] bg-gradient-radial from-brand-ivory/80 via-brand-ivory/50 to-transparent blur-[40px] sm:blur-[70px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center justify-center w-full relative z-10">
              <h1 className="text-[5rem] sm:text-[9rem] lg:text-[12rem] font-display text-brand-mocha font-extrabold leading-none tracking-normal sm:tracking-tight drop-shadow-sm py-2">
                Tharushi
              </h1>
              
              {/* Ampersand Divider */}
              <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-[280px] sm:max-w-md my-4 sm:my-8 relative z-10">
                <div className="h-[0.5px] flex-1 bg-brand-gold/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-brand-mocha flex items-center justify-center shadow-lg border border-brand-gold/40">
                  <span className="text-brand-ivory italic font-light text-3xl sm:text-5xl font-serif translate-y-px">&amp;</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                <div className="h-[0.5px] flex-1 bg-brand-gold/60" />
              </div>

              <h1 className="text-[5rem] sm:text-[9rem] lg:text-[12rem] font-display text-brand-mocha font-extrabold leading-none tracking-normal sm:tracking-tight drop-shadow-sm py-2">
                Ruvintha
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-2 sm:mb-6 relative z-10 px-8 py-2 sm:py-3 mt-0">
            <p className="text-[1.15rem] sm:text-2xl font-serif italic text-stone-900 font-bold tracking-wide px-2 text-center max-w-xl leading-relaxed">
              Two souls, one heart, united in God's love forever.
            </p>
          </div>

          {/* Lower Decorative Divider */}
          <div className="flex items-center justify-center gap-1 mb-2 sm:mb-14 w-full max-w-[280px] relative z-10">
             <div className="h-[0.5px] w-8 sm:w-12 bg-brand-gold/60" />
             <div className="w-1.5 h-1.5 rounded-full border border-brand-gold/60" />
             <div className="h-[0.5px] w-12 sm:w-20 bg-brand-gold/60" />
             <Heart className="w-4 h-4 text-brand-gold stroke-[1] fill-brand-gold/30 mx-1" />
             <div className="h-[0.5px] w-12 sm:w-20 bg-brand-gold/60" />
             <div className="w-1.5 h-1.5 rounded-full border border-brand-gold/60" />
             <div className="h-[0.5px] w-8 sm:w-12 bg-brand-gold/60" />
          </div>

          {/* Elegant Date Pill */}
          <div className="inline-block relative group -mt-2 sm:mt-2 w-full sm:w-auto px-4 sm:px-0">
            <div className="relative px-12 sm:px-20 py-3 sm:py-4 whitespace-nowrap flex items-center justify-center border border-brand-gold bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-[0_4px_20px_rgba(131,130,110,0.2)] transition-transform duration-500 group-hover:scale-[1.02]">
              <span className="relative text-[18px] sm:text-2xl font-serif text-stone-900 tracking-[0.4em] sm:tracking-[0.6em] font-bold flex items-center whitespace-nowrap drop-shadow-sm">
                26 . 12 . 2026
              </span>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-transparent px-2">
              <Heart className="w-3 h-3 text-brand-gold fill-brand-gold stroke-none" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-30">
        <div className="w-[1px] h-28 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="bg-stone-900/90 backdrop-blur-md px-2.5 py-6 rounded-full border border-brand-gold/40 shadow-xl">
          <p className="writing-mode-vertical text-[11px] uppercase tracking-[0.7em] text-brand-champagne font-bold font-sans">
            Suriya Resort • Waikkal
          </p>
        </div>
        <div className="w-[1px] h-28 bg-gradient-to-t from-transparent via-brand-gold to-transparent" />
      </div>

      <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-30">
        <div className="w-[1px] h-28 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="bg-stone-900/90 backdrop-blur-md px-2.5 py-6 rounded-full border border-brand-gold/40 shadow-xl">
          <p className="writing-mode-vertical text-[11px] uppercase tracking-[0.7em] text-brand-champagne font-bold font-sans rotate-180">
            Save the Date • Dec 2026
          </p>
        </div>
        <div className="w-[1px] h-28 bg-gradient-to-t from-transparent via-brand-gold to-transparent" />
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.6em] text-stone-900 font-bold px-5 py-2">
          Discover
        </span>
        <div className="w-px h-10 sm:h-16 bg-gradient-to-b from-brand-gold to-transparent animate-bounce" />
      </motion.div>
    </div>
  );
};
