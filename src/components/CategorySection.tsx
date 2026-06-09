
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
 

// ✅ Category Data
 import {categories} from "@/Data/data"

const CategorySection = () => {
  return (
    <section className="w-full py-5">
      <div className="w-full mx-auto overflow-hidden">
        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          className="w-full relative px-10"
        >
          <CarouselContent className="-ml-2">
            {categories.map((cat, index) => {
              const Icon = cat.icon;

              return (
                <CarouselItem
                  key={index}
                  className="
                    pl-2 
                    basis-1/4      
                    md:basis-1/6    
                    lg:basis-1/8   
                    my-2  
                  "
                >
                  <Card className="h-full transition cursor-pointer group hover:bg-red-500 hover:shadow-md">
                    <CardContent className="flex flex-col items-center justify-center gap-1  transition">
                      {/* Icon */}
                      <Icon
                        size={20}
                        className="text-red-500 transition group-hover:text-white"
                      />

                      {/* Name */}
                      <span className="text-[10px] md:text-sm font-medium text-gray-700 text-center transition group-hover:text-white">
                        {cat.title}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious className="left-0 z-10 h-7 w-7" />
          <CarouselNext className="right-0 z-10 h-7 w-7" />
        </Carousel>
      </div>
    </section>
  );
};

export default CategorySection;
