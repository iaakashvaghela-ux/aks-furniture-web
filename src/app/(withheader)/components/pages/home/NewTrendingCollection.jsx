"use client";

import React from 'react';
import Link from 'next/link';

const NewTrendingCollection = () => {
  return (
    <section
      className="relative min-h-[400px] md:h-[500px] flex items-center bg-fixed bg-center bg-cover bg-no-repeat py-20 px-6 md:px-0"
      style={{
        backgroundImage: "url('https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg')"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20 dark:bg-black/60 transition-colors duration-500"></div>

      <div className="container mx-auto relative z-10 text-center md:text-left px-6">
        <div className="max-w-xl mx-auto md:mx-0">
          <div className="banner_text animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-secondary mb-6 leading-tight">
              New Trending Collection
            </h2>
            <span className="block text-base md:text-lg lg:text-xl text-secondary/70 mb-10 font-light italic tracking-wide">
              We Believe That Good Design is Always in Season
            </span>
            <Link
              href="#"
              className="inline-block bg-secondary text-background px-10 md:px-12 py-4 md:py-5 rounded-full uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl hover:-translate-y-1"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>
    </section>
  );
};

export default NewTrendingCollection;
