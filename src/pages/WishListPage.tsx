import { useState } from "react";
import { user } from "@/Data/User";
import { allProducts } from "@/Data/data";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState(user.wishlist);

  const getProduct = (id: number) =>
    allProducts.find((p) => p.id === id);

  const removeItem = (productId: number) => {
    console.log("Remove from wishlist:", productId);
    setWishlist((prev) =>
      prev.filter((item) => item !== productId)
    );
  };

  const moveToCart = (productId: number) => {
    // you can later connect this with cart state / backend
    console.log("Move to cart:", productId);
  };

  return (
    <div className="min-h-screen text-black antialiased">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-black pb-5 mb-8">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-black text-red-500 tracking-tight uppercase">
              Wishlist
            </h1>
          </div>
          <span className="text-sm font-medium text-neutral-500 tracking-wider">
            [{wishlist.length} {wishlist.length === 1 ? "ITEM" : "ITEMS"}]
          </span>
        </div>

        {wishlist.length === 0 ? (
          /* EMPTY STATE */
          <div className="text-center py-20 bg-white border border-neutral-200">
            <Heart className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
            <h2 className="text-xl font-medium mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-neutral-500 text-sm">
              Save items you love for later.
            </p>
          </div>
        ) : (
          <>
            {/* HEADER ROW */}
            <div className="grid grid-cols-12 border-b border-neutral-200 pb-3 text-[10px] md:text-xs tracking-tight md:tracking-widest font-black uppercase">
              <span className="col-span-6">PRODUCT</span>
              <span className="col-span-2 text-center">PRICE</span>
              <span className="col-span-2 text-center">ACTION</span>
              <span className="col-span-2 text-center">REMOVE</span>
            </div>

            {/* ITEMS */}
            <div className="divide-y divide-red-500 bg-white border border-red-500 px-3 md:px-6">
              {wishlist.map((item) => {
                const product = getProduct(item);
                if (!product) return null;

                return (
                  <div
                    key={item}
                    className="grid grid-cols-12 gap-2 md:gap-4 items-center py-2 group"
                  >
                    {/* PRODUCT */}
                    <div className="col-span-6 flex items-center gap-3 md:gap-5">
                      <div className="w-12 h-12 md:w-16 md:h-16 border border-red-200 bg-neutral-100 overflow-hidden">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h2 className="text-[10px] md:text-sm font-bold line-clamp-1">
                        {product.title}
                      </h2>
                    </div>

                    {/* PRICE */}
                    <div className="col-span-2 text-center text-[10px] md:text-sm font-bold">
                      ৳ {product.price.toLocaleString()}
                    </div>

                    {/* MOVE TO CART */}
                    <div className="col-span-2 flex justify-center">
                      <button
                        onClick={() => moveToCart(item)}
                        className="flex items-center gap-1 text-[9px] md:text-xs font-bold bg-black text-white px-2 md:px-3 py-1 md:py-2 hover:bg-red-500 transition"
                      >
                        <ShoppingCart size={14} />
                        ADD
                      </button>
                    </div>

                    {/* REMOVE */}
                    <div className="col-span-2 flex justify-center">
                      <button
                        onClick={() => removeItem(item)}
                        className="text-red-400 hover:text-red-500"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;