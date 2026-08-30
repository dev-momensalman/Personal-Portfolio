import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const openTimer = setTimeout(() => {
        setIsOpening(true);
      }, 300);

      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1200);

      return () => {
        clearTimeout(openTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center select-none">
      {/* Left Gate Door */}
      <motion.div
        className="w-1/2 h-full bg-[#171c1f] border-r border-[#00b4d8]/30 flex items-center justify-end pr-4 sm:pr-12 relative shadow-2xl z-20"
        initial={{ x: '0%' }}
        animate={{ x: isOpening ? '-100%' : '0%' }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
      >
        {/* Subtle Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <motion.span
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white tracking-tighter"
          animate={{ opacity: isOpening ? 0 : 1, x: isOpening ? -60 : 0 }}
          transition={{ duration: 0.4 }}
        >
          MOMEN
        </motion.span>
      </motion.div>

      {/* Right Gate Door */}
      <motion.div
        className="w-1/2 h-full bg-[#171c1f] border-l border-[#00b4d8]/30 flex items-center justify-start pl-4 sm:pl-12 relative shadow-2xl z-20"
        initial={{ x: '0%' }}
        animate={{ x: isOpening ? '100%' : '0%' }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
      >
        {/* Subtle Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <motion.span
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold gradient-text tracking-tighter"
          animate={{ opacity: isOpening ? 0 : 1, x: isOpening ? 60 : 0 }}
          transition={{ duration: 0.4 }}
        >
          SALMAN
        </motion.span>
      </motion.div>

      {/* Center Portal Core & Progress Indicator */}
      <motion.div
        className="absolute z-30 flex flex-col items-center justify-center pointer-events-none"
        animate={{
          scale: isOpening ? 1.6 : 1,
          opacity: isOpening ? 0 : 1,
          filter: isOpening ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Rotating Futuristic Emblem */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00b4d8]/60 animate-[spin_8s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-[#00677d]/40 animate-[spin_5s_linear_infinite_reverse]" />
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#00677d] via-[#00b4d8] to-[#4cd6fb] flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-xl glow">
            MS
          </div>
        </div>

        {/* Progress Counter & Status */}
        <div className="text-center font-mono">
          <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-wider">
            {progress}%
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#00b4d8] font-sans font-semibold">
            {progress < 100 ? 'Initializing Portal...' : 'Access Granted • Opening'}
          </p>
        </div>

        {/* Progress Bar Line */}
        <div className="w-48 sm:w-64 h-1.5 bg-white/10 rounded-full mt-5 overflow-hidden relative border border-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00677d] via-[#00b4d8] to-[#4cd6fb]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
}
