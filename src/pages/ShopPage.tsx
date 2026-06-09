import { useMemo, useState } from "react";
import { useLocation  } from "react-router-dom";
import { allProducts} from "../Data/data";
import ProductCard from "../components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CatagorySection from "@/components/CategorySection";

const ShopPage = () => {
  const location = useLocation();
   

  const params = new URLSearchParams(location.search);
  const query = params.get("q")?.toLowerCase() || "";

  const [selectedCategory] = useState("All");

  // FILTER LOGIC
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchSearch = product.title.toLowerCase().includes(query);

      const matchCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [query, selectedCategory]);

  // HANDLE SEARCH (mobile)
  // const handleSearch = (value: string) => {
  //   navigate(`/shop?q=${value}`);
  // };

  return (
    <div className="min-h-screen  text-black mx-auto md:px-8">
      {/* MOBILE SEARCH */}
      <div className=" mb-6"  >
        <SearchBar/>
      </div>
      <div className="w-full">
        <CatagorySection />
      </div>
      <div className=" ">
        {/* MAIN */}
        <main className="md:col-span-3">
          <div className="flex justify-between items-center mb-6 border-b border-black pb-2">
            <h1 className="text-2xl font-bold text-red-500">Shop Products</h1>
            <span className="text-sm text-gray-600">
              {filteredProducts.length} items
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="border border-black p-6 text-center">
              <p className="text-gray-500">No products found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
