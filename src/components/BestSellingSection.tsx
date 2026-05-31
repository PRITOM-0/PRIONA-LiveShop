 
import {
  Laptop,
  Shirt,
  Home,
  Heart,
  Dumbbell,
  Book,
  ToyBrick,
  Car,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";

// ✅ Category Data
const categories = [
  { name: "Electronics", icon: Laptop },
  { name: "Fashion", icon: Shirt },
  { name: "Home", icon: Home },
  { name: "Beauty", icon: Heart },
  { name: "Sports", icon: Dumbbell },
  { name: "Books", icon: Book },
  { name: "Toys", icon: ToyBrick },
  { name: "Automotive", icon: Car },
];

const BestSellingSection = () => {
  return (
    <section className="w-full my-5 py-5">
      <div className="w-full mx-auto overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-md">
          <div className="flex items-center gap-3">
            <div className="w-2 h-10 bg-red-500 rounded-sm"></div>
            <span className="text-3xl font-bold text-red-500">
              Best Selling
            </span>
            <span className="text-sm text-gray-500 hidden sm:block">
                Top products of the month
            </span>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start",loop: true,
            dragFree: true }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2">
            {categories.map((cat, index) => {

              return (
               <CarouselItem
                key={index}
                className="pl-2 basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <ProductCard />
              </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow" />
        </Carousel>

      </div>
      <div className="w-full flex justify-center">
        <Button className=" w-[20%] bg-red-500 text-white hover:bg-red-800 rounded-none">View All</Button>
      </div>
    </section>
  );
};

export default BestSellingSection;