import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Users, Heart, GraduationCap, Calendar, Sparkles, ChevronLeft, ChevronRight, Instagram, Youtube } from 'lucide-react';

// Import images as ES modules so Vite compiles/hashes them for production
import rimi_b6 from '../assets/images/rimi_b6.jpg';
import rimi_b2 from '../assets/images/rimi_b2.jpg';

export default function About() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const principalPhotos = [
    {
      url: rimi_b6,
      alt: 'Rimi Bhowal - Principal of Kolakunja Dance Academy'
    },
    {
      url: rimi_b2,
      alt: 'Rimi Bhowal - Classical Odissi Performance'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % principalPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [principalPhotos.length]);

  const handleNext = () => {
    setCurrentPhoto((prev) => (prev + 1) % principalPhotos.length);
  };

  const handlePrev = () => {
    setCurrentPhoto((prev) => (prev - 1 + principalPhotos.length) % principalPhotos.length);
  };

  const stats = [
    { label: 'Followers & Students', value: '6.1K+', icon: Users, description: 'Dedicated and growing community' },
    { label: 'Academy Established', value: 'June 2023', icon: Calendar, description: 'Nurturing dance since inception' },
    { label: 'Core Specializations', value: 'Kathak & Odissi', icon: Award, description: 'Pristine classical techniques' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#1a0505] to-[#260808] text-[#FAF9F6] relative overflow-hidden">
      {/* Background Ornament Accents */}
      <div className="absolute inset-0 opacity-10 bg-radial-pattern bg-cover pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-2 block">
            Guiding Light of Kolakunja
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Meet Our Principal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative group max-w-sm sm:max-w-md w-full"
            >
              {/* Outer Golden Border Effect */}
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-2xl transform translate-x-4 translate-y-4 transition duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
              
              {/* Image Frame with Overlay */}
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl border border-[#D4AF37]/30 bg-[#1a0505]">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentPhoto}
                    src={principalPhotos[currentPhoto].url}
                    alt={principalPhotos[currentPhoto].alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0505]/85 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#1a0505]/60 hover:bg-[#D4AF37] text-white hover:text-[#1a0505] flex items-center justify-center transition border border-[#D4AF37]/30 hover:border-[#D4AF37] opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                  aria-label="Previous image"
                  title="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#1a0505]/60 hover:bg-[#D4AF37] text-white hover:text-[#1a0505] flex items-center justify-center transition border border-[#D4AF37]/30 hover:border-[#D4AF37] opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                  aria-label="Next image"
                  title="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center space-x-2 pointer-events-auto">
                  {principalPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => { e.stopPropagation(); setCurrentPhoto(index); }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentPhoto === index
                          ? 'bg-[#D4AF37] scale-125'
                          : 'bg-white/40 hover:bg-white/75'
                      }`}
                      title={`Show photo ${index + 1}`}
                      aria-label={`Show photo ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Embedded Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1a0505]/95 backdrop-blur-md border border-[#D4AF37]/30 p-3.5 rounded-lg z-20 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#D4AF37]">Rimi Bhowal</h3>
                    <p className="text-[11px] font-sans text-[#FAF9F6]/80 font-medium tracking-wide">
                      Owner & Principal, Kolakunja Dance Academy
                    </p>
                  </div>
                  <div className="flex space-x-2 flex-shrink-0">
                    <a
                      href="https://www.instagram.com/bhowalrimi/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1a0505] flex items-center justify-center border border-[#D4AF37]/20 transition duration-300"
                      title="Follow on Instagram"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@RimiBhowalDancer"
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1a0505] flex items-center justify-center border border-[#D4AF37]/20 transition duration-300"
                      title="Subscribe on YouTube"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Column (7 columns) */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 text-[#D4AF37]">
                <GraduationCap className="w-6 h-6" />
                <span className="font-sans font-medium tracking-wider text-sm sm:text-base uppercase">
                  Alumna, University of Calcutta
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Nurturing the Devotion and Passion for Classical Traditions
              </h3>
              
              <p className="text-[#FAF9F6]/80 text-sm sm:text-base leading-relaxed font-sans font-light">
                Since founding Kolakunja Dance Academy in <strong>June 2023</strong>, 
                <strong> Rimi Bhowal</strong> has dedicated her artistic journey to imparting 
                the pristine heritage of classical Indian dance. Rooted in her prestigious educational 
                credentials from the <strong>University of Calcutta</strong>, her instruction goes 
                beyond technique—teaching dance as a spiritual discipline, an expression of storytelling, 
                and a path to physical excellence.
              </p>

              <p className="text-[#FAF9F6]/80 text-sm sm:text-base leading-relaxed font-sans font-light">
                Under her guidance, Kolakunja has blossomed into a recognized cultural institution where 
                the ancient traditions of <strong>Kathak</strong> and <strong>Odissi</strong> meet 
                modern creativity. Rimi believes in cultivating the spark of dance in every student, from 
                young children taking their first steps to advanced performers seeking mastery in rhythm, 
                expression (Abhinaya), and sculpturesque grace.
              </p>
            </motion.div>

            {/* Stats Dashboard Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-[#2d0a0a]/50 border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 p-4 rounded-xl transition duration-300 shadow-lg flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-3">
                    <stat.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-sans text-[#FAF9F6]/90 font-semibold mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[10px] font-sans text-[#FAF9F6]/60 mt-0.5 leading-tight">
                    {stat.description}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quote of the Principal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="border-l-4 border-[#D4AF37] pl-4 py-1 italic text-[#FAF9F6]/90 text-sm font-serif leading-relaxed bg-[#D4AF37]/5 rounded-r"
            >
              "Dance is not just movement; it is a sacred offering, a conversation between the soul and the divine. At Kolakunja, we don't just teach steps, we nurture a lifelong passion."
              <span className="block mt-1.5 font-sans font-semibold text-[11px] uppercase tracking-wider text-[#D4AF37]">— Principal Rimi Bhowal</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
