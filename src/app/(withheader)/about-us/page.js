import React from 'react';
import LuxuryHero from '../components/pages/about-page/LuxuryHero';
import StorySection from '../components/pages/about-page/StorySection';
import ExcellenceStandard from '../components/pages/about-page/ExcellenceStandard';
import CuratedGallery from '../components/pages/about-page/CuratedGallery';
import SignatureTestimonial from '../components/pages/about-page/SignatureTestimonial';
import AboutInquiryForm from '../components/pages/about-page/AboutInquiryForm';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-background">
      <LuxuryHero />
      <StorySection />
      <ExcellenceStandard />
      <CuratedGallery />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8804.312774598397!2d73.030606!3d26.273815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e1!3m2!1sen!2sin!4v1770472106935!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <AboutInquiryForm />
      <SignatureTestimonial />
    </main>
  );
}


