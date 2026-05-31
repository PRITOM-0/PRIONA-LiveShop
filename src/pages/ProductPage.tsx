import { useState } from "react";
import { Star, Heart, ShoppingCart, Car } from "lucide-react";

const productImages = {
  Black: [
    "https://cdn-img.oraimo.com/GH/product/2025/01/09/watch-5-lite-osw-804.png",
    "https://cdn-img.oraimo.com/GH/product/2025/01/09/watch-5-lite-osw-804.png",
    "https://cdn-img.oraimo.com/GH/product/2025/01/09/watch-5-lite-osw-804.png",
    "https://cdn-img.oraimo.com/GH/product/2025/01/09/watch-5-lite-osw-804.png",
  ],
  Red: [
    "https://cdn-img.oraimo.com/GH/product/2025/01/09/watch-5-lite-osw-804.png",
    "https://cdn-img.oraimo.com/GH/product/2025/01/09/watch-5-lite-osw-804.png",
  ],
  Blue: [
    "https://cdn-img.oraimo.com/GH/product/2025/01/09/watch-5-lite-osw-804.png",
  ],
};

const colors = [
  { name: "Black", code: "#000000" },
  { name: "Red", code: "#ef4444" },
  { name: "Blue", code: "#3b82f6" },
];

const ProductPage = () => {
  const [color, setColor] = useState("Black");
  const [selectedImage, setSelectedImage] = useState(productImages["Black"][0]);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");

  const images = productImages[color];

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* 🟡 THUMBNAILS */}
        <div className="md:col-span-2 flex md:flex-col gap-3">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover rounded-lg border cursor-pointer ${
                selectedImage === img ? "border-red-500" : "border-gray-200"
              }`}
            />
          ))}
        </div>

        {/* 🟢 MAIN IMAGE */}
        <div className="md:col-span-5">
          <div className="relative bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={selectedImage}
              className="w-full h-[350px] object-cover"
            />

            {/* Discount */}
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -50%
            </span>

            {/* Wishlist */}
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
              <Heart size={16} />
            </button>

            {/* Category */}
            <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
              Electronics
            </span>
          </div>
        </div>

        {/* 🔵 DETAILS */}
        <div className="md:col-span-5 space-y-4">
          {/* Title */}
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            Wireless Bluetooth Headphones
          </h1>

          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">(120 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-red-500">$19.99</span>
            <span className="text-sm line-through text-gray-400">$39.99</span>
          </div>

          {/* Stock */}
          <p className="text-green-600 text-sm font-medium">In Stock</p>

          {/* Category */}
          <p className="text-xs text-gray-500">
            Category: <span className="font-medium">Electronics</span>
          </p>

          {/* Size */}
          <div>
            <p className="text-sm mb-1">Size</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 text-sm border rounded-lg ${
                    size === s
                      ? "bg-red-500 text-white border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* 🎨 COLOR */}
          <div>
            <p className="text-sm mb-1">Color</p>

            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => {
                    setColor(c.name);
                    setSelectedImage(productImages[c.name][0]);
                  }}
                  className={`w-7 h-7 rounded-full border-2 ${
                    color === c.name
                      ? "border-red-500 scale-110"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c.code }}
                />
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-1">
              Selected: <span className="font-medium">{color}</span>
            </p>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="px-3 py-1 border rounded"
            >
              -
            </button>
            <span className="text-sm">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition">
              <ShoppingCart size={16} />
              Add to Cart
            </button>

            <button className="border px-4 rounded-lg hover:bg-gray-100">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 RELATED */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Related Products</h2>

        <div className="w-full h-40 bg-black rounded-lg">
          <div />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
