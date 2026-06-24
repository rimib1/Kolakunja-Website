import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Calendar, HelpCircle, ArrowUpRight } from 'lucide-react';
import { BRANCHES } from '../data';

const getWhatsAppLink = (branchName: string, phone: string) => {
  const cleanPhone = phone.replace(/[^\d]/g, ''); // removes +, spaces, and dashes
  const message = `Hello, I am interested in joining the ${branchName} of Kolakunja Dance Academy. Could you please share more details about the batches and fee structure?`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};

export default function Branches() {
  return (
    <section id="branches" className="py-24 bg-[#1a0505] text-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-2 block">
            Where We Teach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Our Branches
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#FAF9F6]/80 font-sans font-light mt-4">
            Discover a training facility close to you. All our branches are equipped with traditional acoustics and dedicated practice spaces.
          </p>
        </div>

        {/* 3-Card Grid for Branches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRANCHES.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-[#2d0a0a]/40 rounded-2xl p-6 sm:p-8 border hover:-translate-y-1 transition duration-300 flex flex-col justify-between ${
                branch.status === 'Upcoming'
                  ? 'border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]'
                  : 'border-[#D4AF37]/10 hover:border-[#D4AF37]/25 shadow-xl'
              }`}
            >
              {/* Branch Header */}
              <div>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <MapPin className="w-6 h-6 animate-pulse" />
                  </div>
                  {branch.status === 'Upcoming' ? (
                    <span className="bg-[#D4AF37] text-[#1a0505] text-[10px] font-sans font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase">
                      Opening Soon
                    </span>
                  ) : (
                    <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-sans font-semibold tracking-wider px-2.5 py-1 rounded-full uppercase">
                      Operational
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37] tracking-wide mt-6">
                  {branch.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#FAF9F6]/75 font-sans leading-relaxed font-light mt-3">
                  {branch.tagline}
                </p>

                {/* Address Card */}
                <div className="mt-6 p-4 rounded-xl bg-[#1a0505]/60 border border-[#D4AF37]/5 space-y-2.5">
                  <p className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#D4AF37]">
                    Address:
                  </p>
                  <p className="text-xs sm:text-sm text-[#FAF9F6]/90 leading-relaxed font-sans font-light">
                    {branch.address}
                  </p>
                </div>
              </div>

              {/* Branch Contact Details */}
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/10 space-y-3">
                <a
                  href={`tel:${branch.phone}`}
                  className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#D4AF37] hover:text-[#FAF9F6] transition duration-300"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="font-sans font-medium">{branch.phone}</span>
                </a>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#FAF9F6]/75">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="font-sans font-light truncate">kolakunjarimi.bhattacharyya@gmail.com</span>
                </div>

                <div className="pt-3">
                  <a
                    href={getWhatsAppLink(branch.name, branch.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`whatsapp-btn-${branch.id}`}
                    className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1fbe58] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition duration-300 shadow-[0_4px_12px_rgba(37,211,102,0.15)] hover:shadow-[0_4px_16px_rgba(37,211,102,0.35)]"
                  >
                    <svg className="w-4 h-4 fill-current text-white flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>

                {branch.status === 'Upcoming' ? (
                  <div className="pt-2 text-center">
                    <a
                      href="#inquiry"
                      className="inline-flex items-center space-x-1 text-xs font-bold text-[#D4AF37] hover:text-[#FAF9F6] uppercase tracking-widest font-sans"
                    >
                      <span>Join Waiting List</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
