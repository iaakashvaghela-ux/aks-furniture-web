import React from 'react'
import WishlistLayout from '@/app/(withheader)/components/pages/wishlist/WishlistLayout'

export const metadata = {
  title: "Aesthete's Wishlist | Monsta Artisan Collection",
  description: "Curate your personal sanctuary with handcrafted pieces that speak to your soul.",
};

export default function WishListPage() {
  return (
    <div className="overflow-hidden">
      <WishlistLayout />
    </div>
  )
}

