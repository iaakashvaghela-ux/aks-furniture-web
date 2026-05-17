
import { Suspense } from "react";
import ProductPageLayout from "@/app/(withheader)/components/pages/products/ProductPageLayout";
import { categoryApi } from "../api-fetching/product/productCategory";
import { productApi } from "../api-fetching/product/productApi";

function ProductPageFallback() {
  return (
    <div className="bg-background min-h-screen pt-24">
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="text-xl font-serif text-secondary italic">Loading collection...</p>
      </div>
    </div>
  );
}

export default async function ProductPage() {

  const dataObj = await productApi();
  const categoryObj = await categoryApi();
  // console.log(categoryObj);

  return (
    <Suspense fallback={<ProductPageFallback />}>
      <ProductPageLayout data={dataObj?._data || []} categoryData={categoryObj?._data || []} path={dataObj?.path || ""} />
    </Suspense>
  )
}





