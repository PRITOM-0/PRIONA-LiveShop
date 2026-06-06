
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
    <section className="w-full my-5 py-5">
      <div className="w-full mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-md">
          <div className="flex items-center gap-3">
            <div className="w-2 h-10 bg-red-500 rounded-sm"></div>
            <span className="text-3xl font-bold text-red-500">Categories</span>
            <span className="text-sm text-gray-500 hidden sm:block">
              Browse by category
            </span>
          </div>
        </div>

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
                    basis-1/3      
                    md:basis-1/5    
                    lg:basis-1/6   
                    my-2  
                  "
                >
                  <Card className="h-full transition cursor-pointer group hover:bg-red-500 hover:shadow-md">
                    <CardContent className="flex flex-col items-center justify-center gap-3 py-6 transition">
                      {/* Icon */}
                      <Icon
                        size={28}
                        className="text-red-500 transition group-hover:text-white"
                      />

                      {/* Name */}
                      <span className="text-sm font-medium text-gray-700 text-center transition group-hover:text-white">
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
