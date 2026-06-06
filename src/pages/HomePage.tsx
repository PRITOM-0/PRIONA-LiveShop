
import { lazy, Suspense } from "react";
const FlashSellSection = lazy(() => import("@/components/FlashSellSection"));

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
      <Suspense  fallback={<div>Loading...</div>}>
        <FlashSellSection />
      </Suspense>
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
