"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/app/(withheader)/api-fetching/cartApi/addToCart';
import { addToWishlist, getWishlistItems } from '@/app/(withheader)/api-fetching/wishlistApi/wishlistApi';
import { useDispatch } from 'react-redux';
import { setWishlist } from '@/redux/slices/wishlistSlice';
import { resolveImageUrl } from '../../../utils/imageUrl';

const ProductDetailsLayout = ({ product, path }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const router = useRouter();
  const dispatch = useDispatch();

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-serif text-secondary italic">Exquisite pieces are worth the wait...</p>
      </div>
    );
  }

  const categoryId = product.parentCategory?._id || product.parentCategory;
  const productImage = product.productImage || product.galleryImage?.[0];
  const selectedProductImage = selectedImage === null ? productImage : product.galleryImage?.[selectedImage];
  const displayImage = resolveImageUrl(path, selectedProductImage, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHICWZcFeQ7UuaU7N30-E4Vt1GaTYIU1DIEA&s');

  const handleAddToWishlist = async () => {
    const response = await addToWishlist(product._id, product.salePrice, productImage, product.productName, categoryId, path);
    if (response.success) {
      const wishlistResponse = await getWishlistItems();
      dispatch(setWishlist(wishlistResponse.data));
      router.push("/wish-list");
      return;
    }

    if (response.message === "Authorization token missing") {
      router.push("/login");
    }
  };

  console.log(product);
  return (
    <div className="bg-background min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24 font-sans">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] font-bold text-secondary/40 mb-8 lg:mb-12">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="w-1 h-1 bg-primary rounded-full"></span>
          <Link href="/product" className="hover:text-primary transition-colors">Collection</Link>
          <span className="w-1 h-1 bg-primary rounded-full"></span>
          <span className="text-secondary opacity-70 italic truncate max-w-[150px] sm:max-w-none">{product?.productName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">

          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="relative aspect-square overflow-hidden bg-accent rounded-2xl sm:rounded-3xl group shadow-sm">
              <img src={displayImage} alt={product?.productName}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-primary text-secondary text-[8px] sm:text-[10px] font-bold px-3 py-1.5 sm:px-4 sm:py-2 uppercase tracking-widest rounded-full shadow-lg">
                Artisan Selection
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {product.galleryImage && Array.isArray(product.galleryImage) && product.galleryImage.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedImage(idx);
                  }}
                  className={`relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === idx ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                >
                  <img src={resolveImageUrl(path, img)} alt="Detail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-secondary tracking-tight leading-tight">
                {product.productName}
              </h1>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${product.rating && i < Math.floor(product.rating) ? 'fill-current' : 'text-accent-dark'}`} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-text-muted tracking-widest">({product.rating || 0} REVIEWS)</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-primary tracking-widest uppercase">SKU: {product.sku || 'N/A'}</span>
              </div>
            </div>

            <div className="flex items-end gap-4">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-secondary">Rs. {product.salePrice}</span>
              {product.actualPrice && product.actualPrice > product.salePrice && (
                <span className="text-base sm:text-lg font-serif text-text-muted line-through mb-1">Rs. {product.actualPrice}</span>
              )}
            </div>

            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-light italic border-l-2 border-primary/20 pl-4 sm:pl-6">
              {product.description}
            </p>

            {/* Actions */}
            <div className="space-y-4 sm:space-y-6 pt-4 lg:pt-8">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="flex items-center justify-between sm:justify-start bg-accent-dark rounded-full px-6 sm:px-4 h-14">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 sm:w-8 text-secondary hover:text-primary transition-colors font-bold text-lg"
                  >–</button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-12 bg-transparent text-center text-sm font-bold text-secondary outline-none hide-arrows"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 sm:w-8 text-secondary hover:text-primary transition-colors font-bold text-lg"
                  >+</button>
                </div>
                <Link href="/check-out" className="py-4 flex-1 h-14 bg-secondary text-background font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-full hover:bg-primary transition-all duration-500 shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  Secure Your Piece
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    addToCart(product._id, quantity, product.salePrice, productImage, product.productName, categoryId, path);
                    // console.log(product.color);
                    setTimeout(() => {
                      router.push("/cart");
                    }, 500);
                  }}
                  className="flex-1 h-14 border border-secondary text-secondary font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-full hover:bg-secondary hover:text-background transition-all duration-500 flex items-center justify-center"
                >
                  Add To Cart
                </button>
                <button onClick={handleAddToWishlist} className="py-4 flex-[0.5] flex items-center justify-center gap-3 h-14 border border-accent-dark text-secondary font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-full hover:bg-accent-dark transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                  Wishlist
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 pt-8 sm:pt-12">
              <div className="text-center space-y-2">
                <div className="flex justify-center text-primary">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="1.5" /></svg>
                </div>
                <span className="text-[7px] sm:text-[8px] uppercase tracking-widest text-text-muted block font-bold">Lifetime Warranty</span>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center text-primary">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5" /></svg>
                </div>
                <span className="text-[7px] sm:text-[8px] uppercase tracking-widest text-text-muted block font-bold">Expedited Shipping</span>
              </div>
              <div className="text-center space-y-2 col-span-2 sm:col-span-1">
                <div className="flex justify-center text-primary">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-6.857 2.286L12 21l-2.286-6.857L3 12l6.857-2.286L12 3z" strokeWidth="1.5" /></svg>
                </div>
                <span className="text-[7px] sm:text-[8px] uppercase tracking-widest text-text-muted block font-bold">Artisan Craft</span>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-20 lg:mt-32 border-t border-accent-dark pt-12 lg:pt-16">
          <div className="flex justify-center gap-6 sm:gap-12 mb-10 lg:mb-16 px-4 overflow-x-auto no-scrollbar">
            {['description', 'specifications', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.4em] font-bold transition-all relative pb-4 whitespace-nowrap ${activeTab === tab ? 'text-secondary' : 'text-text-muted hover:text-secondary'
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
              <div className="animate-fadeIn space-y-6 sm:space-y-8 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-secondary">A Legacy of Comfort</h2>
                <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
                  Every piece undergoes a rigorous 48-hour inspection process to ensure the upholstery tension and wood finish meet our boutique standards. The ergonomics are inspired by classic mid-century silhouettes but enhanced with high-density architectural foam for a &quot;sink-in&quot; feel that maintains its structure over decades.
                </p>
                {product.galleryImage && product.galleryImage.length >= 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 pt-4 sm:pt-8">
                    <img src={resolveImageUrl(path, product.galleryImage[0])} className="rounded-xl sm:rounded-2xl w-full shadow-md" alt="Process" />
                    <img src={resolveImageUrl(path, product.galleryImage[1])} className="rounded-xl sm:rounded-2xl w-full shadow-md" alt="Material" />
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="animate-fadeIn bg-accent-dark/30 sm:bg-accent-dark/50 p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[2rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-12 lg:gap-x-24">
                  {/* Additional specifications could go here */}
                  <div className="flex justify-between border-b border-accent-dark pb-3 sm:pb-4">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-text-muted font-bold">Category</span>
                    <span className="text-sm text-secondary font-medium">{product.parentCategory?.name || 'Signature'}</span>
                  </div>
                  <div className="flex justify-between border-b border-accent-dark pb-3 sm:pb-4">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-text-muted font-bold">Type</span>
                    <span className="text-sm text-secondary font-medium">{product.productType || 'Handcrafted'}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="animate-fadeIn text-center space-y-6 sm:space-y-8 px-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-secondary italic">Global White-Glove Delivery</h3>
                <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
                  We offer complimentary white-glove assembly for all furniture pieces within metropolitan areas. Our delivery team will unwrap, inspect, and position your new masterpiece in the location of your choosing.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-4">
                  <div className="px-6 py-3 sm:px-8 sm:py-4 border border-accent-dark rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">Free Returns (30 Days)</div>
                  <div className="px-6 py-3 sm:px-8 sm:py-4 border border-accent-dark rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">Secure Packaging</div>
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
