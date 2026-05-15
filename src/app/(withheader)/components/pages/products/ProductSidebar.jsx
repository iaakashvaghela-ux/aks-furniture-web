"use client";
import React from 'react';

// const COLORS = [
//   { name: "Onyx", hex: "#101112" },
//   { name: "Gold", hex: "#D1B06B" },
//   { name: "Alabaster", hex: "#FAF9F6" },
//   { name: "Walnut", hex: "#4A3728" },
// ];

const ProductSidebar = ({ activeCategory, setActiveCategory, productCount, categoryData, fullPrice = 100000, setFullPrice, colors = [], colorFilter = [], setColorFilter }) => {
  const CATEGORIES = [
    { name: "All Collections", count: productCount },
    ...(categoryData || [])
  ];
  const selectedColors = colors.filter((color) => colorFilter.includes(color._id));

  let handleColorFilter = (id) => {
    if (!setColorFilter) return;

    if (colorFilter.includes(id)) {
      setColorFilter(colorFilter.filter((item) => item !== id));
    } else {
      setColorFilter([...colorFilter, id]);
    }
  }

  const clearFilters = () => {
    setActiveCategory("All");
    setColorFilter?.([]);
    setFullPrice?.(100000);
  };

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
                  {cat.count !== undefined && (
                    <span className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">({cat.count})</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div className="pb-8 border-b border-border">
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">Price Range</h3>
          <div className="space-y-6">
            {/* <div className="relative h-1 bg-accent rounded-full">
              <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full shadow-lg cursor-pointer transition-transform hover:scale-125"></div>
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full shadow-lg cursor-pointer transition-transform hover:scale-125"></div>
            </div> */}
            <input type="range" min="0" max="100000" step="500" value={fullPrice} onChange={(e) => setFullPrice?.(Number(e.target.value))} className="w-full h-1 bg-accent rounded-full appearance-none cursor-pointer" />
            <div className="flex justify-between text-[11px] font-bold text-secondary/60 tracking-widest transition-colors duration-500">
              <span>Rs. 0</span>
              <span>Rs. {fullPrice}</span>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="pb-8 border-b border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Color</h3>
            {colorFilter.length > 0 && (
              <button
                onClick={() => setColorFilter?.([])}
                className="text-[9px] uppercase tracking-widest text-secondary/40 hover:text-primary transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {selectedColors.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {selectedColors.map((color) => (
                <button
                  key={color._id}
                  onClick={() => handleColorFilter(color._id)}
                  className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-secondary hover:bg-primary/20 transition-colors"
                  title={`Remove ${color.colorName}`}
                >
                  <span
                    className="h-3 w-3 rounded-full border border-secondary/20"
                    style={{ backgroundColor: color.code }}
                  />
                  {color.colorName}
                  <span className="text-primary">x</span>
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            {colors?.map((color) => {
              const isSelected = colorFilter.includes(color._id);

              return (
                <button
                  key={color._id}
                  className={`group flex items-center gap-3 rounded-lg border px-3 py-2 text-left transition-all duration-300 ${isSelected
                    ? 'border-primary bg-primary/10 text-secondary shadow-sm'
                    : 'border-border text-secondary/50 hover:border-primary/40 hover:text-secondary'
                    }`}
                  title={isSelected ? `${color.colorName} selected` : `Select ${color.colorName}`}
                  onClick={() => handleColorFilter(color._id)}
                  aria-pressed={isSelected}
                >
                  <span className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border shadow-inner" style={{ backgroundColor: color.code }}>
                    {isSelected && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-background shadow-md">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[10px] font-bold uppercase tracking-widest">{color.colorName}</span>
                    <span className={`block text-[8px] uppercase tracking-widest ${isSelected ? 'text-primary' : 'text-secondary/30'}`}>
                      {isSelected ? 'Selected' : 'Tap to select'}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {(activeCategory !== "All" || colorFilter.length > 0 || Number(fullPrice) < 100000) && (
          <button
            onClick={clearFilters}
            className="w-full py-3 border border-border text-secondary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:border-primary hover:text-primary transition-all"
          >
            Reset Filters
          </button>
        )}

        {/* Artisan Filters */}
        {/* <div>
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
        </div> */}

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
