import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {slides} from "@/Data/data"
import {categories} from "@/Data/data"

const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    }),
  );

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Categories */}
          <div className="hidden md:block md:w-1/5 bg-white rounded-2xl shadow p-4">
            <h2 className="font-semibold mb-3 text-gray-800">Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  className="text-gray-600 hover:text-black cursor-pointer transition flex gap-2"
                >
                 <cat.icon size={20} className="text-red-500"/> {cat.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Carousel */}
          <div className="w-full md:w-4/5 relative rounded-2xl shadow-lg">
            <Carousel
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
              onMouseEnter={() => plugin.current?.stop()}
              onMouseLeave={() => plugin.current?.reset()}
            >
              <CarouselContent>
                {slides.map((slide) => (
                  <CarouselItem key={slide.id}>
                    <div className="relative h-48 md:h-96">
                      <img
                      loading="lazy"
                        src={`${slide.image}?w=300&h=300&fit=crop&auto=format&q=60`}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay */}
                      {/* <div className="absolute inset-0  flex flex-col justify-center px-6 text-white rounded-2xl">
                        <h2 className="text-xl md:text-3xl font-bold">
                          {slide.title}
                        </h2>
                        <p className="mt-2 text-sm md:text-base">
                          {slide.desc}
                        </p>
                      </div> */}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-4 z-10" />
              <CarouselNext className="right-4 z-10" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
