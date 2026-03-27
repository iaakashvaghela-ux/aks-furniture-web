"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const CheckoutLayout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    postalCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const cartSummary = {
    items: [
      { name: "Aurelius Velvet Lounge Chair", price: 850, qty: 1, img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop" },
      { name: "Minimalist Marble Side Table", price: 420, qty: 1, img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000&auto=format&fit=crop" }
    ],
    subtotal: 1270,
    shipping: 45,
    tax: 101.60,
    total: 1416.60
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const FormInput = ({ label, name, placeholder, type = "text" }) => (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 ml-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-full bg-accent border border-border rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-secondary/20 text-secondary"
      />
    </div>
  );

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-secondary">
      <div className="container mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] block">Secure Acquisition</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
              Checkout
            </h1>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
            <span className={step >= 1 ? "text-secondary font-bold" : "text-secondary/40 font-bold"}>Details</span>
            <span className="w-8 h-[1px] bg-border"></span>
            <span className={step >= 2 ? "text-secondary font-bold" : "text-secondary/40 font-bold"}>Shipping</span>
            <span className="w-8 h-[1px] bg-border"></span>
            <span className={step >= 3 ? "text-secondary font-bold" : "text-secondary/40 font-bold"}>Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Main Checkout Form */}
          <div className="lg:col-span-7 space-y-12 animate-fadeIn">

            {/* Contact Information */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-background flex items-center justify-center text-xs font-bold">01</div>
                <h2 className="text-2xl font-serif font-bold">Contact Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="Email Address" name="email" placeholder="curator@monsta.com" type="email" />
                <FormInput label="Phone Number" name="phone" placeholder="+1 (555) 000-0000" />
              </div>
            </section>

            {/* Shipping Details */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-background flex items-center justify-center text-xs font-bold">02</div>
                <h2 className="text-2xl font-serif font-bold">Shipping Address</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="First Name" name="firstName" placeholder="Lumiere" />
                <FormInput label="Last Name" name="lastName" placeholder="Beaufort" />
                <div className="md:col-span-2">
                  <FormInput label="Street Address" name="address" placeholder="123 Artisan Way" />
                </div>
                <FormInput label="City" name="city" placeholder="Florence" />
                <FormInput label="Postal Code" name="postalCode" placeholder="50123" />
              </div>
            </section>

            {/* Payment Method */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-background flex items-center justify-center text-xs font-bold">03</div>
                <h2 className="text-2xl font-serif font-bold">Vault Entry (Payment)</h2>
              </div>
              <div className="bg-accent p-8 rounded-[2rem] border border-border space-y-6">
                <div className="flex gap-4 mb-4">
                  <div className="px-4 py-2 bg-white rounded-lg border border-border/10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-border/10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                  </div>
                </div>
                <FormInput label="Card Number" name="cardNumber" placeholder="0000 0000 0000 0000" />
                <div className="grid grid-cols-2 gap-6">
                  <FormInput label="Expiry Date" name="expiry" placeholder="MM / YY" />
                  <FormInput label="CVV" name="cvv" placeholder="•••" />
                </div>
              </div>
            </section>

            <div className="pt-8">
              <button className="w-full h-16 bg-secondary text-background font-bold text-[11px] uppercase tracking-[0.4em] rounded-full hover:bg-primary transition-all duration-500 shadow-2xl transform hover:-translate-y-1">
                Finalize Secure Transaction
              </button>
              <p className="text-center text-[9px] text-secondary/40 mt-6 font-bold uppercase tracking-[0.2em] px-8 leading-relaxed">
                By clicking "Finalize Secure Transaction", you agree to our Artisan Terms of Service and white-glove delivery protocols.
              </p>
            </div>
          </div>

          {/* Right Column: Order Preview */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="bg-secondary text-background p-10 rounded-[2.5rem] shadow-2xl space-y-8">
                <h2 className="text-2xl font-serif font-bold">Invested Pieces</h2>

                <div className="space-y-6">
                  {cartSummary.items.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-center">
                      <div className="w-20 h-20 bg-accent rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="text-sm font-serif font-bold leading-tight">{item.name}</h4>
                        <p className="text-[10px] text-background/60 font-bold uppercase tracking-widest">Qty: {item.qty} × ${item.price}</p>
                      </div>
                      <div className="font-serif font-bold text-sm">${(item.price * item.qty).toLocaleString()}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-background/10 space-y-4">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-background/60">
                    <span>Subtotal</span>
                    <span className="text-background">${cartSummary.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-background/60">
                    <span>White-Glove Shipping</span>
                    <span className="text-background">${cartSummary.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-background/60">
                    <span>Vat / Luxury Tax</span>
                    <span className="text-background">${cartSummary.tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-6 mt-4 border-t border-background/20 flex justify-between items-end">
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">Total Investment</span>
                    <span className="text-4xl font-serif font-bold text-primary">${cartSummary.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="px-8 grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="w-6 h-6 text-primary">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h5 className="text-[9px] font-bold uppercase tracking-widest">Life-Time Artisan Guarantee</h5>
                </div>
                <div className="space-y-2">
                  <div className="w-6 h-6 text-primary">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h5 className="text-[9px] font-bold uppercase tracking-widest">End-to-End Encryption</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CheckoutLayout;
