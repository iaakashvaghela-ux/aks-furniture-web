import React from 'react';

const AddressInput = ({ label, type, placeholder }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-accent-dark/30 border border-accent-dark/50 rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-text-muted/30 text-secondary"
    />
  </div>
);

export default function DashboardAddresses() {
  return (
    <div className="space-y-12 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Saved Locations</h2>
        <p className="text-text-muted text-sm italic">The following addresses will be used on the checkout page by default.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-xl font-serif font-bold text-secondary italic border-b border-primary/20 pb-4">Billing Address</h3>
          <form className="space-y-5">
            <AddressInput label="Billing Name" type="text" placeholder="Johnathan Doe" />
            <AddressInput label="Billing Email" type="email" placeholder="john@monsta.com" />
            <AddressInput label="Mobile Number" type="tel" placeholder="+91 000 000 0000" />
            <AddressInput label="Street Address" type="text" placeholder="123 Luxury Ave" />
            <div className="grid grid-cols-2 gap-4">
              <AddressInput label="City" type="text" placeholder="London" />
              <AddressInput label="State" type="text" placeholder="England" />
            </div>
            <button type="button" className="w-full h-12 bg-secondary text-background text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-primary transition-all duration-300">
              Update Billing
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-serif font-bold text-secondary italic border-b border-primary/20 pb-4">Shipping Address</h3>
          <form className="space-y-5">
            <AddressInput label="Shipping Name" type="text" placeholder="Johnathan Doe" />
            <AddressInput label="Shipping Email" type="email" placeholder="john@monsta.com" />
            <AddressInput label="Mobile Number" type="tel" placeholder="+91 000 000 0000" />
            <AddressInput label="Street Address" type="text" placeholder="456 Artisan Blvd" />
            <div className="grid grid-cols-2 gap-4">
              <AddressInput label="City" type="text" placeholder="New York" />
              <AddressInput label="State" type="text" placeholder="NY" />
            </div>
            <button type="button" className="w-full h-12 bg-secondary text-background text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-primary transition-all duration-300">
              Update Shipping
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
