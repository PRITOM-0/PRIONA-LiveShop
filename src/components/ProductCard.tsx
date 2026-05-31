import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link to="/product">
      <Card className="w-full my-5 rounded-xl shadow-sm hover:shadow-lg transition group overflow-hidden">
        <CardContent className="px-2">
          {/* Image + Badges */}
          <div className="relative w-full h-40 overflow-hidden rounded-lg bg-gray-100">
            {/* Product Image */}
            <img
              src="https://cdn-img.oraimo.com/GH/product/2025/01/09/watch-5-lite-osw-804.png"
              alt="product"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            {/* Wishlist */}
            <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-red-500 hover:text-white transition">
              <Heart size={14} />
            </button>
            {/* Discount Badge */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">
              -50%
            </span>
            {/* Category Tag */}
            <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">
              Electronics
            </span>
          </div>
          {/* Title */}
          <h3 className="text-[12px] mt-3 font-semibold text-gray-800 line-clamp-2">
            Wireless Bluetooth Headphones
          </h3>
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-[10px] text-gray-500 ml-1">(120)</span>
          </div>
          {/* Price */}
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[16px] font-bold text-red-500">$19.99</span>
            <span className="text-xs line-through text-gray-400">$39.99</span>
          </div>
          {/* Add Button */}
          <button className="mt-1 flex w-full items-center justify-center gap-1 text-xs border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
            <ShoppingCart size={14} />
            Add to Cart
          </button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;