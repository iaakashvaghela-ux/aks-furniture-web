"use client";
import React, { useEffect, useState, useMemo } from 'react';
import ProductSidebar from './ProductSidebar';
import ProductHero from './ProductHero';
import ArtisanSpotlight from './ArtisanSpotlight';
import ProductCard from '../../common/ProductCard';
import { ProductBySlug } from '@/app/(withheader)/api-fetching/ApiFetch';

export default function ProductPageLayout({ data }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Memoize products
  const products = useMemo(() => {
    if (!data) return [];
    return Array.isArray(data) ? data : (data.products || []);
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter(p => p.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      {/* 1. Cinematic Hero */}
      {/* <ProductHero /> */}

      <div className="container mx-auto px-6 pt-16 pb-24">

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-10 pb-6 border-b border-border">
          <p className="text-[10px] uppercase tracking-[.3em] font-bold text-secondary/40">
            Found <span className="text-secondary">{filteredProducts.length}</span> Pieces
          </p>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[.3em] font-bold text-secondary"
          >
            <span>Filters</span>
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m10 0a2 2 0 100-4m0 4a2 2 0 110-4m-4 6v-2m6 2v-2M6 20v-2" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* 2. Side Filter Bar (Desktop) */}
          <div className="hidden lg:block">
            <ProductSidebar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              productCount={filteredProducts.length}
            />
          </div>

          {/* 3. Main Content Area */}
          <div className="flex-1">

            {/* Display Summary (Desktop) */}
            <div className="hidden lg:flex justify-between items-center mb-12 pb-6 border-b border-border">
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-secondary/40">
                <span>Collection</span>
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span className="text-secondary">{activeCategory}</span>
              </div>
              <p className="text-[10px] uppercase tracking-[.3em] font-bold text-secondary/40">
                Displaying <span className="text-secondary">{filteredProducts.length}</span> artisanal works
              </p>
            </div>

            {/* 4. Editorial Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-20 lg:gap-y-24">
              {filteredProducts.map((product, index) => {
                const isSpotlightBreak = index === 6;


                return (
                  <React.Fragment key={product.id}>
                    

                    <div
                      className="animate-fadeInUp group"
                      style={{
                        animationDelay: `${(index % 6) * 100}ms`,
                      }}
                    >
                      <ProductCard product={product} />

                      {/* Luxury Grid Detail: Minimalist divider on mobile */}
                      <div className="md:hidden w-full h-px bg-border mt-12 opacity-50"></div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            {/* 5. No Results State */}
            {filteredProducts.length === 0 && (
              <div className="py-40 text-center">
                <div className="w-16 h-1 bg-primary/20 mx-auto mb-10"></div>
                <h3 className="text-2xl font-serif text-secondary/40 italic">No pieces found in this collection.</h3>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-8 text-[11px] uppercase tracking-[widest] font-bold text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all"
                >
                  Explore All Collections
                </button>
              </div>
            )}

            {/* 6. Footer Detail */}
            {filteredProducts.length > 0 && (
              <div className="mt-32 flex flex-col items-center">
                <div className="w-px h-16 bg-gradient-to-t from-primary/50 to-transparent mb-8"></div>
                <button className="text-[11px] uppercase tracking-[.5em] font-bold text-secondary hover:text-primary transition-all duration-700">
                  Load More Masterpieces
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${isSidebarOpen ? 'visible' : 'invisible'}`}
      >
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-500 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsSidebarOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-background shadow-2xl transition-transform duration-500 ease-out p-12 overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-serif font-bold tracking-tighter text-secondary">Filters<span className="text-primary">.</span></h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 text-secondary hover:text-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <ProductSidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            productCount={filteredProducts.length}
          />
        </div>
      </div>
    </div>
  );
}

