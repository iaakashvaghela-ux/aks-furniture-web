"use client";

import React, { useState } from 'react';
import { submitAboutEnquiry } from '@/app/(withheader)/api-fetching/about/aboutApi';

export default function AboutInquiryForm({ company = {} }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await submitAboutEnquiry(formData);
    setNotice(response._message || "Thank you for your enquiry.");
    if (response._status) {
      setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Contact Details & Brand Story */}
          <div className="space-y-12 animate-fadeInUp">
            <div className="space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] block">Get In Touch</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-secondary leading-[1.1]">
                Contact Us
              </h2>
              <p className="text-secondary/60 text-lg leading-relaxed max-w-lg">
                Whether you&apos;re seeking a custom piece or have questions about our collections, our artisans are ready to assist you in creating your perfect space.
              </p>
            </div>

            <div className="space-y-10 group">
              <div className="flex items-start gap-6 transition-all duration-500 hover:translate-x-2">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary shrink-0 shadow-sm border border-border">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-secondary mb-2">Artisan Studio</h4>
                  <p className="text-secondary/50 leading-relaxed">{company.companyAddress || "Claritas est etiam processus dynamicus, 123 Luxury Ave, Design District"}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 transition-all duration-500 hover:translate-x-2">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary shrink-0 shadow-sm border border-border">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-secondary mb-2">Concierge Line</h4>
                  <p className="text-secondary/50 leading-relaxed">{company.companyPhone || "98745612330"}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 transition-all duration-500 hover:translate-x-2">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary shrink-0 shadow-sm border border-border">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-secondary mb-2">Digital Correspondence</h4>
                  <p className="text-secondary/50 leading-relaxed">{company.companyEmail || "furnitureinfo@gmail.com"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Card */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl -z-10"></div>
            <div className="bg-background p-8 md:p-12 rounded-[2rem] shadow-2xl border border-border relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-secondary mb-2 transition-colors duration-500">Tell us your question</h3>
                  <p className="text-secondary/40 text-sm">We typically respond within 24 business hours.</p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 ml-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-accent/50 border border-border rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-secondary/20 text-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 ml-1">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-accent/50 border border-border rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-secondary/20 text-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 ml-1">Mobile Number</label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        placeholder="Mobile Number *"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-accent/50 border border-border rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-secondary/20 text-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 ml-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-accent/50 border border-border rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-secondary/20 text-secondary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 ml-1">Your Message</label>
                    <textarea
                      name="message"
                      required
                      placeholder="Message *"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-accent/50 border border-border rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-secondary/20 text-secondary resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-secondary text-background font-bold text-[11px] uppercase tracking-[0.4em] rounded-full hover:bg-primary transition-all duration-500 shadow-2xl transform hover:-translate-y-1 active:scale-[0.98]"
                  >
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                  </button>
                  {notice && <p className="text-center text-sm text-primary font-medium">{notice}</p>}
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
