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
      <SearchBar className="" />
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <FlashSellSection />
      </Suspense>
      <hr />
      <section className="w-full mt-2">
        <div className="w-full mx-auto overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-md">
            <div className="flex items-center gap-3">
              <div className="w-2 h-10 bg-red-500 rounded-sm"></div>
              <span className="text-3xl font-bold text-red-500">
                Categories
              </span>
              <span className="text-sm text-gray-500 hidden sm:block">
                Browse by category
              </span>
            </div>
          </div>

          <CatagorySection />
        </div>
      </section>

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
