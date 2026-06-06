import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import {allProducts} from "@/Data/data"

const ProductSection = () => {
  const products = allProducts; // Replace with your actual product data

  const [itemsPerPage, setItemsPerPage] = useState(18); // default lg
  const [currentPage, setCurrentPage] = useState(1);

  // 🔥 RESPONSIVE ITEMS PER PAGE
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setItemsPerPage(18); // 6 x 3 rows
      } else if (width >= 768) {
        setItemsPerPage(15); // 5 x 3 rows
      } else {
        setItemsPerPage(8); // 4 x 2 rows
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(start, start + itemsPerPage);

  return (
    <section className="w-full my-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-md">
        <div className="flex items-center gap-3">
          <div className="w-2 h-10 bg-red-500 rounded-sm"></div>
          <span className="text-3xl font-bold text-red-500">Our Products</span>
          <span className="text-sm text-gray-500 hidden sm:block">
            Explore our wide range of products
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {/* ✅ GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-x-3 gap-y-1 md:gap-4">
          {currentProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>

        {/* ✅ PAGINATION */}
        <div className="flex justify-center items-center gap-2 mt-5 flex-wrap">
          <div className="w-full flex justify-center">
            <Button className=" w-[20%] bg-red-500 text-white hover:bg-red-800 rounded-none">
              View All
            </Button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-5 flex-wrap">
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-100"
            >
              Prev
            </button>

            {/* Numbers */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1.5 text-sm rounded-md border ${
                  currentPage === i + 1
                    ? "bg-red-500 text-white border-red-500"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
