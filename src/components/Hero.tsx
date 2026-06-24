import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, BookOpen } from 'lucide-react';

// Import images as ES modules so Vite compiles/hashes them for production
import poster1 from '../assets/images/poster-1.jpg';
import rimi_b3 from '../assets/images/rimi_b3.jpg';
import rimi_b4 from '../assets/images/rimi_b4.jpg';
import rimi_b5 from '../assets/images/rimi_b5.jpg';
import poster_ from '../assets/images/poster_.jpg';

interface HeroProps {
  onOpenInquiry: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: poster1,
      alt: 'Kolakunja Classical Dance Academy Stage Event Poster'
    },
    {
      url: rimi_b3,
      alt: 'Rimi Bhowal Performing Graceful Kathak/Odissi'
    },
    {
      url: rimi_b4,
      alt: 'Rimi Bhowal - Classical Mudras Showcase'
    },
    {
      url: rimi_b5,
      alt: 'Rimi Bhowal performing on Stage with traditional jewelry'
    },
    {
      url: poster_,
      alt: 'Kolakunja Dance Academy Cultural Festival Poster'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].url}
            alt={slides[currentSlide].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full object-cover object-center absolute inset-0"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0505] via-[#1a0505]/75 to-black/80 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80 z-10 pointer-events-none" />
      </div>

      {/* Slide Indicators / Navigation Dots */}
      <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center space-x-3 pointer-events-auto">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index
                ? 'bg-[#D4AF37] scale-125 shadow-[0_0_8px_rgba(212,175,55,0.8)]'
                : 'bg-white/30 hover:bg-white/60'
            }`}
            title={`Go to slide ${index + 1}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 sm:pt-16 pb-20">
        {/* Sanskrit/Devanagari style aesthetic label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] text-[#D4AF37] font-semibold uppercase">
            WHERE STEP MEETS PASSION...
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight mb-6"
        >
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FAF9F6] to-[#D4AF37]">Tradition</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FAF9F6]">Grace</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#FAF9F6]/85 font-sans font-light leading-relaxed mb-8 px-2"
        >
          Welcome to <strong className="font-semibold text-[#D4AF37] text-glow">Kolakunja Dance Academy</strong>, nurturing the timeless arts of Kathak, Odissi, Folk, and Creative Dance under the guidance of our esteemed Principal Rimi Bhowal.
        </motion.p>

        {/* Founder Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-md mx-auto py-2.5 px-4 mb-10 rounded border border-[#D4AF37]/20 bg-[#1a0505]/60 backdrop-blur-sm"
        >
          <p className="text-xs sm:text-sm font-serif italic text-[#D4AF37]/95 font-medium tracking-wide">
            "Owner of Kolakunja, an institution of Kathak & Odissi"
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            href="#styles"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-[#D4AF37]/50 hover:border-[#D4AF37] bg-[#1a0505]/30 hover:bg-[#D4AF37]/10 text-[#D4AF37] hover:text-white font-sans text-sm font-semibold px-8 py-3.5 rounded shadow-lg transition duration-300 uppercase tracking-wider"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Classes</span>
          </a>
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#D4AF37] text-[#1a0505] font-sans text-sm font-bold tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#FAF9F6] hover:scale-[1.02] transform transition duration-300 uppercase shadow-xl cursor-pointer"
          >
            <span>Admission Inquiry</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Traditional Bottom Wave Border */}
      <div className="absolute bottom-0 left-0 w-full z-10 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px] fill-[#1a0505]"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z" />
        </svg>
      </div>
    </section>
  );
}
