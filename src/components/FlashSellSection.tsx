import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { flashSaleProducts } from "@/Data/data";

const TimeBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-black text-white px-3 py-1.5 rounded-md text-base font-semibold min-w-[40px] text-center">
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-[10px] text-gray-500 mt-1">{label}</span>
  </div>
);

const FlashSellSection = () => {
  // 🕒 SET YOUR END TIME HERE
  const endTime = new Date("2026-07-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const autoScroll = React.useRef(
    AutoScroll({
      speed: 1,
      stopOnInteraction: true, // pause when user clicks
      stopOnMouseEnter: true, // pause on hover
    }),
  );

  return (
    <div className="w-full py-5 ">
      <div className="w-full mx-auto overflow-hidden">
        <div className="md:flex md:items-center md:justify-between  p-4 bg-white rounded-md">
          {/* Left: Flash Sale */}
          <div className="flex  items-center gap-3">
            <div className="w-3 h-12 bg-red-500 text-white flex items-center justify-center rounded-xs"></div>
            <span className="text-3xl font-bold text-red-500">Flash Sale</span>
            <span className="text-sm text-gray-500  sm:block">
              Limited time deals
            </span>
          </div>

          {/* Right: Countdown */}
          <div className=" flex items-center gap-3 justify-center mt-5 ">
            <TimeBox value={timeLeft.days} label="Days" />
            <span className="text-lg font-bold text-gray-400">:</span>

            <TimeBox value={timeLeft.hours} label="Hrs" />
            <span className="text-lg font-bold text-gray-400">:</span>

            <TimeBox value={timeLeft.minutes} label="Min" />
            <span className="text-lg font-bold text-gray-400">:</span>

            <TimeBox value={timeLeft.seconds} label="Sec" />
          </div>
        </div>

        <Carousel
          opts={{
            loop: true,
            dragFree: true,
          }}
          plugins={[autoScroll.current]}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2">
            {flashSaleProducts.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* ✅ Navigation Buttons */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow" />
        </Carousel>
      </div>
      <div className="w-full flex justify-center">
        <Button className=" w-[20%] bg-red-500 text-white hover:bg-red-800 rounded-none">
          View All
        </Button>
      </div>
    </div>
  );
};

export default FlashSellSection;
