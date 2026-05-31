import React from "react";
import { Truck, Clock, RefreshCcw } from "lucide-react";

const services = [
  {
    title: "24/7 Support",
    description: "We are here for you anytime, anywhere with dedicated support.",
    icon: Clock,
  },
  {
    title: "Free & Fast Delivery",
    description: "Get your products delivered quickly with no extra cost.",
    icon: Truck,
  },
  {
    title: "Money Back Guarantee",
    description: "Not satisfied? Get a full refund within 30 days.",
    icon: RefreshCcw,
  },
];

const ServiceSection = () => {
  return (
    <div className="w-full py-10">
         {/* Header */}
        <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-md">
          <div className="flex items-center gap-3">
            <div className="w-2 h-10 bg-red-500 rounded-sm"></div>
            <span className="text-3xl font-bold text-red-500">
              Our Services
            </span>
            <span className="text-sm text-gray-500 hidden sm:block">
                What we offer to our customers
            </span>
          </div>
        </div>
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="p-4 rounded-full bg-red-100 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 mb-4">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-2">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;