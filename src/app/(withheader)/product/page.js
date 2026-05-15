
import ProductPageLayout from "@/app/(withheader)/components/pages/products/ProductPageLayout";
import { categoryApi } from "../api-fetching/product/productCategory";
import { productApi } from "../api-fetching/product/productApi";


export default async function ProductPage() {

  const dataObj = await productApi();
  const categoryObj = await categoryApi();
  // console.log(categoryObj);

  return (<ProductPageLayout data={dataObj?._data || []} categoryData={categoryObj?._data || []} path={dataObj?.path || ""} />)
}





