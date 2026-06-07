import { useState } from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { allProducts } from "@/Data/data";
import RelatedProducts from "@/components/RelatedProducts";
const ProductPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id!));

  const [color, setColor] = useState("Black");
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");

  const colors = [
    { name: "Black", code: "#000000" },
    { name: "Red", code: "#ef4444" },
    { name: "Blue", code: "#3b82f6" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* THUMBNAILS */}
        <div className="md:col-span-2 flex md:flex-col gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-20 h-20 rounded-xl overflow-hidden border hover:border-red-500 transition cursor-pointer"
            >
              <img
                src={product?.img}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div className="md:col-span-5">
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border">
            <img
              src={product?.img}
              className="w-full h-[420px] object-cover hover:scale-105 transition duration-300"
            />

            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
              -{product?.discount}%
            </span>

            <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
              <Heart size={16} />
            </button>

            <span className="absolute bottom-4 left-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
              {product?.category}
            </span>
          </div>
        </div>

        {/* DETAILS */}
        <div className="md:col-span-5 space-y-6">
          
          {/* TITLE */}
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
            {product?.title}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-xs text-gray-500 ml-2">(120 reviews)</span>
          </div>

          {/* PRICE */}
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-red-500">
              {product?.price} tk
            </span>
            <span className="text-sm line-through text-gray-400">
              {product?.originalPrice} tk
            </span>
          </div>

          {/* STOCK */}
          <p className="text-green-600 font-medium text-sm">In Stock</p>

          {/* CATEGORY */}
          <p className="text-sm text-gray-600">
            Category:{" "}
            <span className="font-semibold text-black">{product?.category}</span>
          </p>

          {/* SIZE */}
          <div>
            <p className="text-sm font-medium mb-2">Size</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-1.5 rounded-lg border text-sm transition ${
                    size === s
                      ? "bg-red-500 text-white border-red-500 shadow"
                      : "border-gray-300 hover:border-red-500"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* COLOR */}
          <div>
            <p className="text-sm font-medium mb-2">Color</p>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  className={`w-8 h-8 rounded-full border-2 transition ${
                    color === c.name
                      ? "border-red-500 scale-110"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c.code }}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Selected: <span className="font-medium text-black">{color}</span>
            </p>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="w-10 h-10 border rounded-lg hover:bg-red-50 text-lg"
            >
              -
            </button>

            <span className="text-lg font-medium">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="w-10 h-10 border rounded-lg hover:bg-red-50 text-lg"
            >
              +
            </button>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl shadow-md transition">
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button className="w-12 h-12 flex items-center justify-center border rounded-xl hover:bg-red-50 transition">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>

        <div className=" ">
         <RelatedProducts/>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;