import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, Map } from 'lucide-react';

const locations = [
  {
    venueName: "Our Lady of Sorrows church",
    venueCity: "Nainamadama",
    liveLocationUrl: "https://maps.app.goo.gl/8uv9TwqfbNusp2gf6",
    mapUrl: "https://maps.google.com/maps?q=Our%20Lady%20of%20Sorrows%20church,%20Nainamadama&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    venueName: "Suriya resort",
    venueCity: "Waikkal",
    liveLocationUrl: "https://maps.app.goo.gl/ZrDyRbezmFdCG6Tn7",
    mapUrl: "https://maps.google.com/maps?q=Suriya%20Resort,%20Waikkal&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export const Location: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 relative py-8 sm:py-12 flex flex-col gap-12 sm:gap-24">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-brand-beige/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-brand-beige/20 to-transparent blur-3xl pointer-events-none -z-10" />

      {locations.map((loc, index) => (
        <motion.div 
          key={loc.venueName}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full z-20"
        >
          <div className="bg-white/90 backdrop-blur-2xl p-8 sm:p-12 lg:p-14 rounded-[2.5rem] shadow-[0_30px_60px_rgba(176,137,104,0.15)] border border-brand-beige/30 relative overflow-hidden group">
            
            {/* Elegant top border gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-champagne via-brand-beige to-brand-beige-deep" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="text-brand-beige-deep uppercase tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                  {index === 0 ? "The Ceremony" : "The Reception"}
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-brand-beige-deep/60 to-transparent" />
              </div>

              <h2 className="text-5xl sm:text-6xl font-display text-stone-800 mb-6 leading-tight drop-shadow-sm">
                Where We <br />
                <span className="italic font-light text-brand-beige-deep">Celebrate</span>
              </h2>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10 mb-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-stone-50 rounded-full border border-brand-beige/40 shadow-inner flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="text-brand-beige-deep w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-serif text-stone-800 mb-1">{loc.venueName}</p>
                    <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-stone-400 leading-relaxed">{loc.venueCity}</p>
                  </div>
                </div>

                <a
                  href={loc.liveLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-stone-800 text-brand-champagne px-8 py-4 rounded-full font-sans tracking-[0.2em] text-xs uppercase hover:bg-stone-900 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 active:scale-95 group/btn w-full sm:w-auto"
                >
                  <Navigation className="w-4 h-4 text-brand-gold group-hover/btn:rotate-45 transition-transform duration-300" />
                  Open Live Location
                </a>
              </div>

              {/* Embedded Map inside the card layout */}
              <div className="w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border-[4px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative group/map">
                <div className="absolute inset-0 bg-brand-beige/10 mix-blend-multiply pointer-events-none z-20 group-hover/map:opacity-0 transition-opacity duration-1000" />
                
                <iframe
                  title={`${loc.venueName} Location`}
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover/map:grayscale-0 transition-all duration-1000 ease-in-out"
                />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-brand-beige/30 shadow-md flex items-center gap-2 pointer-events-none z-30">
                  <Map className="w-3.5 h-3.5 text-brand-beige-deep animate-pulse" />
                  <span className="text-[8px] uppercase tracking-widest font-bold text-stone-600">Map View</span>
                </div>
              </div>

            </div>

            {/* Faint background compass icon */}
            <Compass className="absolute -bottom-16 -right-16 w-64 h-64 text-brand-beige/5 rotate-12 group-hover:rotate-45 transition-transform duration-[3s]" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
