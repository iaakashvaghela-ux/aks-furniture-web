"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/redux/hooks';

const LuxuryHero = ({ data = {} }) => {
  const { theme, toggleTheme,activeMenuIndex, setActiveMenuIndex } = useTheme();
  const title = data.title || "Our Legacy";
  const highlight = data.highlight || "Legacy";
  const titleStart = title.replace(highlight, "").trim() || "Our";

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.image || "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg"}
          alt="Luxury Furniture"
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background transition-colors duration-700"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
        <nav className="inline-flex items-center space-x-4 text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 animate-fadeIn">
          <Link  onClick={() => setActiveMenuIndex(0)} href="/" className="hover:text-secondary transition-colors">Home</Link>
          <span className="w-1 h-1 bg-primary rounded-full"></span>
          <span className="text-secondary/60">About Us</span>
        </nav>


        <h1 className="text-7xl md:text-9xl font-serif font-bold text-secondary tracking-tighter leading-none animate-fadeInUp transition-colors duration-500">
          {titleStart} <span className="text-primary italic">{highlight}</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary/70 font-sans tracking-wide leading-relaxed animate-fadeInUp delay-100 transition-colors duration-500">
          {data.description || "Crafting timeless spaces where comfort meets uncompromising elegance. Since 1998, we have been the silent architect of luxury living."}
        </p>

        <div className="pt-10 animate-fadeInUp delay-500">
          <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHero;
