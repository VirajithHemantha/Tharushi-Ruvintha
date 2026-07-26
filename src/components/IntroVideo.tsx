import { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
  onMusicStart?: () => void;
  event?: string | null;
  readyToTransition?: boolean;
}

export function IntroVideo({ onComplete, onMusicStart, readyToTransition = true }: IntroVideoProps) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleStart = () => {
    setStarted(true);
    if (onMusicStart) onMusicStart();
    // Play video
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  const handleVideoEnded = () => {
    onComplete();
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
    >
      {!started && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#e9e2d8] p-4 text-center">
          <div className="mb-10 font-serif">
            <h1 className="text-4xl md:text-6xl text-[#3d2e1f] mb-4" style={{ fontFamily: '"Great Vibes", cursive' }}>Tharushi & Ruvintha</h1>
            <p className="text-[#b08968] tracking-[0.3em] uppercase text-xs md:text-sm" style={{ fontFamily: '"Montserrat", sans-serif' }}>Promise of Love</p>
          </div>
          
          <button 
            onClick={handleStart}
            disabled={!readyToTransition}
            className={`px-10 py-4 border border-[#c9a96e] text-[#8b6f47] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-white transition-all duration-500 rounded-sm shadow-sm ${!readyToTransition ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:shadow-md hover:-translate-y-1'}`}
          >
            {readyToTransition ? 'View Invitation' : 'Loading...'}
          </button>
        </div>
      )}
      
      <video
        ref={videoRef}
        src="/intro_video.mp4"
        className="w-full h-full object-cover"
        playsInline
        onEnded={handleVideoEnded}
      />
    </motion.div>
  );
}
