import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Award, ShieldAlert, Sparkles, MapPin } from 'lucide-react';
import { Inquiry } from '../types';

interface InquiryFormProps {
  onSubmitSuccess: (newInquiry: Inquiry) => void;
}

export default function InquiryForm({ onSubmitSuccess }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    parentName: '',
    phoneNumber: '',
    email: '',
    preferredBranch: 'Agarpara',
    preferredDanceStyle: 'Odissi',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.studentName || !formData.age || !formData.phoneNumber || !formData.email) {
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    const ageNum = parseInt(formData.age);
    if (isNaN(ageNum) || ageNum < 3 || ageNum > 100) {
      setErrorMessage('Please enter a valid age (3 - 100).');
      return;
    }

    setIsSubmitting(true);

    const newInquiry: Inquiry = {
      id: 'inq_' + Date.now(),
      studentName: formData.studentName,
      age: ageNum,
      parentName: formData.parentName || undefined,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      preferredBranch: formData.preferredBranch as 'Agarpara' | 'Birbhum',
      preferredDanceStyle: formData.preferredDanceStyle as 'Kathak' | 'Odissi' | 'Folk' | 'Rabindranritya' | 'Creative',
      message: formData.message,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };

    // 1. Save Locally
    const existingInquiriesString = localStorage.getItem('kolakunja_inquiries');
    const existingInquiries = existingInquiriesString ? JSON.parse(existingInquiriesString) : [];
    existingInquiries.unshift(newInquiry);
    localStorage.setItem('kolakunja_inquiries', JSON.stringify(existingInquiries));

    // 2. Submit to Web3Forms if Access Key is configured
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || '';
    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Admission Inquiry: ${formData.studentName} (${formData.preferredDanceStyle})`,
            from_name: 'Kolakunja Admission Portal',
            student_name: formData.studentName,
            age: formData.age,
            parent_name: formData.parentName || 'N/A',
            phone_number: formData.phoneNumber,
            email: formData.email,
            preferred_branch: formData.preferredBranch,
            preferred_style: formData.preferredDanceStyle,
            message: formData.message || 'No additional message.'
          })
        });
        const result = await response.json();
        if (!result.success) {
          console.error('Web3Forms response failure:', result);
        }
      } catch (err) {
        console.error('Web3Forms connection failure:', err);
      }
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);
    onSubmitSuccess(newInquiry);

    // Clear Form
    setFormData({
      studentName: '',
      age: '',
      parentName: '',
      phoneNumber: '',
      email: '',
      preferredBranch: 'Agarpara',
      preferredDanceStyle: 'Odissi',
      message: '',
    });
  };

  return (
    <section id="inquiry" className="py-24 bg-gradient-to-b from-[#260808] to-[#1a0505] relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 right-[-200px] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-[-200px] w-[500px] h-[500px] bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-2 block">
            Enrollment Gateway
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF9F6] tracking-tight">
            Admission Inquiry
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#FAF9F6]/80 font-sans font-light mt-4">
            Take your first step today under the mentorship of Rimi Bhowal. Submit your information below, and we will contact you shortly with batch allocations.
          </p>
        </div>

        {/* Outer Form Card */}
        <div className="bg-[#2e0527] rounded-xl border border-[#D4AF37]/35 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Form Left Branding Column (4 columns) */}
          <div className="md:col-span-4 bg-[#1b0116] text-[#FAF9F6] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border-r border-[#D4AF37]/25">
            <div className="absolute inset-0 opacity-10 bg-radial-pattern pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <span className="text-[#D4AF37] font-sans text-[10px] uppercase font-bold tracking-[0.2em] block">
                Quick Guide
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#D4AF37] leading-tight">
                Secure Your Slot
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF9F6]/80 font-sans font-light leading-relaxed">
                Admissions are accepted year-round for all branches. Group classes and individual masterclasses are structured by age and proficiency tiers.
              </p>
            </div>

            <div className="relative z-10 space-y-4 pt-10">
              <div className="flex items-start space-x-3 text-xs text-[#D4AF37]">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="font-sans">No prior dance background is required for beginners.</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#D4AF37]">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="font-sans">Affiliated certifications awarded at every grade completion.</span>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#D4AF37]/10 space-y-3">
              <div>
                <span className="text-[#D4AF37] font-sans text-[10px] uppercase font-bold tracking-widest block mb-2">
                  Direct Admission Desk
                </span>
                <a
                  href="https://wa.me/918017117152?text=Hello%20Kolakunja%20Dance%20Academy%2C%20I%20am%20interested%20in%20admission%20details%20for%20my%20child%2Fmyself."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-admission-left"
                  className="inline-flex items-center space-x-2 w-full px-4 py-2.5 bg-[#25D366] hover:bg-[#1fbe58] text-white font-sans font-bold text-[10px] uppercase tracking-wider rounded-xl transition duration-300 text-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.15)] hover:shadow-[0_4px_16px_rgba(37,211,102,0.35)]"
                >
                  <svg className="w-4 h-4 fill-current text-white flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-[#D4AF37]/10 text-[11px] font-sans text-[#FAF9F6]/60 italic">
              "Dedicated training that matches global classical benchmarks."
            </div>
          </div>

          {/* Form Fields Column (8 columns) */}
          <div className="md:col-span-8 p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="admissions-inquiry-form"
                >
                  {errorMessage && (
                    <div className="p-4 bg-rose-950/40 border border-rose-500/30 text-rose-200 rounded-xl text-xs sm:text-sm font-sans flex items-center space-x-2">
                      <ShieldAlert className="w-5 h-5 flex-shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Student Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="studentName" className="block text-xs sm:text-sm font-sans font-semibold text-[#FAF9F6]/90">
                        Student Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        id="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm font-sans text-[#FAF9F6] placeholder-white/35 transition"
                        required
                      />
                    </div>

                    {/* Age */}
                    <div className="space-y-1.5">
                      <label htmlFor="age" className="block text-xs sm:text-sm font-sans font-semibold text-[#FAF9F6]/90">
                        Age of Student <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="number"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 12"
                        min="3"
                        max="100"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm font-sans text-[#FAF9F6] placeholder-white/35 transition"
                        required
                      />
                    </div>
                  </div>

                  {/* Parent Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="parentName" className="block text-xs sm:text-sm font-sans font-semibold text-[#FAF9F6]/90">
                      Parent / Guardian Name <span className="text-[#FAF9F6]/50 text-xs font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      id="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Required for children under 16"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm font-sans text-[#FAF9F6] placeholder-white/35 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-sans font-semibold text-[#FAF9F6]/90">
                        Phone Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm font-sans text-[#FAF9F6] placeholder-white/35 transition"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs sm:text-sm font-sans font-semibold text-[#FAF9F6]/90">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="student@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm font-sans text-[#FAF9F6] placeholder-white/35 transition"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Preferred Branch */}
                    <div className="space-y-1.5">
                      <label htmlFor="preferredBranch" className="block text-xs sm:text-sm font-sans font-semibold text-[#FAF9F6]/90">
                        Preferred Branch <span className="text-rose-400">*</span>
                      </label>
                      <select
                        name="preferredBranch"
                        id="preferredBranch"
                        value={formData.preferredBranch}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#1b0116] border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm font-sans text-[#FAF9F6] transition cursor-pointer"
                      >
                        <option value="Agarpara" className="bg-[#1b0116]">Agarpara Branch (Kolkata)</option>
                        <option value="Birbhum" className="bg-[#1b0116]">Birbhum Branch (Lauberia)</option>
                      </select>
                    </div>

                    {/* Preferred Dance Style */}
                    <div className="space-y-1.5">
                      <label htmlFor="preferredDanceStyle" className="block text-xs sm:text-sm font-sans font-semibold text-[#FAF9F6]/90">
                        Preferred Style <span className="text-rose-400">*</span>
                      </label>
                      <select
                        name="preferredDanceStyle"
                        id="preferredDanceStyle"
                        value={formData.preferredDanceStyle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#1b0116] border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm font-sans text-[#FAF9F6] transition cursor-pointer"
                      >
                        <option value="Odissi" className="bg-[#1b0116]">Odissi Training</option>
                        <option value="Kathak" className="bg-[#1b0116]">Kathak Training</option>
                        <option value="Folk" className="bg-[#1b0116]">Folk Dance</option>
                        <option value="Rabindranritya" className="bg-[#1b0116]">Rabindra Nritya</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs sm:text-sm font-sans font-semibold text-[#FAF9F6]/90">
                      Message & Prior Background <span className="text-[#FAF9F6]/50 text-xs font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Let us know about any prior training, physical considerations, or schedule preferences."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-xs sm:text-sm font-sans text-[#FAF9F6] placeholder-white/35 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="btn-submit-inquiry"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#D4AF37] hover:bg-[#FAF9F6] text-[#1b0116] font-sans text-sm font-bold py-4 rounded-lg shadow-lg shadow-[#D4AF37]/15 transform hover:-translate-y-0.5 transition duration-300 uppercase tracking-widest cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#1b0116]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Processing Inquiry...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="flex-shrink mx-4 text-[#FAF9F6]/40 text-[10px] uppercase font-sans tracking-widest">or contact us via</span>
                    <div className="flex-grow border-t border-white/10"></div>
                  </div>

                  <a
                    href="https://wa.me/918017117152?text=Hello%20Kolakunja%20Dance%20Academy%2C%20I%20am%20interested%20in%20admission%20details%20for%20myself%2Fmy%20child.%20Could%20you%20please%20share%20the%20details%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="whatsapp-admission-direct"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#25D366]/10 text-[#25D366] hover:text-[#25D366] font-sans text-xs font-bold py-3.5 rounded-lg border border-[#25D366]/30 hover:border-[#25D366] transition duration-300 uppercase tracking-widest text-center"
                  >
                    <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Instant Inquiry on WhatsApp</span>
                  </a>
                </motion.form>
              ) : (
                <motion.div
                  key="success-receipt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 px-4 space-y-6 flex flex-col items-center"
                  id="inquiry-success-container"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-xl">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[#D4AF37] font-sans text-xs font-bold uppercase tracking-[0.2em] block">
                      Inquiry Received Successfully
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-[#FAF9F6]">
                      Pranām, Dear Aspiring Dancer!
                    </h3>
                  </div>

                  <p className="max-w-md text-sm text-[#FAF9F6]/80 font-sans font-light leading-relaxed">
                    Thank you for reaching out to <strong>Kolakunja Dance Academy</strong>. Your inquiry has been logged directly into our master roster. Our Guruma, <strong>Rimi Bhowal</strong>, or her administrative panel will review and contact you via Phone or Email within 24 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/25 max-w-sm w-full space-y-2">
                    <div className="flex items-center justify-center space-x-1.5 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      <span>Next Steps</span>
                    </div>
                    <p className="text-[11px] text-[#FAF9F6]/75 leading-normal font-sans">
                      Keep your phone active! We will be sharing details regarding fee structures, uniform colors, and a free trial session schedule.
                    </p>
                    {(import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY ? (
                      <p className="text-[9px] text-emerald-400 font-sans border-t border-[#D4AF37]/10 pt-2">
                        ✓ Form forwarded to Guruma's inbox via Web3Forms.
                      </p>
                    ) : (
                      <p className="text-[9px] text-[#FAF9F6]/40 font-sans border-t border-[#D4AF37]/10 pt-2">
                        ℹ️ Saved locally. Configure VITE_WEB3FORMS_ACCESS_KEY to receive real email copies.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full justify-center max-w-sm">
                    <a
                      href="https://wa.me/918017117152?text=Hello%20Kolakunja%20Dance%20Academy%2C%20I%20just%20submitted%20my%20admission%20inquiry%20online.%20Could%20we%20please%20discuss%20the%20details%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1fbe58] text-white font-sans text-xs font-bold px-4 py-2.5 rounded-xl transition duration-300 uppercase tracking-widest text-center shadow-md flex-1"
                    >
                      <svg className="w-4 h-4 fill-current text-white flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>WhatsApp Chat</span>
                    </a>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] font-sans text-[10px] font-semibold px-4 py-2.5 rounded-xl transition duration-300 uppercase tracking-widest cursor-pointer flex-1"
                    >
                      Submit Another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
