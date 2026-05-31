import React, { useEffect, useState } from "react";

const BoostProductsection = () => {
  const targetDate = new Date("2026-06-01T00:00:00");

  const getTimeLeft = () => {
    const diff = targetDate - new Date();

    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-[90%] mx-auto my-8">
      <div className="relative w-full h-64 md:h-auto rounded-xl overflow-hidden">

        {/* ✅ IMAGE (natural height) */}
        <img
          src="https://admin.js.qa/media/.renditions/wysiwyg/iPhone_17_Web_Banner.jpg"
          alt="banner"
          className=" md:w-full h-full object-cover"
        />

        {/* ✅ SOFT GRADIENT (keeps image clear) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-white">

          <div>

            <button className="mt-4 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md text-sm font-semibold transition">
              Buy Now
            </button>
          </div>

          {/* TIMER */}
          <div className="flex gap-2 md:gap-3">
            {[
              { label: "D", value: timeLeft.d },
              { label: "H", value: timeLeft.h },
              { label: "M", value: timeLeft.m },
              { label: "S", value: timeLeft.s },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 text-black px-3 py-2 rounded-md text-center min-w-[55px] shadow"
              >
                <div className="text-lg font-bold">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[10px]">{item.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BoostProductsection;