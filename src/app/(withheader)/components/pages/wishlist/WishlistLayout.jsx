"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const WishlistLayout = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 3,
      name: "Ethereal Cloud Sofa",
      price: 2450,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
      category: "Seating",
      inStock: true
    },
    {
      id: 4,
      name: "Gilded Obsidian Chandelier",
      price: 1800,
      image: "https://images.unsplash.com/photo-1542728928-1413eeae4d92?q=80&w=1000&auto=format&fit=crop",
      category: "Lighting",
      inStock: false
    },
    {
      id: 5,
      name: "Nova Sculptural Vase",
      price: 290,
      image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1000&auto=format&fit=crop",
      category: "Decor",
      inStock: true
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-8 animate-fadeIn">
        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-serif font-bold text-secondary italic">Your heart is seeking...</h2>
          <p className="text-text-muted font-light px-4">Save the pieces that move you. Your personal sanctuary begins with a single selection.</p>
        </div>
        <Link href="/" className="px-10 py-4 bg-secondary text-background font-bold text-[11px] uppercase tracking-[0.3em] rounded-full hover:bg-primary transition-all duration-500 shadow-xl">
          Discover Inspiration
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-secondary">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] block">Your Inspirations</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight">
              Aesthete's Wishlist
            </h1>
          </div>
          <div className="text-text-muted text-[11px] font-bold uppercase tracking-[0.2em] border-b border-accent-dark pb-2">
            {wishlistItems.length} Saved {wishlistItems.length === 1 ? 'Design' : 'Designs'}
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {wishlistItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-accent-dark/10 rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-primary/20 transition-all duration-700 hover:shadow-2xl animate-fadeInUp"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Actions Overlay */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg"
                    title="Remove from Wishlist"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-6 left-6">
                  {item.inStock ? (
                    <span className="px-4 py-2 bg-primary/90 backdrop-blur-md text-secondary text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                      Ready to Ship
                    </span>
                  ) : (
                    <span className="px-4 py-2 bg-secondary/80 backdrop-blur-md text-background text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                      Awaiting Batch
                    </span>
                  )}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">{item.category}</span>
                  <h3 className="text-xl font-serif font-bold tracking-tight">{item.name}</h3>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="text-2xl font-serif font-bold">${item.price.toLocaleString()}</span>
                  <button
                    className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${item.inStock
                        ? 'bg-secondary text-background hover:bg-primary shadow-lg hover:-translate-y-1'
                        : 'border border-accent-dark text-text-muted cursor-not-allowed'
                      }`}
                  >
                    {item.inStock ? 'Acquire Piece' : 'Notify Me'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Suggestion */}
        <div className="mt-24 pt-16 border-t border-accent-dark text-center space-y-6">
          <p className="text-text-muted font-light italic tracking-wide">Looking for something more personal?</p>
          <div className="flex justify-center gap-6">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary">
              Book Artisan Consultation
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default WishlistLayout;
