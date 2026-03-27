"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/redux/hooks';

const ProductHero = () => {
  const { theme, toggleTheme, activeMenuIndex, setActiveMenuIndex } = useTheme();
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-secondary">
      {/* Background with cinematic treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg"
          alt="Luxury Collection"
          className="w-full h-full object-cover opacity-60 scale-105 animate-slowZoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <nav className="inline-flex items-center space-x-4 text-primary font-medium tracking-[0.3em] uppercase text-[10px] mb-8 animate-fadeIn">
            <Link onClick={() => setActiveMenuIndex(0)} href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            <span className="text-white/60 dark:text-background/50">Collection</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold text-white dark:text-background tracking-tighter leading-none mb-8 animate-fadeInUp">
            The <span className="text-primary italic">Curated</span> <br /> Shop
          </h1>

          <p className="text-lg md:text-xl text-white/70 dark:text-background/50 font-sans tracking-wide leading-relaxed max-w-xl animate-fadeInUp delay-300">
            A sanctuary of artisanal excellence. Explore our meticulously crafted pieces, where every joint tells a story and every finish reflects a legacy.
          </p>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-primary to-transparent animate-bounce-slow"></div>
    </section>
  );
};

export default ProductHero;
