import ProductDetailsLayout from '@/app/(withheader)/components/pages/productdetailscomponent/ProductDetailsLayout'
import React from 'react'
import { productBySlug } from '../../api-fetching/product/productApi';

export default async function ProductdetailsPage({ params }) {
  const { slug } = await params;

  const res = await productBySlug(slug);

  return (
    <ProductDetailsLayout product={res?._data} path={res?.path} />
  )
}
