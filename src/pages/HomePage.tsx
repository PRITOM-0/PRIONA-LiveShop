import FlashSellSection from "@/components/FlashSellSection";
import HeroSection from "../components/HeroSection";
import CatagorySection from "@/components/CategorySection";
import BestSellingSection from "@/components/BestSellingSection";
import BoostProductsection from "@/components/BoostProductsection";
import ProductSection from "@/components/ProductSection";
import ServiceSection from "@/components/ServiceSection";
import SearchBar from "@/components/SearchBar";
const HomePage = () => {
  return (
    <>
      <SearchBar />
      <HeroSection />
      <FlashSellSection />
      <hr />
      <CatagorySection />
      <hr />
      <BestSellingSection />
      <hr />
      <BoostProductsection />
      <hr />
      <ProductSection />
      <hr />
      <ServiceSection />
    </>
  );
};

export default HomePage;
