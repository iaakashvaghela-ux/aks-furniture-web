"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCartItems, removeFromCart, updateCartQuantity } from '@/app/(withheader)/api-fetching/cartApi/cartApi';
import { useDispatch } from 'react-redux';
import { setCart } from '@/redux/slices/cartSlice';

const CartLayout = () => {




  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await getCartItems();
      setCartItems(response.data);
      dispatch(setCart(response.data));
    };
    fetchCartItems();
  }, []);

  const updateQuantity = async (id, delta) => {
    const response = await updateCartQuantity(id, delta);
    let res = await getCartItems();
    if (response.success) {
      setCartItems(res.data);
    }


    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = async (id) => {
    const response = await removeFromCart(id);
    let res = await getCartItems();
    if (response.success) {
      setCartItems(res.data);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 45.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-8 animate-fadeIn">
        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-serif font-bold text-secondary italic">Your gallery is empty</h2>
          <p className="text-secondary/40 font-light">Curate your space with pieces that speak to your soul.</p>
        </div>
        <Link href="/" className="px-10 py-4 bg-secondary text-background font-bold text-[11px] uppercase tracking-[0.3em] rounded-full hover:bg-primary transition-all duration-500 shadow-xl">
          Start Exploring
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-secondary">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] block">Your Collection</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight">
              Selected Pieces
            </h1>
          </div>
          <div className="text-secondary/40 text-[11px] font-bold uppercase tracking-[0.2em] border-b border-border pb-2">
            {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in Cart
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Cart Items Table */}
          <div className="lg:col-span-8 space-y-8">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-6 border-b border-border text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">
              <div className="col-span-6 text-left">Product Details</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">price</div>
              <div className="col-span-2 text-right">Remove</div>
            </div>

            <div className="space-y-12">
              {cartItems.map((item) => (
                <div key={item._id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-fadeInUp">
                  <div className="col-span-12 md:col-span-6 flex items-center gap-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-accent rounded-2xl overflow-hidden group">
                      <img
                        src={item.path + item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.category.name}</span>
                      <h3 className="text-lg font-serif font-bold leading-snug">{item.name}</h3>
                      <p className="text-xs text-secondary/40 font-light italic">Artisan Finished</p>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-2 flex justify-center">
                    <div className="flex items-center bg-accent rounded-full px-4 h-10 border border-border/20 hover:border-primary/20 transition-all">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="w-6 text-secondary hover:text-primary transition-colors text-lg"
                      >–</button>
                      <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                      <button
                        disabled={item.quantity === item.productId.stocks}
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="w-6 text-secondary hover:text-primary transition-colors text-lg"
                      >+</button>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-2 text-center">
                    <span className="text-lg font-serif font-bold text-primary whitespace-nowrap">${
                      (item.price * item.quantity).toLocaleString()}</span>
                    {item.quantity > 1 && (
                      <p className="text-[9px] text-secondary/40 font-bold uppercase tracking-widest mt-1">${item.price}/ea</p>
                    )}
                  </div>

                  <div className="col-span-12 md:col-span-2 text-right">
                    <button
                      onClick={() => removeItem(item._id)}
                      className="group p-3 hover:bg-red-500/10 rounded-full transition-all"
                    >
                      <svg className="w-4 h-4 text-secondary/20 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="bg-accent-dark/30 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl space-y-8">
              <h2 className="text-2xl font-serif font-bold tracking-tight">Order Insight</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary/40 font-medium uppercase tracking-widest text-[10px]">Subtotal Pieces</span>
                  <span className="font-bold font-serif">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary/40 font-medium uppercase tracking-widest text-[10px]">White-Glove Shipping</span>
                  <span className="font-bold font-serif">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary/40 font-medium uppercase tracking-widest text-[10px]">Estimated Tax</span>
                  <span className="font-bold font-serif">${tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>

                <div className="pt-4 mt-4 border-t border-accent-dark flex justify-between items-center">
                  <span className="font-bold uppercase tracking-[0.2em] text-[11px]">Total Investment</span>
                  <div className="text-right">
                    <span className="text-3xl font-serif font-bold text-secondary block">${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    <span className="text-[9px] text-secondary/40 uppercase tracking-widest font-bold">Inclusive of all taxes</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link href="/check-out" className="w-full h-16 bg-secondary text-background font-bold text-[11px] uppercase tracking-[0.3em] rounded-full hover:bg-primary transition-all duration-500 shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  Commit to Purchase
                </Link>
                <Link href="/" className="block w-full py-4 text-center text-secondary/40 hover:text-secondary text-[10px] font-bold uppercase tracking-widest transition-colors">
                  Continue Curating
                </Link>
              </div>

              {/* Secure Checkout Badge */}
              <div className="pt-6 border-t border-accent-dark/50 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 10.91c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Secure Encryption</span>
                </div>
                <div className="w-[1px] h-3 bg-accent-dark"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Artisan Guarantee</span>
                </div>
              </div>
            </div>
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CartLayout;
