import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
  "Books",
  "Toys",
  "Automotive",
];

const slides = [
  {
    id: 1,
    title: "Big Sale on Electronics",
    desc: "Up to 50% off on latest gadgets",
    image:
      "https://img.magnific.com/free-vector/black-friday-wide-orange-sale-grunge-banner_1017-34783.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    title: "New Fashion Arrivals",
    desc: "Trendy styles for everyone",
    image:
      "https://img.freepik.com/free-vector/black-friday-sale-attractive-modern-banner-design_1017-34753.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    title: "Home Essentials",
    desc: "Upgrade your living space",
    image:
      "https://static.vecteezy.com/system/resources/previews/033/324/240/non_2x/horizontal-sale-banner-web-banner-with-black-stripes-on-dark-background-with-silver-letters-glitter-and-confetti-template-design-for-holidays-black-friday-sale-special-offer-shopping-poster-vector.jpg",
  },
];

const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    }),
  );

  return (
    <section className="w-full min-h-[50vh]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Categories */}
          <div className="hidden md:block md:w-1/5 bg-white rounded-2xl shadow p-4">
            <h2 className="font-semibold mb-3 text-gray-800">Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  className="text-gray-600 hover:text-black cursor-pointer transition"
                >
                  {cat}
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
                    <div className="relative h-64 md:h-96">
                      <img
                        src={slide.image}
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
