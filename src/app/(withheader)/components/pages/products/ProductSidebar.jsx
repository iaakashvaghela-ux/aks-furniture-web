"use client";
import React from 'react';

const CATEGORIES = [
  { name: "All Collections", count: 120 },
  { name: "Living Room", count: 45 },
  { name: "Bedroom", count: 32 },
  { name: "Office", count: 18 },
  { name: "Dining", count: 25 },
  { name: "Decor", count: 64 },
];

const COLORS = [
  { name: "Onyx", hex: "#101112" },
  { name: "Gold", hex: "#D1B06B" },
  { name: "Alabaster", hex: "#FAF9F6" },
  { name: "Walnut", hex: "#4A3728" },
];

const ProductSidebar = ({ activeCategory, setActiveCategory, productCount }) => {
  return (
    <aside className="w-full lg:w-72 flex-shrink-0 font-sans">
      <div className="sticky top-32 space-y-12">

        {/* Collection Summary */}
        <div className="pb-8 border-b border-border">
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">Collections</h3>
          <ul className="space-y-4">
            {CATEGORIES.map((cat) => (
              <li key={cat.name}>
                <button
                  onClick={() => setActiveCategory(cat.name === "All Collections" ? "All" : cat.name)}
                  className={`group flex items-center justify-between w-full text-left transition-all duration-300 ${(activeCategory === cat.name || (activeCategory === "All" && cat.name === "All Collections"))
                      ? 'text-secondary font-bold'
                      : 'text-secondary/40 hover:text-secondary'
                    }`}
                >
                  <span className="text-[13px] tracking-wide uppercase">{cat.name}</span>
                  <span className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">({cat.count})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div className="pb-8 border-b border-border">
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">Price Range</h3>
          <div className="space-y-6">
            <div className="relative h-1 bg-accent rounded-full">
              <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full shadow-lg cursor-pointer transition-transform hover:scale-125"></div>
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full shadow-lg cursor-pointer transition-transform hover:scale-125"></div>
            </div>
            <div className="flex justify-between text-[11px] font-bold text-secondary/60 tracking-widest transition-colors duration-500">
              <span>Rs. 0</span>
              <span>Rs. 1,00,000+</span>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="pb-8 border-b border-border">
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">Material Finish</h3>
          <div className="flex flex-wrap gap-4">
            {COLORS.map((color) => (
              <button
                key={color.name}
                className="group flex flex-col items-center gap-2"
                title={color.name}
              >
                <div
                  className="w-8 h-8 rounded-full border border-border group-hover:scale-110 transition-transform shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-[8px] uppercase tracking-widest text-secondary/40 group-hover:text-secondary transition-colors italic transition-colors duration-500">{color.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Artisan Filters */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">Availability</h3>
          <div className="space-y-4">
            {['In Stock', 'Custom Order', 'Limted Edition'].map((status) => (
              <label key={status} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative w-4 h-4 border border-border rounded-sm group-hover:border-primary transition-colors">
                  <div className="absolute inset-[2px] bg-primary scale-0 transition-transform group-hover:scale-75"></div>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-secondary/40 group-hover:text-secondary transition-all transition-colors duration-500">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Promotional Card */}
        <div className="relative bg-secondary p-8 rounded-2xl overflow-hidden mt-12 group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10 text-center">
            <span className="text-primary text-[9px] uppercase tracking-[0.3em] font-bold block mb-4">Bespoke Service</span>
            <h4 className="text-white text-lg font-serif mb-6 leading-tight">Design Your Dream Sanctuary</h4>
            <button className="w-full py-3 bg-primary text-secondary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all transform hover:-translate-y-1">
              Consult Designer
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProductSidebar;
