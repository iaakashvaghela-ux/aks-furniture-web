import BestsellingProducts from "./components/pages/home/BestsellingProducts";
import DeliverySection from "./components/pages/home/DeliverySection";
import NewsLetter from "./components/pages/home/NewsLetter";
import NewTrendingCollection from "./components/pages/home/NewTrendingCollection";
import ProductArea from "./components/pages/home/ProductArea";
import Slider from "./components/pages/home/Slider";
import TestimonialSection from "./components/pages/home/TestimonialSection";
import { homeSliderApi } from "./api-fetching/home/homeSliderApi";
import { homeProductApi } from "./api-fetching/home/homeProductApi";

export default async function Home() {
  let res = await homeProductApi()
  let sliderRes = await homeSliderApi()
  // console.log(sliderRes);
  return (
    <main className="overflow-hidden">
      <Slider sliderData={sliderRes?._data || []} path={sliderRes?.path || ""} />
      <DeliverySection />
      <ProductArea products={res?._data || []} path={res?.path || ""} />
      <NewTrendingCollection />
      <BestsellingProducts productsData={res?._data || []} path={res?.path || ""} />
      <TestimonialSection />
      <NewsLetter />
    </main>
  );
}
