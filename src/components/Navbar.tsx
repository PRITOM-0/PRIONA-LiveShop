import { Link } from "react-router-dom";
import { Search, Heart, CircleUserRound, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <>
      <div className="w-full md:px-40 bg-white h-16 shadow-md md:h-12 lg:h-14 mx-auto flex justify-between items-center text-black font-secondary">
        <div className=" w-[50%] md:w-[25%] h-full pl-2 flex justify-center md:justify-start text-3xl sm:text-md md:text-4xl font-bold items-center gap-3">
           <SidebarTrigger className="md:hidden"/>
       
          <Link to="/" className="text-3xl font-normal tracking-tight uppercase font-monospace">
            PRIONA
          </Link>
        </div>
        <div className=" hidden md:w-[30%] h-full md:flex items-center">
          <div className="w-full flex items-center bg-white border border-red-500 rounded-xs overflow-hidden">

        {/* Input */}
        <input
          type="text"
          placeholder="What are you looking for ?"
          className="w-full px-4 text-sm outline-none"
        />

        {/* Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 flex items-center justify-center transition">
          <Search size={18} />
        </button>

      </div>
        </div>
        <div className="hidden md:flex w-[45%] h-full">
          <div className="w-full h-full flex items-center justify-center md:gap-x-5 px-2 tracking-wider font-bold  md:text-[16px] ">
            <Link to="/" className="px-1 border-b-2 border-white hover:border-b-2 hover:border-black transition-all duration-400">
              Home
            </Link>
            <Link to="/" className="px-1 border-b-2 border-white hover:border-b-2 hover:border-black transition-all duration-400">
              Contact
            </Link>
            <Link to="/" className="px-1 border-b-2 border-white hover:border-b-2 hover:border-black transition-all duration-400">
              About
            </Link>
            <Link to="/signup" className="px-1 border-b-2 border-white hover:border-b-2 hover:border-black transition-all duration-400">
              Sign Up
            </Link>
          </div>
        </div>
        <div className=" w-[50%] md:w-[15%] h-full flex items-center justify-end pr-5 md:pr-2">
          <div className="flex gap-x-3 md:gap-x-4 items-center">
            <Link to="/wishlist" className="relative">
              <Heart className="w-6 h-6" />
              <div className="absolute -top-2 -right-3 p-0.5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">10</div>
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              <div className="absolute -top-2 -right-3 p-0.5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">10</div>
            </Link>
            <Link to="/profile">
              <CircleUserRound className="w-6 h-6" />
            </Link>
            <Link to="/login">
              <Button className=" hover:bg-red-500 text-white py-4 px-3 flex items-center justify-center shadow-md rounded-sm transition">
              Log In
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
