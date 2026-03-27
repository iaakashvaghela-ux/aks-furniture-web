import React from 'react';

const CATEGORIES = ["All", "Living Room", "Office", "Decor", "Lighting"];

const LuxuryFilter = ({ activeCategory, setActiveCategory, productCount }) => {
  return (
    <div className="py-12 border-b border-accent-dark mb-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Count Indicator */}
        <div className="order-2 md:order-1">
          <p className="text-[10px] uppercase tracking-[.3em] font-bold text-text-muted">
            Found <span className="text-secondary">{productCount}</span> Exclusive Pieces
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 order-1 md:order-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500 relative py-2 group ${activeCategory === cat ? 'text-primary' : 'text-text-muted hover:text-secondary'
                }`}
            >
              {cat}
              <span className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
            </button>
          ))}
        </div>

        {/* Sort Trigger (Visual only for now) */}
        <div className="hidden lg:block order-3">
          <button className="flex items-center gap-3 text-[10px] uppercase tracking-[.3em] font-bold text-secondary group">
            <span>Sort By</span>
            <svg className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryFilter;
