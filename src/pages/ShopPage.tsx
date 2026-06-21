import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { allProducts } from "../Data/data";
import ProductCard from "../components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CatagorySection from "@/components/CategorySection";

const ShopPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  // ✅ URL
  const search = queryParams.get("search")?.toLowerCase() || "";
  const category = queryParams.get("category")?.toLowerCase() || "";

  // ✅ LOCAL FILTER STATE
  const [filters, setFilters] = useState({
    maxPrice: 20000,
    rating: 0,
    sort: "",
  });

  // 🔧 HANDLE FILTER
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // ✅ CLEAR ALL (LOCAL + URL)
  const clearFilters = () => {
    setFilters({
      maxPrice: 20000,
      rating: 0,
      sort: "",
    });

    navigate({
      pathname: location.pathname,
      search: "",
    });
  };

  // ✅ FILTER + SORT
  const filteredProducts = useMemo(() => {
    let result = allProducts.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search);

      const matchesCategory = category
        ? product.category.toLowerCase() === category
        : true;

      const matchesPrice =
        product.price <= filters.maxPrice;

      const matchesRating =
        filters.rating
          ? product.rating >= filters.rating
          : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating
      );
    });

    // ✅ SORT FIXED
    switch (filters.sort) {
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;

      case "oldest":
        result.sort((a, b) => a.id - b.id);
        break;

      case "price_low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price_high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "discount_high":
        result.sort((a, b) => b.discount - a.discount);
        break;

      case "discount_low":
        result.sort((a, b) => a.discount - b.discount);
        break;

      default:
        break;
    }

    return result;
  }, [search, category, filters]);

  return (
    <div className="text-black mx-auto px-1 md:px-8">

      {/* 🔍 SEARCH */}
      <div className="mb-6">
        <SearchBar className="md:hidden" />
      </div>

      {/* 📂 CATEGORY */}
      <CatagorySection />

      {/* 🎛️ FILTER BAR */}
      <div className="bg-white border border-black p-4 my-4 flex flex-wrap gap-4 items-center">

        {/* PRICE RANGE */}
        <div className="flex flex-col">
          <label className="text-xs">
            Max Price: ৳{filters.maxPrice}
          </label>
          <input
            type="range"
            min="0"
            max="20000"
            value={filters.maxPrice}
            onChange={(e) =>
              handleFilterChange(
                "maxPrice",
                Number(e.target.value)
              )
            }
            className="w-40 accent-red-500"
          />
        </div>

        {/* PRICE SORT */}
        <select
          value={filters.sort}
          onChange={(e) =>
            handleFilterChange("sort", e.target.value)
          }
          className="border border-black px-3 py-2 text-sm"
        >
          <option value="">Price</option>
          <option value="price_low">Low → High</option>
          <option value="price_high">High → Low</option>
        </select>

        {/* DATE SORT */}
        <select
          value={filters.sort}
          onChange={(e) =>
            handleFilterChange("sort", e.target.value)
          }
          className="border border-black px-3 py-2 text-sm"
        >
          <option value="">Date</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        {/* RATING */}
        <select
          value={filters.rating}
          onChange={(e) =>
            handleFilterChange(
              "rating",
              Number(e.target.value)
            )
          }
          className="border border-black px-3 py-2 text-sm"
        >
          <option value="0">Rating</option>
          <option value="4">4★ & up</option>
          <option value="3">3★ & up</option>
          <option value="2">2★ & up</option>
          <option value="1">1★ & up</option>
        </select>

        {/* ✅ DISCOUNT FIX */}
        <select
          value={filters.sort}
          onChange={(e) =>
            handleFilterChange("sort", e.target.value)
          }
          className="border border-black px-3 py-2 text-sm"
        >
          <option value="">Discount</option>
          <option value="discount_high">High → Low</option>
          <option value="discount_low">Low → High</option>
        </select>

        {/* CLEAR */}
        <button
          onClick={clearFilters}
          className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800"
        >
          Clear
        </button>
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 border-b border-black pb-2">
        <h1 className="text-2xl font-bold text-red-500 capitalize">
          {category || search || "Shop Products"}
        </h1>

        <span className="text-sm text-gray-600">
          {filteredProducts.length} items
        </span>
      </div>

      {/* EMPTY */}
      {filteredProducts.length === 0 ? (
        <div className="border border-dashed border-gray-300 p-10 text-center">
          <p className="text-gray-500">
            No products found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;