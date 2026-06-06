import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { bestSellingProducts } from "@/Data/data";

const RelatedProducts = () => {
  return (
    <>
    <Carousel
          opts={{ align: "start",loop: true,
            dragFree: true }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2">
            {bestSellingProducts.map((product, index) => {

              return (
               <CarouselItem
                key={index}
                className="pl-2 basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
               <ProductCard product={product}/>
              </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow" />
        </Carousel>

      <div className="w-full flex justify-center">
        <Button className=" w-[20%] bg-red-500 text-white hover:bg-red-800 rounded-none">View All</Button>
      </div>
   
    </>
  )
}

export default RelatedProducts