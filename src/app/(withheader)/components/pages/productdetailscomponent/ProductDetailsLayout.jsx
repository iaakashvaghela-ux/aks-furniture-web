"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const ProductDetailsLayout = ({ product }) => {
  console.log(product);


  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [images, setImages] = useState(product.thumbnail);
  // const product = {
  //   name: "Aurelius Velvet Lounge Chair",
  //   category: "Signature Collection",
  //   price: "85,000",
  //   oldPrice: "1,10,000",
  //   sku: "MST-AURE-001",
  //   rating: 4.8,
  //   reviews: 24,
  //   description: "The Aurelius Lounge Chair is a masterclass in mid-century modern design, reimagined for the contemporary sanctuary. Hand-upholstered in premium Italian velvet and supported by a solid oak frame, it offers an unparalleled balance of form and ergonomic comfort.",
  //   details: [
  //     { label: "Material", value: "Premium Italian Velvet, Solid Oak" },
  //     { label: "Dimensions", value: "85cm H x 76cm W x 82cm D" },
  //     { label: "Assembly", value: "Fully Assembled" },
  //     { label: "Warranty", value: "5 Year Artisan Guarantee" }
  //   ],
  //   images: [
  //     "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop"
  //   ],
  //   finishes: [
  //     { name: "Deep Onyx", hex: "#101112" },
  //     { name: "Forest Velvet", hex: "#2D3E33" },
  //     { name: "Midnight Blue", hex: "#1A233A" },
  //     { name: "Sandstone", hex: "#D2B48C" }
  //   ]
  // };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans">
      <div className="container mx-auto px-6">

        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.4em] font-bold text-secondary/40 mb-12">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="w-1 h-1 bg-primary rounded-full"></span>
          <Link href="/product" className="hover:text-primary transition-colors">Collection</Link>
          <span className="w-1 h-1 bg-primary rounded-full"></span>
          <span className="text-secondary opacity-70 italic">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">

          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-square overflow-hidden bg-accent rounded-3xl group">
              {/* <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              /> */}


              <img src={images} alt=""
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute top-6 left-6 bg-primary text-secondary text-[10px] font-bold px-4 py-2 uppercase tracking-widest rounded-full shadow-lg">
                Artisan Selection
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === idx ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                >
                  <img onClick={() => setImages(img)} src={img} alt="Detail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              {/* <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] block">{product.brand}</span> */}
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary tracking-tight leading-tight">
                {product.title}
              </h1>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-accent-dark'}`} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-text-muted tracking-widest">({product.reviews[0].comment} REVIEWS)</span>
                </div>
                <span className="text-[11px] font-bold text-primary tracking-widest uppercase">SKU: {product.sku}</span>
              </div>
            </div>

            <div className="flex items-end gap-4">
              <span className="text-3xl font-serif font-bold text-secondary">$. {product.price}</span>
              {/* {product.oldPrice && (
                <span className="text-lg font-serif text-text-muted line-through mb-1">Rs. {product.oldPrice}</span>
              )} */}
            </div>

            <p className="text-text-muted leading-relaxed font-light italic border-l-2 border-primary/20 pl-6">
              {product.description}
            </p>

            {/* Finish Selection */}
            <div className="space-y-6 pt-4">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary">Material Finish</h3>
              <div className="flex flex-wrap gap-5">
                {/* {product.finishes.map((finish) => (
                  <button
                    key={finish.name}
                    className="group flex flex-col items-center gap-3"
                    title={finish.name}
                  >
                    <div
                      className="w-10 h-10 rounded-full border-2 border-accent-dark group-hover:border-primary group-hover:scale-110 transition-all shadow-inner"
                      style={{ backgroundColor: finish.hex }}
                    />
                    <span className="text-[8px] uppercase tracking-widest text-text-muted group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all">{finish.name}</span>
                  </button>
                ))} */}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-accent-dark rounded-full px-4 h-14">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 text-secondary hover:text-primary transition-colors font-bold"
                  >–</button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-12 bg-transparent text-center text-sm font-bold text-secondary outline-none hide-arrows"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 text-secondary hover:text-primary transition-colors font-bold"
                  >+</button>
                </div>
                <Link href="/check-out" className="flex-1 h-14 bg-secondary text-background font-bold text-[11px] uppercase tracking-[0.3em] rounded-full hover:bg-primary transition-all duration-500 shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  Secure Your Piece
                </Link>
              </div>

              <Link href="/wish-list" className="flex items-center justify-center gap-3 w-full h-14 border border-accent-dark text-secondary font-bold text-[11px] uppercase tracking-[0.3em] rounded-full hover:bg-accent-dark transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                Add to Wishlist
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-12">
              <div className="text-center space-y-2">
                <div className="flex justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="1.5" /></svg>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-text-muted block">Lifetime Warranty</span>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5" /></svg>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-text-muted block">Expedited Shipping</span>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-6.857 2.286L12 21l-2.286-6.857L3 12l6.857-2.286L12 3z" strokeWidth="1.5" /></svg>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-text-muted block">Artisan Craft</span>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-32 border-t border-accent-dark pt-16">
          <div className="flex justify-center gap-12 mb-16 px-4 overflow-x-auto no-scrollbar">
            {['description', 'specifications', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] uppercase tracking-[0.4em] font-bold transition-all relative pb-4 whitespace-nowrap ${activeTab === tab ? 'text-secondary' : 'text-text-muted hover:text-secondary'
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary animate-fadeIn"></span>
                )}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'description' && (
              <div className="animate-fadeIn space-y-8 text-center md:text-left">
                <h2 className="text-3xl font-serif font-bold text-secondary">A Legacy of Comfort</h2>
                <p className="text-lg text-text-muted font-light leading-relaxed">
                  Every Aurelius piece undergoes a rigorous 48-hour inspection process to ensure the upholstery tension and wood finish meet our boutique standards. The ergonomics are inspired by classic mid-century silhouettes but enhanced with high-density architectural foam for a "sink-in" feel that maintains its structure over decades.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                  <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl" alt="Process" />
                  <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl" alt="Material" />
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="animate-fadeIn bg-accent-dark/50 p-12 rounded-[2rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24">
                  {/* {product.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between border-b border-accent-dark pb-4">
                      <span className="text-[11px] uppercase tracking-widest text-text-muted font-bold">{detail.label}</span>
                      <span className="text-sm text-secondary font-medium">{detail.value}</span>
                    </div>
                  ))} */}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="animate-fadeIn text-center space-y-6">
                <h3 className="text-2xl font-serif font-bold text-secondary italic">Global White-Glove Delivery</h3>
                <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                  We offer complimentary white-glove assembly for all furniture pieces within metropolitan areas. Our delivery team will unwrap, inspect, and position your new masterpiece in the location of your choosing.
                </p>
                <div className="flex justify-center gap-8 pt-6">
                  <div className="px-8 py-4 border border-accent-dark rounded-full text-[10px] uppercase tracking-widest font-bold">Free Returns (30 Days)</div>
                  <div className="px-8 py-4 border border-accent-dark rounded-full text-[10px] uppercase tracking-widest font-bold">Secure Packaging</div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsLayout;
