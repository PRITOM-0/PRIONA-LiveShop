// React import removed (JSX runtime automatic)
import { Home, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const location = useLocation();

  const items = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Shop", icon: ShoppingBag, path: "/" },
    { label: "Cart", icon: ShoppingCart, path: "/cart" },
    { label: "Profile", icon: User, path: "/profile" },
  ];

  return (
    // Floating layout wrapper with subtle glass blur and safe-area padding
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-white/80 backdrop-blur-lg border border-red-100 shadow-[0_8px_30px_rgb(239,68,68,0.06)] rounded-2xl md:hidden z-50 pb-safe px-3">
      <div className="flex items-center justify-between py-2.5">
        {items.map((item, i) => {
          const Icon = item.icon;
          // Robust path matching
          const active = location.pathname === item.path;

          return (
            <Link
              key={i}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-20 py-3 rounded-xl transition-all duration-200 active:scale-95 select-none"
            >
              {/* Sliding Pillow Background Effect */}
              {active && (
                <div className="absolute inset-0 bg-red-500/10 border border-red-500/5 rounded-xl -z-10 animate-fade-in" />
              )}

              {/* Icon Container with subtle offset change when active */}
              <div
                className={`transition-all duration-300 ${
                  active ? "-translate-y-0.5 scale-105" : ""
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={active ? 2.5 : 2}
                  className={`transition-colors duration-300 ${
                    active ? "text-red-500" : "text-neutral-700"
                  }`}
                />
              </div>

              {/* Dynamic Label */}
              <span
                className={`text-[10px] tracking-wide mt-1 transition-all duration-300 ${
                  active
                    ? "text-red-500 font-bold"
                    : "text-neutral-500 font-medium"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;