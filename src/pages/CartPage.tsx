import  { useState } from "react";
import { user } from "@/Data/User";
import { allProducts } from "@/Data/data";
import { ShoppingBag, ArrowLeft, Trash2 } from "lucide-react";

const CartPage = () => {
  const [cart, setCart] = useState(user.cart);

  const getProduct = (id: number) =>
    allProducts.find((p) => p.id === id);

  const updateQty = (productId: number, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : item.qty > 1
                  ? item.qty - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCart((prev) =>
      prev.filter((item) => item.productId !== productId)
    );
  };

  const subtotal = cart.reduce((total, item) => {
    const product = getProduct(item.productId);
    return total + (product?.price || 0) * item.qty;
  }, 0);

  return (
    <div className="min-h-screen   text-black antialiased">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex items-center justify-between border-b border-black pb-5 mb-8">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-8 h-8" />
            <h1 className="text-3xl font-black text-red-500 tracking-tight uppercase">
              Shopping Cart
            </h1>
          </div>
          <span className="text-sm font-medium text-neutral-500 tracking-wider">
            [{cart.length} {cart.length === 1 ? "ITEM" : "ITEMS"}]
          </span>
        </div>

        {cart.length === 0 ? (
          /* EMPTY CART STATE */
          <div className="text-center py-20 bg-white border border-neutral-200">
            <ShoppingBag className="w-16 h-16 mx-auto text-neutral-300 stroke-[1.5] mb-4" />
            <h2 className="text-xl font-medium tracking-tight mb-2">Your cart is empty</h2>
            <p className="text-neutral-500 text-sm mb-6">Looks like you haven't added anything yet.</p>
            <button className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-red-500 transition-colors duration-300">
              <ArrowLeft size={14} /> Continue Shopping
            </button>
          </div>
        ) : (
          /* MAIN CONTENT AREA */
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* LEFT - CART ITEMS */}
            <div className="lg:col-span-2 space-y-4">
              {/* DESKTOP TABLE HEADER */}
              <div className="hidden md:grid grid-cols-12 border-b border-neutral-200 pb-3 text-xs tracking-widest text-black font-black uppercase">
                <span className="col-span-6">PRODUCT DETAILS</span>
                <span className="col-span-2 text-center">PRICE</span>
                <span className="col-span-2 text-center">QUANTITY</span>
                <span className="col-span-1 text-right">TOTAL</span>
                
              </div>

              {/* ITEMS CONTAINER */}
              <div className="divide-y divide-red-500 bg-white border border-red-500 px-6">
                {cart.map((item) => {
                  const product = getProduct(item.productId);
                  if (!product) return null;

                  return (
                    <div
                      key={item.productId}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-2 group"
                    >
                      {/* PRODUCT INFO */}
                      <div className="col-span-1 md:col-span-6 flex items-center gap-5">
                        <div className="relative overflow-hidden border border-red-200 aspect-square w-16 h-16 flex-shrink-0 bg-neutral-100">
                          <img
                            src={product.img}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="space-y-1">
                          <h2 className="font-bold text-base text-neutral-900 line-clamp-2 tracking-tight">
                            {product.title}
                          </h2>
                          <div className="inline-flex gap-2 text-[11px] font-semibold tracking-wider uppercase text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                            <span>{item.selectedColor}</span>
                            <span className="text-neutral-300">|</span>
                            <span>{item.selectedSize}</span>
                          </div>
                        </div>
                      </div>

                      {/* PRICE */}
                      <div className="col-span-1 md:col-span-2 flex md:justify-center justify-between items-center text-sm">
                        <span className="md:hidden text-xs font-semibold text-neutral-400 uppercase">Price</span>
                        <span className="font-medium">৳ {product.price.toLocaleString()}</span>
                      </div>

                      {/* QUANTITY PICKER */}
                      <div className="col-span-1 md:col-span-2 flex md:justify-center justify-between items-center">
                        <span className="md:hidden text-xs font-semibold text-neutral-400 uppercase">Quantity</span>
                        <div className="flex items-center border border-neutral-300 bg-white shadow-sm h-9">
                          <button
                            onClick={() => updateQty(item.productId, "dec")}
                            className="w-8 h-full flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-black transition-colors"
                          >
                            -
                          </button>
                          <span className="w-10 text-center text-xs font-bold font-mono">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.productId, "inc")}
                            className="w-8 h-full flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-black transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* TOTAL + REMOVE */}
                      <div className="col-span-1 md:col-span-2 flex md:justify-end justify-between items-center gap-6">
                        <span className="md:hidden text-xs font-semibold text-neutral-400 uppercase">Total</span>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-sm text-neutral-900">
                            ৳ {(product.price * item.qty).toLocaleString()}
                          </span>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-colors duration-200 rounded"
                            title="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT - SUMMARY CARD */}
            <div className="lg:col-span-1 lg:sticky lg:top-8">
              <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-lg font-black tracking-widest border-b border-neutral-200 pb-3 uppercase">
                  ORDER SUMMARY
                </h2>

                <div className="space-y-3 mt-5">
                  <div className="flex justify-between text-sm text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-black">৳ {subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-sm text-neutral-600">
                    <span>Shipping Fee</span>
                    <span className="font-medium text-black">৳ 60</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline mt-6 pt-4 border-t-2 border-dashed border-neutral-200">
                  <span className="text-sm font-bold uppercase tracking-wider">Estimated Total</span>
                  <span className="text-2xl font-black font-mono">
                    ৳ {(subtotal + 60).toLocaleString()}
                  </span>
                </div>

                <button className="w-full mt-8 bg-red-500 text-white py-4 font-bold tracking-widest text-xs uppercase shadow-md hover:bg-black transition-all duration-300 transform active:translate-y-0.5">
                  PROCEED TO CHECKOUT
                </button>
                
                <div className="mt-4 text-center">
                  <p className="text-[11px] text-neutral-400 tracking-wide">
                    Tax calculated at checkout • Secure Transaction
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;