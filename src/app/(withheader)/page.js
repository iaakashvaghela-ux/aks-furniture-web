import BestsellingProducts from "./components/pages/home/BestsellingProducts";
import DeliverySection from "./components/pages/home/DeliverySection";
import NewsLetter from "./components/pages/home/NewsLetter";
import NewTrendingCollection from "./components/pages/home/NewTrendingCollection";
import ProductArea from "./components/pages/home/ProductArea";
import Slider from "./components/pages/home/Slider";
import TestimonialSection from "./components/pages/home/TestimonialSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Slider />
      <DeliverySection />
      <ProductArea />
      <NewTrendingCollection/>
      <BestsellingProducts/>
      <TestimonialSection/>
      <NewsLetter />
    </main>
  );
}
