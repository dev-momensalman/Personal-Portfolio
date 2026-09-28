import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check } from 'lucide-react';
import { toast } from 'sonner';

interface ShareButtonProps {
  variant?: 'primary' | 'secondary' | 'compact';
  className?: string;
}

export default function ShareButton({ variant = 'secondary', className = '' }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Momen Salman | Mobile App Developer',
      text: 'Explore the portfolio, projects, and verified credentials of Momen Salman (Flutter & Mobile Developer).',
      url: 'https://www.momen.info/',
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast.success('Portfolio shared successfully!');
        return;
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          // fallback to clipboard
        } else {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText('https://www.momen.info/');
      setCopied(true);
      toast.success('Portfolio link copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error('Could not copy link to clipboard.');
    }
  };

  if (variant === 'compact') {
    return (
      <motion.button
        type="button"
        onClick={handleShare}
        aria-label="Share Portfolio"
        title="Share Portfolio"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={`w-10 h-10 rounded-full bg-white/90 border border-[#bcc9ce]/60 hover:border-[#00b4d8] text-[#3d494d] hover:text-[#00677d] shadow-sm flex items-center justify-center transition-colors ${className}`}
      >
        {copied ? <Check size={18} className="text-emerald-600" /> : <Share2 size={18} />}
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={handleShare}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`px-5 py-3 rounded-full border border-[#bcc9ce]/60 bg-white/90 hover:bg-white hover:border-[#00b4d8] text-[#3d494d] hover:text-[#00677d] font-semibold text-sm shadow-sm flex items-center justify-center gap-2 transition-colors ${className}`}
    >
      {copied ? <Check size={18} className="text-emerald-600" /> : <Share2 size={18} />}
      <span>{copied ? 'Link Copied!' : 'Share Portfolio'}</span>
    </motion.button>
  );
}
