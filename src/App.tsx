import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DanceStyles from './components/DanceStyles';
import Branches from './components/Branches';
import Gallery from './components/Gallery';
import InquiryForm from './components/InquiryForm';
import { Inquiry } from './types';
import { Mail, Phone, Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';
import academyLogo from './assets/images/kolakunja_logo.png';

export default function App() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Load inquiries and pre-populate with realistic mock leads if empty
  useEffect(() => {
    const saved = localStorage.getItem('kolakunja_inquiries');
    if (saved) {
      setInquiries(JSON.parse(saved));
    } else {
      const mockInquiries: Inquiry[] = [
        {
          id: 'inq_1',
          studentName: 'Ananya Sen',
          age: 8,
          parentName: 'Debabrata Sen',
          phoneNumber: '98301 23456',
          email: 'debabrata.sen@gmail.com',
          preferredBranch: 'Agarpara',
          preferredDanceStyle: 'Kathak',
          message: 'Ananya is a beginner. Looking for weekend morning slots.',
          status: 'Pending',
          createdAt: new Date(Date.now() - 4 * 3600 * 1000).toISOString(), // 4 hours ago
        },
        {
          id: 'inq_2',
          studentName: 'Sourav Ganguly Jr.',
          age: 14,
          parentName: 'Sumita Ganguly',
          phoneNumber: '90071 88990',
          email: 'sumita.g@outlook.com',
          preferredBranch: 'Birbhum',
          preferredDanceStyle: 'Folk',
          message: 'Highly interested in traditional Bengali folk and Rabindra Nritya.',
          status: 'Contacted',
          createdAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(), // 2 days ago
        },
        {
          id: 'inq_3',
          studentName: 'Priyadarshini Rao',
          age: 19,
          phoneNumber: '81001 77221',
          email: 'priya.rao@uoc.edu.in',
          preferredBranch: 'Agarpara',
          preferredDanceStyle: 'Odissi',
          message: 'Have completed 2 years of Odissi junior level training under state board. Looking to resume classes with Rimi Madam.',
          status: 'Enrolled',
          createdAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(), // 5 days ago
        }
      ];
      localStorage.setItem('kolakunja_inquiries', JSON.stringify(mockInquiries));
      setInquiries(mockInquiries);
    }
  }, []);

  // Add inquiry
  const handleAddInquiry = (newInq: Inquiry) => {
    const updated = [newInq, ...inquiries];
    setInquiries(updated);
  };

  const handleOpenInquiry = () => {
    const element = document.getElementById('inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#1a0505]" id="app-root">
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Single-View Component Layout */}
      <main>
        {/* Widescreen Hero Header with CTAs */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Meet Our Principal Rimi Bhowal & About the Academy */}
        <About />

        {/* Dance Styles Section with syllabus modals */}
        <DanceStyles />

        {/* Branch Locations Section */}
        <Branches />

        {/* Image Grid Gallery with categorization filter */}
        <Gallery />

        {/* Rich Admissions Inquiry Form */}
        <InquiryForm onSubmitSuccess={handleAddInquiry} />
      </main>

      {/* Elegant Classical Footer with Logos, Social Links, and Metadata */}
      <footer className="bg-[#1a0505] text-[#FAF9F6] pt-20 pb-10 border-t border-[#D4AF37]/25 relative overflow-hidden" id="main-footer">
        {/* Absolute branding glow element */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand & Principal Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#D4AF37] bg-[#2d0a0a] shadow">
                  <img
                    src={academyLogo}
                    alt="Kolakunja Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold tracking-widest text-[#D4AF37] uppercase leading-none">
                    KOLAKUNJA
                  </h4>
                  <span className="text-[10px] tracking-widest text-[#D4AF37]/80 font-sans uppercase font-medium block">
                    Dance Academy
                  </span>
                  <span className="text-[8.5px] tracking-widest text-[#FAF9F6]/55 font-sans italic mt-1 block uppercase">
                    "Where Step Meets Passion..."
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#FAF9F6]/80 font-sans leading-relaxed font-light">
                Founded by <strong>Rimi Bhowal</strong> (Alumna, University of Calcutta) to preserve, nurture, and propagate the rich spiritual and classical heritage of Kathak and Odissi.
              </p>
            </div>

            {/* Column 2: Classical Offerings */}
            <div className="space-y-4">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#D4AF37] tracking-wider uppercase border-b border-[#D4AF37]/10 pb-2">
                Our Curriculums
              </h4>
              <ul className="space-y-2.5 font-sans text-xs text-[#FAF9F6]/75">
                <li><a href="#styles" className="hover:text-[#D4AF37] transition">Kathak Training Module</a></li>
                <li><a href="#styles" className="hover:text-[#D4AF37] transition">Odissi Temple Dance</a></li>
                <li><a href="#styles" className="hover:text-[#D4AF37] transition">Bengali Folk & Tagore Dance</a></li>
                <li><a href="#styles" className="hover:text-[#D4AF37] transition">Contemporary Creative Fusion</a></li>
              </ul>
            </div>

            {/* Column 3: Academy Branches */}
            <div className="space-y-4">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#D4AF37] tracking-wider uppercase border-b border-[#D4AF37]/10 pb-2">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 font-sans text-xs text-[#FAF9F6]/75">
                <li><a href="#home" className="hover:text-[#D4AF37] transition">Home Dashboard</a></li>
                <li><a href="#about" className="hover:text-[#D4AF37] transition">About the Founder</a></li>
                <li><a href="#branches" className="hover:text-[#D4AF37] transition">Agarpara & Birbhum Branches</a></li>
                <li><a href="#gallery" className="hover:text-[#D4AF37] transition">Moments Photo Gallery</a></li>
                <li><a href="#inquiry" className="hover:text-[#D4AF37] transition">Online Admission Portal</a></li>
              </ul>
            </div>

            {/* Column 4: Contact & Social Handles */}
            <div className="space-y-4">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#D4AF37] tracking-wider uppercase border-b border-[#D4AF37]/10 pb-2">
                Connect With Us
              </h4>
              <div className="space-y-3 text-xs text-[#FAF9F6]/75 font-sans">
                <a href="mailto:kolakunjarimi.bhattacharyya@gmail.com" className="flex items-center space-x-2.5 hover:text-[#D4AF37] transition">
                  <Mail className="w-4.5 h-4.5 text-[#D4AF37] flex-shrink-0" />
                  <span className="truncate">kolakunjarimi.bhattacharyya@gmail.com</span>
                </a>
                <a href="tel:+918017117152" className="flex items-center space-x-2.5 hover:text-[#D4AF37] transition">
                  <Phone className="w-4.5 h-4.5 text-[#D4AF37] flex-shrink-0" />
                  <span>+91 80171 17152</span>
                </a>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100063837769771"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition duration-300"
                  title="Kolakunja Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/bhowalrimi/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition duration-300"
                  title="Principal Rimi Bhowal Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@RimiBhowalDancer"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition duration-300"
                  title="Rimi Bhowal YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Sub-footer copyright panel */}
          <div className="pt-8 border-t border-[#D4AF37]/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-sans text-[#FAF9F6]/60 font-light">
              &copy; 2026 Kolakunja Dance Academy. All Rights Reserved. Designed to preserve classical legacy with digital efficiency.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
