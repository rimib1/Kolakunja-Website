import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, X, Clock, Award, ShieldCheck, HelpCircle } from 'lucide-react';
import { DANCE_STYLES } from '../data';
import { DanceStyle } from '../types';

export default function DanceStyles() {
  const [selectedStyle, setSelectedStyle] = useState<DanceStyle | null>(null);

  // Expanded syllabus and batch info for each style to make it feel deeply rich and realistic
  const getStyleExtraData = (styleId: string) => {
    switch (styleId) {
      case 'kathak':
        return {
          syllabus: ['Tatkar (Intricate Footwork patterns)', 'Chakkars (Rapid pirouettes)', 'Abhinaya (Emotional storytelling)', 'Taals (Rhythmic cycles of Teental, Jhaptal)', 'Kavitt and Thumri expressions'],
          batches: 'As per Schedule',
          ageGroup: 'Kids (5+ years) & Adults (No upper limit)',
          certification: 'Affiliated with Pracheen Kala Kendra, Chandigarh'
        };
      case 'odissi':
        return {
          syllabus: ['Tribhanga & Chowka base stances', 'Mudra Vigyan (28 Single & 24 Double hand gestures)', 'Mangalacharan (Invocational item)', 'Battu Nrutya & Pallavi items', 'Devotional Abhinaya (Gita Govinda)'],
          batches: 'As per Schedule',
          ageGroup: 'Kids (6+ years) & Adults (Intermediate/Advanced)',
          certification: 'Affiliated with Pracheen Kala Kendra, Chandigarh'
        };
      case 'folk':
        return {
          syllabus: ['Rabindra Nritya (Tagore dance compositions)', 'Bengali regional folk forms', 'Festive seasonal dances', 'Group sync & floor coordination', 'Traditional folk drum rhythms'],
          batches: 'As per Schedule',
          ageGroup: 'All age groups welcome',
          certification: 'Academy Performance Certification'
        };
      case 'creative':
        return {
          syllabus: ['Contemporary expression & posture control', 'Traditional-modern fusion choreography', 'Physical theater & storytelling', 'Self-choreography projects', 'Aesthetic spatial awareness'],
          batches: 'As per Schedule',
          ageGroup: 'Teens & Adults (12+ years)',
          certification: 'Academy Performance Certification'
        };
      default:
        return {
          syllabus: [],
          batches: 'As per Schedule',
          ageGroup: 'All ages',
          certification: 'Academy Certification'
        };
    }
  };

  return (
    <section id="styles" className="py-24 bg-[#250320] text-[#FAF9F6] relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] fill-[#1b0116]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-2 block">
            Core Curriculums
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF9F6] tracking-tight">
            Our Dance Styles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#FAF9F6]/80 font-sans font-light mt-4">
            Immerse yourself in structured training modules crafted to preserve classical integrity while embracing contemporary creative bounds.
          </p>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DANCE_STYLES.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-[#1b0116] rounded-lg overflow-hidden shadow-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between"
              id={`style-card-${style.id}`}
            >
              {/* Card Image Header */}
              <div className="relative overflow-hidden bg-purple-950/40 flex items-center justify-center p-2 h-64 sm:h-72">
                <img
                  src={style.image}
                  alt={style.name}
                  className="max-w-full max-h-full object-contain rounded-md transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b0116]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37] tracking-wide">
                    {style.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FAF9F6]/70 font-sans font-light leading-relaxed mt-2 line-clamp-3">
                    {style.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedStyle(style)}
                  className="inline-flex items-center space-x-1.5 text-[#D4AF37] hover:text-white text-xs sm:text-sm font-semibold tracking-wider font-sans group-hover:translate-x-1 transition duration-300 cursor-pointer"
                >
                  <span>Syllabus & Timings</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay for Expanded Details */}
      <AnimatePresence>
        {selectedStyle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStyle(null)}
              className="absolute inset-0 bg-[#1b0116]/90 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-[#1b0116] w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl z-10 border border-[#D4AF37]/35 max-h-[90vh] overflow-y-auto"
              id="style-details-modal"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStyle(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-[#D4AF37] hover:text-[#1b0116] text-white transition duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative h-48 sm:h-64 bg-purple-950">
                <img
                  src={selectedStyle.image}
                  alt={selectedStyle.name}
                  className="w-full h-full object-cover opacity-70"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b0116] via-[#1b0116]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:left-8">
                  <span className="text-[#D4AF37] text-xs sm:text-sm font-sans tracking-[0.2em] uppercase font-semibold">
                    Core Dance Offerings
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF9F6] tracking-wider mt-1">
                    {selectedStyle.name} Module
                  </h3>
                </div>
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#D4AF37] mb-2">Artistic Paradigm</h4>
                  <p className="text-xs sm:text-sm text-[#FAF9F6]/80 font-sans leading-relaxed font-light">
                    {selectedStyle.details}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#D4AF37]/20">
                  {/* Left Column: Syllabus */}
                  <div className="space-y-3">
                    <h5 className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] flex items-center space-x-2">
                      <Award className="w-4 h-4 text-[#D4AF37]" />
                      <span>Curriculum Syllabus</span>
                    </h5>
                    <ul className="space-y-1.5 pl-1">
                      {getStyleExtraData(selectedStyle.id).syllabus.map((topic, i) => (
                        <li key={i} className="text-xs text-[#FAF9F6]/75 font-sans flex items-start space-x-2">
                          <span className="text-[#D4AF37] mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Key Details */}
                  <div className="space-y-4">
                    {/* Batch Timing */}
                    <div className="space-y-1">
                      <h5 className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                        <span>Schedule & Timings</span>
                      </h5>
                      <p className="text-xs font-sans font-semibold text-[#FAF9F6]/90 pl-6">
                        {getStyleExtraData(selectedStyle.id).batches}
                      </p>
                    </div>

                    {/* Age Group */}
                    <div className="space-y-1">
                      <h5 className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] flex items-center space-x-2">
                        <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                        <span>Recommended Age</span>
                      </h5>
                      <p className="text-xs font-sans text-[#FAF9F6]/75 pl-6">
                        {getStyleExtraData(selectedStyle.id).ageGroup}
                      </p>
                    </div>

                    {/* Accreditation */}
                    <div className="space-y-1">
                      <h5 className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] flex items-center space-x-2">
                        <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
                        <span>Certification Pathway</span>
                      </h5>
                      <p className="text-xs font-sans text-[#FAF9F6]/75 pl-6 italic">
                        {getStyleExtraData(selectedStyle.id).certification}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D4AF37]/20 flex justify-end">
                  <button
                    onClick={() => setSelectedStyle(null)}
                    className="bg-[#D4AF37] hover:bg-[#FAF9F6] text-[#1b0116] font-sans text-xs font-bold px-6 py-2.5 rounded transition duration-300 tracking-wider uppercase cursor-pointer"
                  >
                    Got It, Thank You
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
