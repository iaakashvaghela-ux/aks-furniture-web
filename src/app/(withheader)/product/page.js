
import ProductPageLayout from "@/app/(withheader)/components/pages/products/ProductPageLayout";
import { Products } from "../api-fetching/ApiFetch";


export default async function ProductPage() {

  const dataObj = await Products();


  return (<ProductPageLayout data={dataObj} />)
}





