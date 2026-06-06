import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="w-full h-80 my-5 rounded-xl shadow-sm hover:shadow-lg transition group overflow-hidden">
        <CardContent className="px-2">
          {/* Image + Badges */}
          <div className="relative w-full h-40 overflow-hidden rounded-lg bg-gray-100">
            {/* Product Image */}
            <img
              loading="lazy"
              src={`${product.img}?w=300&h=300&fit=crop&auto=format&q=60`}
              alt={product.alt}
              className="w-full h-full object-cover"
            />
            {/* Wishlist */}
            <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-red-500 hover:text-white transition">
              <Heart size={14} />
            </button>
            {/* Discount Badge */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">
              -{product.discount}%
            </span>
            {/* Category Tag */}
            <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">
              {product.category}
            </span>
          </div>
          {/* Title */}
          <h3 className="text-[12px] mt-3 font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h3>
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(product.rating)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-[10px] text-gray-500 ml-1">
              ({product.reviews})
            </span>
          </div>
          {/* Price */}
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[16px] font-bold text-red-500">
              {" "}
              {product.price} tk
            </span>
            <span className="text-xs line-through text-gray-400">
              {product.originalPrice} tk{" "}
            </span>
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
