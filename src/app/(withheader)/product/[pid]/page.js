import { ProductBySlug } from '@/app/(withheader)/api-fetching/ApiFetch';
import ProductDetailsLayout from '@/app/(withheader)/components/pages/productdetailscomponent/ProductDetailsLayout'
import React from 'react'

export default async function ProductdetailsPage({ params }) {
  const { pid } = await params;
  console.log(pid);

  const data = await ProductBySlug(pid);

  return (
    <ProductDetailsLayout product={data} />
  )
}
