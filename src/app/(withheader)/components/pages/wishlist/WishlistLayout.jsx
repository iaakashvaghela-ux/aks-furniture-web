"use client";
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/(withheader)/api-fetching/cartApi/addToCart';
import { getCartItems } from '@/app/(withheader)/api-fetching/cartApi/cartApi';
import { getWishlistItems, removeFromWishlist } from '@/app/(withheader)/api-fetching/wishlistApi/wishlistApi';
import { setCart } from '@/redux/slices/cartSlice';
import { setWishlist } from '@/redux/slices/wishlistSlice';

const WishlistLayout = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const fetchWishlistItems = useCallback(async () => {
    const response = await getWishlistItems();
    setWishlistItems(response.data || []);
    dispatch(setWishlist(response.data || []));
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchWishlistItems();
  }, [fetchWishlistItems]);

  const removeItem = async (id) => {
    const response = await removeFromWishlist(id);
    if (response.success) {
      fetchWishlistItems();
    }
  };

  const addWishlistItemToCart = async (item) => {
    const productId = item.productId?._id || item.productId;
    const categoryId = item.category?._id || item.category;
    const response = await addToCart(productId, 1, item.price, item.image, item.name, categoryId, item.path);

    if (response.success) {
      const cartResponse = await getCartItems();
      dispatch(setCart(cartResponse.data || []));
      router.push("/cart");
      return;
    }

    if (response.message === "Authorization token missing") {
      router.push("/login");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-xl font-serif text-secondary italic">Loading your saved pieces...</p>
      </div>
    );
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-8 animate-fadeIn">
        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-serif font-bold text-secondary italic">Your wishlist is empty</h2>
          <p className="text-text-muted font-light px-4">Save your favourite pieces and come back to them anytime.</p>
        </div>
        <Link href="/product" className="px-10 py-4 bg-secondary text-background font-bold text-[11px] uppercase tracking-[0.3em] rounded-full hover:bg-primary transition-all duration-500 shadow-xl">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] block">Your Inspirations</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight">
              My Wishlist
            </h1>
          </div>
          <div className="text-text-muted text-[11px] font-bold uppercase tracking-[0.2em] border-b border-accent-dark pb-2">
            {wishlistItems.length} Saved {wishlistItems.length === 1 ? 'Item' : 'Items'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {wishlistItems.map((item, idx) => {
            const product = item.productId || {};
            const isInStock = !product.stocks || product.stocks > 0;
            const productHref = product.slug ? `/product/${product.slug}` : "/product";

            return (
              <div
                key={item._id}
                className="group relative flex flex-col bg-accent-dark/10 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/20 transition-all duration-700 hover:shadow-2xl animate-fadeInUp"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Link href={productHref} className="block w-full h-full">
                    <img
                      src={`${item.path}${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </Link>

                  <div className="absolute top-6 right-6">
                    <button
                      onClick={() => removeItem(item._id)}
                      className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg"
                      title="Remove from Wishlist"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <span className={`px-4 py-2 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg ${isInStock ? 'bg-primary/90 text-secondary' : 'bg-secondary/80 text-background'}`}>
                      {isInStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">{item.category?.name || 'Monsta Selection'}</span>
                    <h3 className="text-xl font-serif font-bold tracking-tight">
                      <Link href={productHref}>{item.name}</Link>
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 gap-4">
                    <span className="text-2xl font-serif font-bold whitespace-nowrap">Rs. {Number(item.price).toLocaleString()}</span>
                    <button
                      onClick={() => addWishlistItemToCart(item)}
                      disabled={!isInStock}
                      className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${isInStock
                        ? 'bg-secondary text-background hover:bg-primary shadow-lg hover:-translate-y-1'
                        : 'border border-accent-dark text-text-muted cursor-not-allowed'
                        }`}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 pt-16 border-t border-accent-dark text-center">
          <Link href="/product" className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary">
            Continue Shopping
          </Link>
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
