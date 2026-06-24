import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoPath = '/src/assets/images/academy_logo_1782307164272.jpg';

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Dance Styles', href: '#styles' },
    { name: 'Branches', href: '#branches' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#inquiry' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#2d0a0a]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/30 py-2'
          : 'bg-gradient-to-b from-black/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <a href="#home" className="flex items-center space-x-3 group" id="brand-logo-link">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] bg-[#2d0a0a] shadow-md group-hover:border-[#FAF9F6] transition duration-300">
              <img
                src={logoPath}
                alt="Kolakunja Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#D4AF37] group-hover:text-[#FAF9F6] transition duration-300">
                KOLAKUNJA
              </span>
              <span className="text-[9px] tracking-[0.18em] text-[#D4AF37]/80 font-sans font-medium uppercase leading-none">
                Dance Academy
              </span>
              <span className="text-[7.5px] tracking-widest text-[#FAF9F6]/55 font-sans italic mt-0.5 uppercase hidden xs:block">
                "Where Step Meets Passion..."
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-[#D4AF37] font-sans text-sm font-medium tracking-wide transition duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call-to-Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenInquiry}
              id="btn-nav-enquire-desktop"
              className="px-6 py-2 bg-[#D4AF37] text-[#1a0505] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#FAF9F6] transition-colors cursor-pointer"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburguer Menu */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="btn-mobile-menu-toggle"
              className="p-2 rounded-md text-[#D4AF37] hover:text-[#FAF9F6] hover:bg-[#2d0a0a]/50 focus:outline-none transition duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a0505] border-t border-[#D4AF37]/25 animate-fade-in-down" id="mobile-drawer">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:text-[#D4AF37] hover:bg-[#2d0a0a]/40 transition duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-[#D4AF37]/10 flex flex-col space-y-2 px-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenInquiry();
                }}
                id="btn-nav-enquire-mobile"
                className="w-full text-center bg-[#D4AF37] text-[#1a0505] font-sans text-sm font-bold py-3 rounded-sm uppercase tracking-widest hover:bg-[#FAF9F6] transition-colors cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
