import React from 'react'
import CheckoutLayout from '@/app/(withheader)/components/pages/checkout/CheckoutLayout'

export const metadata = {
  title: "Finalize Your Acquisition | Monsta Artisan Collection",
  description: "Secure your investment in handcrafted artisan furniture through our encrypted checkout portal.",
};

export default function CheckoutPage() {
  return (
    <div className="overflow-hidden">
      <CheckoutLayout />
    </div>
  )
}

