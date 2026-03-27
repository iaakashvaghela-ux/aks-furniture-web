import React from 'react'
import CartLayout from '@/app/(withheader)/components/pages/cart/CartLayout'

export const metadata = {
  title: "Your Selected Pieces | Monsta Artisan Collection",
  description: "Review your selection of handcrafted artisan furniture and proceed to secure your investment.",
};

export default function CartPage() {
  return (
    <div className="overflow-hidden">
      <CartLayout />
    </div>
  )
}

