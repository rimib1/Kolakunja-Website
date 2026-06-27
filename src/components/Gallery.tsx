import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Eye, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [filter, setFilter] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ['All', 'Stage Performances', 'Workshops', 'Student Achievements', 'Festivals'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#1b0116] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#D4AF37] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-2 block">
            Visual Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF9F6] tracking-tight">
            Moments from Kolakunja
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#FAF9F6]/80 font-sans font-light mt-4">
            A glimpse into our stage performances, national level festivals, professional workshops, and milestones.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition duration-300 tracking-wide cursor-pointer ${
                filter === cat
                  ? 'bg-[#D4AF37] text-[#1b0116] shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-[#2e0527] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 text-[#FAF9F6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Masonry Gallery */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`break-inside-avoid mb-6 group relative bg-[#2e0527] rounded-lg overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 ${
                  item.id === 'g6'
                    ? 'border-2 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)] animate-pulse ring-2 ring-[#D4AF37]/60'
                    : 'border border-[#D4AF37]/15'
                }`}
                onClick={() => setLightboxImage(item.image)}
              >
                {/* Custom Ongoing Badge for poster-1 (g6) */}
                {item.id === 'g6' && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white font-sans font-black text-[9px] sm:text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] z-20 flex items-center gap-1.5 animate-bounce">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Admission Going On!
                  </div>
                )}

                {/* Image (Unforced original aspect ratio) */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-[#1b0116]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" id={`gallery-item-${item.id}`}>
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#1b0116] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition duration-300">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-screen Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] z-10 overflow-hidden rounded-lg shadow-2xl border border-[#D4AF37]/45"
              id="gallery-lightbox"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-[#1b0116] text-white transition duration-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightboxImage}
                alt="Enlarged gallery performance moment"
                className="w-full h-auto max-h-[85vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
