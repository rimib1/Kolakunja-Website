import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Printer, FileText, CheckCircle, HelpCircle, Sparkles, AlertCircle } from 'lucide-react';
import logoPath from '../assets/images/kolakunja_logo.png';

export default function OfficialAdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    address: '',
    contactNumber: '',
    nationality: 'Indian',
    religion: 'Hinduism',
    educationalQualification: '',
    subjectOfAdmission: 'Odissi Training',
    previousExperience: '',
    dateOfAdmission: new Date().toISOString().split('T')[0],
    docAadhar: true,
    docPhotos: true,
  });

  const printAreaRef = useRef<HTMLDivElement>(null);
  const [isPrintingBlank, setIsPrintingBlank] = useState(false);

  // Capitalize name to Block Letters (Uppercase) automatically or allow typing
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      studentName: e.target.value.toUpperCase(),
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: 'docAadhar' | 'docPhotos') => {
    setFormData((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const triggerPrint = () => {
    setIsPrintingBlank(false);
    setTimeout(() => {
      window.print();
    }, 50);
  };

  const triggerPrintBlank = () => {
    setIsPrintingBlank(true);
    setTimeout(() => {
      window.print();
      // Safety reset fallback
      setTimeout(() => {
        setIsPrintingBlank(false);
      }, 1000);
    }, 150);
  };

  useEffect(() => {
    const handleAfterPrint = () => {
      setIsPrintingBlank(false);
    };
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  return (
    <div className="space-y-8" id="official-form-container">
      {/* Alert info block */}
      <div className="p-4 rounded-xl bg-[#2e0527] border border-[#D4AF37]/30 text-[#FAF9F6] flex items-start space-x-3 text-xs sm:text-sm">
        <Sparkles className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5 animate-pulse" />
        <div className="space-y-1">
          <p className="font-semibold text-[#D4AF37]">Official Admission Form Generator</p>
          <p className="text-[#FAF9F6]/80 leading-relaxed">
            Fill out the fields below to instantly generate your official, pre-filled Kolakunja admission form. 
            Once completed, click the <strong className="text-[#D4AF37]">Print Form / Save PDF</strong> button to print it or download it as a high-quality PDF. Please sign the physical copy and submit it to Guruma Rimi Bhowal during your batch induction.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: Form Inputs (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#2e0527]/60 border border-[#D4AF37]/20 p-6 rounded-xl space-y-6">
            <h3 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2.5 flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Enrollment Details</span>
            </h3>

            {/* Student Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                Student's Name (Block Letters) <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={formData.studentName}
                onChange={handleNameChange}
                placeholder="E.G. ARYAN SEN"
                className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] placeholder-white/20 uppercase transition"
                required
              />
              <span className="text-[10px] text-gray-400 block italic">Enforces block letters automatically.</span>
            </div>

            {/* Father's Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                Father's Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                placeholder="Father's full name"
                className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] placeholder-white/20 transition"
                required
              />
            </div>

            {/* Mother's Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                Mother's Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                placeholder="Mother's full name"
                className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] placeholder-white/20 transition"
                required
              />
            </div>

            {/* DOB & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                  Date of Birth <span className="text-rose-400">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] transition"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                  Contact Number <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 98300 XXXXX"
                  className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] placeholder-white/20 transition"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                Full Residential Address <span className="text-rose-400">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="House no, Street Name, City, PIN Code, State"
                rows={3}
                className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] placeholder-white/20 transition resize-none"
                required
              />
            </div>

            {/* Nationality & Religion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                  Religion
                </label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  placeholder="e.g. Hinduism / Islam"
                  className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] placeholder-white/20 transition"
                />
              </div>
            </div>

            {/* Educational Qualification */}
            <div className="space-y-1.5">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                Educational Qualification <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                name="educationalQualification"
                value={formData.educationalQualification}
                onChange={handleInputChange}
                placeholder="e.g. Class VIII / Graduate / B.A."
                className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] placeholder-white/20 transition"
                required
              />
            </div>

            {/* Subject of Admission & Admission Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                  Subject of Admission <span className="text-rose-400">*</span>
                </label>
                <select
                  name="subjectOfAdmission"
                  value={formData.subjectOfAdmission}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded bg-[#1b0116] border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] transition cursor-pointer"
                >
                  <option value="Odissi Training">Odissi Training</option>
                  <option value="Kathak Training">Kathak Training</option>
                  <option value="Folk Dance">Folk Dance</option>
                  <option value="Rabindra Nritya">Rabindra Nritya</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                  Date of Admission
                </label>
                <input
                  type="date"
                  name="dateOfAdmission"
                  value={formData.dateOfAdmission}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] transition"
                />
              </div>
            </div>

            {/* Previous Experience */}
            <div className="space-y-1.5">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85">
                Previous Experience (If any)
              </label>
              <input
                type="text"
                name="previousExperience"
                value={formData.previousExperience}
                onChange={handleInputChange}
                placeholder="e.g. 2 Years Kathak under Bhatkhande"
                className="w-full px-3.5 py-2.5 rounded bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm text-[#FAF9F6] placeholder-white/20 transition"
              />
            </div>

            {/* Documents Submitted Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-[#D4AF37]/10">
              <span className="block text-xs font-sans font-bold uppercase tracking-wider text-[#FAF9F6]/85 mb-1">
                Documents to Submit (Check if ready)
              </span>
              <div className="flex flex-col space-y-2">
                <label className="inline-flex items-center space-x-2.5 text-xs text-[#FAF9F6]/80 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.docAadhar}
                    onChange={() => handleCheckboxChange('docAadhar')}
                    className="rounded border-white/20 text-[#D4AF37] focus:ring-0 bg-transparent w-4 h-4 cursor-pointer"
                  />
                  <span>1 copy of Aadhaar Card</span>
                </label>
                <label className="inline-flex items-center space-x-2.5 text-xs text-[#FAF9F6]/80 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.docPhotos}
                    onChange={() => handleCheckboxChange('docPhotos')}
                    className="rounded border-white/20 text-[#D4AF37] focus:ring-0 bg-transparent w-4 h-4 cursor-pointer"
                  />
                  <span>2 copies of Passport size Colour Photo</span>
                </label>
              </div>
            </div>

            {/* Print trigger buttons */}
            <div className="space-y-3 pt-3 border-t border-[#D4AF37]/10">
              <button
                onClick={triggerPrint}
                type="button"
                className="w-full inline-flex items-center justify-center space-x-2.5 bg-[#D4AF37] hover:bg-[#FAF9F6] text-[#1b0116] font-sans text-xs sm:text-sm font-bold py-3 rounded uppercase tracking-widest cursor-pointer shadow-lg shadow-[#D4AF37]/10 hover:scale-[1.01] transition duration-300"
              >
                <Printer className="w-4 h-4" />
                <span>1. Print Filled Form / Save PDF</span>
              </button>

              <button
                onClick={triggerPrintBlank}
                type="button"
                className="w-full inline-flex items-center justify-center space-x-2.5 bg-[#2e0527]/50 hover:bg-[#2e0527]/90 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#FAF9F6] font-sans text-xs sm:text-sm font-bold py-3 rounded uppercase tracking-widest cursor-pointer transition duration-300"
              >
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                <span>2. Print Blank Form (Hand-fill)</span>
              </button>

              {/* Informative Tip */}
              <div className="p-3 bg-black/25 rounded border border-white/5 text-[10.5px] text-[#FAF9F6]/75 leading-relaxed">
                <span className="font-bold text-[#D4AF37] block mb-0.5">💡 How to download as PDF:</span>
                <p>
                  After clicking, select <strong className="text-white">"Save as PDF"</strong> under the <strong className="text-[#D4AF37]">Destination</strong> dropdown in the print options window to download this form directly onto your device.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Physical Page Preview (7 columns) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <span className="text-xs text-gray-400 uppercase font-sans tracking-widest mb-3 flex items-center space-x-1">
            <span>Live Sheet Preview (A4 Layout)</span>
          </span>

          {/* Paper Container Sheet - Reduced padding to fit perfectly inside single A4 page height */}
          <div
            ref={printAreaRef}
            id="admission-print-sheet"
            className="w-full max-w-[620px] aspect-[1/1.414] bg-white text-black p-6 sm:p-8 shadow-2xl relative border-8 border-[#D4AF37]/10 flex flex-col justify-between overflow-hidden select-none select-text"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {/* 40% Transparent Background Watermark Logo (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.35] z-0">
              <img
                src={logoPath}
                alt="Kolakunja Logo Watermark"
                className="w-4/5 max-w-[340px] aspect-square object-contain filter grayscale"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Outer ornamental border */}
            <div className="absolute inset-2 border border-black/10 pointer-events-none z-10" />

            {/* Main Content inside paper */}
            <div className="relative z-10 space-y-3.5 flex-grow flex flex-col">
              {/* Header Box */}
              <div className="text-center border-b-[2px] border-black pb-3.5 flex flex-col items-center justify-center relative">
                {/* Small Logo at the top */}
                <div className="w-9 h-9 mb-1.5">
                  <img
                    src={logoPath}
                    alt="Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h1 className="text-lg sm:text-xl font-bold tracking-wider uppercase" style={{ fontFamily: 'Georgia, serif' }}>
                  Kolakunja Dance Academy
                </h1>
                <p className="text-[9.5px] uppercase font-sans tracking-widest font-semibold text-black/75 mt-0.5">
                  An Institution of Kathak & Odissi Dance
                </p>
                <p className="text-[7.5px] font-sans tracking-wide text-black/60 italic mt-0.5">
                  Regd Office: Agarpara & Lauberia (Birbhum) | Contact: +91 80171 17152
                </p>
                
                {/* Registration Number placeholder */}
                <div className="absolute top-0 left-0 text-[7.5px] font-sans text-black/40">
                  FORM NO: KDA/{new Date().getFullYear()}/{Math.floor(1000 + Math.random() * 9000)}
                </div>
              </div>

              {/* Title of the Form */}
              <div className="text-center py-0.5">
                <span className="border-2 border-black px-4 py-0.5 text-[11px] uppercase font-sans font-black tracking-widest bg-black text-white">
                  Application for Admission
                </span>
              </div>

              {/* Passport Photo Frame (Absolute placed top-right-ish inside sheet) */}
              <div className="flex justify-between items-start mt-1">
                <div className="text-[9px] sm:text-[9.5px] font-sans text-black/50 space-y-0.5 bg-black/5 p-2 rounded max-w-[210px] leading-normal">
                  <p className="font-bold text-black/70">INSTRUCTIONS FOR APPLICANT:</p>
                  <p>1. Fill out details in UPPERCASE/BLOCK LETTERS.</p>
                  <p>2. Bring printed and signed copy to induction batch.</p>
                  <p>3. Attach self-attested documents listed below.</p>
                </div>

                <div className="w-[85px] h-[105px] border-2 border-dashed border-black/30 flex flex-col items-center justify-center bg-gray-50/50 p-1.5 text-center relative flex-shrink-0">
                  <span className="text-[7.5px] font-sans text-black/50 uppercase leading-normal font-bold">
                    Affix Recent Passport Size Photo
                  </span>
                  <div className="absolute bottom-1 right-1 text-[5px] font-sans text-black/25">2x2 inch</div>
                </div>
              </div>

              {/* Form Grid Details - Classical lined layout with tightened space-y */}
              <div className="space-y-2.5 text-xs">
                {/* 1. Student Name */}
                <div className="flex items-end pb-1 border-b border-black/15">
                  <span className="font-bold uppercase tracking-wider text-[10px] w-48 flex-shrink-0">1. Student's Name:</span>
                  <span className="flex-grow font-sans text-xs tracking-wider uppercase font-black pl-2">
                    {isPrintingBlank ? '__________________________________________' : (formData.studentName || '__________________________________________')}
                  </span>
                </div>

                {/* 2. Father's Name */}
                <div className="flex items-end pb-1 border-b border-black/15">
                  <span className="font-bold uppercase tracking-wider text-[10px] w-48 flex-shrink-0">2. Father's Name:</span>
                  <span className="flex-grow font-serif text-xs italic pl-2">
                    {isPrintingBlank ? '__________________________________________' : (formData.fatherName || '__________________________________________')}
                  </span>
                </div>

                {/* 3. Mother's Name */}
                <div className="flex items-end pb-1 border-b border-black/15">
                  <span className="font-bold uppercase tracking-wider text-[10px] w-48 flex-shrink-0">3. Mother's Name:</span>
                  <span className="flex-grow font-serif text-xs italic pl-2">
                    {isPrintingBlank ? '__________________________________________' : (formData.motherName || '__________________________________________')}
                  </span>
                </div>

                {/* 4. DOB & Nationality & Religion */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-end pb-1 border-b border-black/15">
                    <span className="font-bold uppercase tracking-wider text-[10px] w-24 flex-shrink-0">4. Date of Birth:</span>
                    <span className="flex-grow font-sans text-xs font-semibold pl-2">
                      {isPrintingBlank ? '___/___/______' : (formData.dob ? new Date(formData.dob).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '___/___/______')}
                    </span>
                  </div>
                  <div className="flex items-end pb-1 border-b border-black/15">
                    <span className="font-bold uppercase tracking-wider text-[10px] w-20 flex-shrink-0">5. Nationality:</span>
                    <span className="flex-grow font-serif text-xs pl-2">
                      {isPrintingBlank ? 'Indian' : (formData.nationality || 'Indian')}
                    </span>
                  </div>
                </div>

                {/* 5. Address */}
                <div className="flex items-start pb-1 border-b border-black/15">
                  <span className="font-bold uppercase tracking-wider text-[10px] w-48 flex-shrink-0 mt-0.5">6. Address:</span>
                  <span className="flex-grow font-serif text-xs leading-normal pl-2 min-h-[28px] break-words">
                    {isPrintingBlank ? '____________________________________________________________________' : (formData.address || '____________________________________________________________________')}
                  </span>
                </div>

                {/* 6. Contact Number & Religion */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-end pb-1 border-b border-black/15">
                    <span className="font-bold uppercase tracking-wider text-[10px] w-24 flex-shrink-0">7. Contact No:</span>
                    <span className="flex-grow font-sans text-xs font-bold pl-2">
                      {isPrintingBlank ? '____________________' : (formData.contactNumber || '____________________')}
                    </span>
                  </div>
                  <div className="flex items-end pb-1 border-b border-black/15">
                    <span className="font-bold uppercase tracking-wider text-[10px] w-20 flex-shrink-0">8. Religion:</span>
                    <span className="flex-grow font-serif text-xs pl-2">
                      {isPrintingBlank ? '____________________' : (formData.religion || '____________________')}
                    </span>
                  </div>
                </div>

                {/* 7. Educational Qualification */}
                <div className="flex items-end pb-1 border-b border-black/15">
                  <span className="font-bold uppercase tracking-wider text-[10px] w-48 flex-shrink-0">9. Educational Qualification:</span>
                  <span className="flex-grow font-serif text-xs pl-2">
                    {isPrintingBlank ? '__________________________________________' : (formData.educationalQualification || '__________________________________________')}
                  </span>
                </div>

                {/* 8. Subject of Admission & Admission Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-end pb-1 border-b border-black/15">
                    <span className="font-bold uppercase tracking-wider text-[10px] w-32 flex-shrink-0">10. Subject:</span>
                    <span className="flex-grow font-sans text-xs font-bold text-red-900 uppercase pl-2">
                      {isPrintingBlank ? '____________________' : formData.subjectOfAdmission}
                    </span>
                  </div>
                  <div className="flex items-end pb-1 border-b border-black/15">
                    <span className="font-bold uppercase tracking-wider text-[10px] w-32 flex-shrink-0">11. Date of Admission:</span>
                    <span className="flex-grow font-sans text-xs font-semibold pl-2">
                      {isPrintingBlank ? '___/___/______' : (formData.dateOfAdmission ? new Date(formData.dateOfAdmission).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '___/___/______')}
                    </span>
                  </div>
                </div>

                {/* 9. Previous Experience */}
                <div className="flex items-end pb-1 border-b border-black/15">
                  <span className="font-bold uppercase tracking-wider text-[10px] w-48 flex-shrink-0">12. Previous Experience:</span>
                  <span className="flex-grow font-serif text-xs pl-2">
                    {isPrintingBlank ? '__________________________________________' : (formData.previousExperience || 'None')}
                  </span>
                </div>
              </div>

              {/* Checklist & Document Declaration in Receipt */}
              <div className="border border-black/30 p-2.5 bg-black/[0.02] rounded space-y-1.5 mt-1.5">
                <p className="font-bold uppercase tracking-wider text-[9px] text-black">Documents Submitted Checklists:</p>
                <div className="grid grid-cols-2 gap-2 text-[9px] font-sans">
                  <div className="flex items-center space-x-2">
                    <span className={`w-3.5 h-3.5 border border-black flex items-center justify-center font-bold text-[8px] ${(isPrintingBlank ? false : formData.docAadhar) ? 'bg-black text-white' : ''}`}>
                      {(isPrintingBlank ? false : formData.docAadhar) ? '✓' : ''}
                    </span>
                    <span className="text-black/85">1 Copy of Aadhaar Card</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3.5 h-3.5 border border-black flex items-center justify-center font-bold text-[8px] ${(isPrintingBlank ? false : formData.docPhotos) ? 'bg-black text-white' : ''}`}>
                      {(isPrintingBlank ? false : formData.docPhotos) ? '✓' : ''}
                    </span>
                    <span className="text-black/85">2 Passport Size Colour Photos</span>
                  </div>
                </div>
                <p className="text-[8px] text-black/60 italic leading-relaxed pt-1 border-t border-black/10">
                  "I hereby declare that all the information provided above is true and authentic to the best of my knowledge. I promise to abide by all the custom rules, batch timetables, and discipline codes enforced by Kolakunja Dance Academy."
                </p>
              </div>
            </div>

            {/* Footer Signature Box - 4 Columns */}
            <div className="grid grid-cols-4 gap-2 pt-6 text-center relative z-10">
              <div className="flex flex-col justify-end items-center h-12">
                <div className="w-full border-t border-black/40 pt-1.5">
                  <p className="text-[8px] uppercase tracking-wider font-sans font-bold">Student's Sign</p>
                </div>
              </div>
              <div className="flex flex-col justify-end items-center h-12">
                <div className="w-full border-t border-black/40 pt-1.5">
                  <p className="text-[8px] uppercase tracking-wider font-sans font-bold">Guardian's Sign</p>
                </div>
              </div>
              <div className="flex flex-col justify-end items-center h-12">
                <div className="w-full border-t border-black/40 pt-1.5">
                  <p className="text-[8px] uppercase tracking-wider font-sans font-bold text-red-950">Signature of GuruMaa</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center h-12 relative">
                {/* Institutional Stamp circle design */}
                <div className="absolute top-[-22px] w-[50px] h-[50px] rounded-full border-2 border-dashed border-[#D4AF37]/50 flex items-center justify-center opacity-45 pointer-events-none rotate-12">
                  <div className="text-[6px] font-sans font-black text-center text-[#D4AF37] leading-[7px]">
                    KOLAKUNJA<br/>STAMP
                  </div>
                </div>
                <div className="w-full border-t border-black/40 pt-1.5 mt-auto">
                  <p className="text-[8px] uppercase tracking-wider font-sans font-bold text-gray-700">Institution Stamp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
