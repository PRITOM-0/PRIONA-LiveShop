import { Link } from "react-router-dom";
import { Search, Heart, BaggageClaim, CircleUserRound } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="w-full sm:w-[90%] md:w-[90%] lg:w-[60%] bg-white h-10 md:h-12 lg:h-14 mx-auto flex justify-between items-end text-black text-[6px] sm:text-md md:text-[8px] lg:text-[8px] xl:text-sm font-secondary">
        <div className=" w-[30%] md:w-[20%] h-full flex justify-start pl-10 text-sm sm:text-md md:text-2xl font-bold items-center">
          PRIONA
        </div>
        <div className=" w-[45%] md:w-[25%] h-full flex items-center">
          <div className="w-full flex bg-black/10 px-1 md:px-3 py-0.5 rounded-xs justify-between items-center md:gap-x-1">
            <input
              className=" py-1 w-[90%] focus:outline-none text-[6px] sm:text-md md:text-[8px] lg:text-[8px] xl:text-[10px] "
              type="text"
              placeholder="What are you looking for ?"
            />
            <Search className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 text-gray-500" />
          </div>
        </div>
        <div className="hidden md:flex w-[40%] h-full">
          <div className="w-full h-full flex items-center justify-center gap-x-2 lg:gap-x-2 px-2 tracking-wider font-bold">
            <Link className="px-1 border-b-1 border-white hover:border-b-1 hover:border-black transition-all duration-400">
              Home
            </Link>
            <Link className="px-1 border-b-1 border-white hover:border-b-1 hover:border-black transition-all duration-400">
              Contact
            </Link>
            <Link className="px-1 border-b-1 border-white hover:border-b-1 hover:border-black transition-all duration-400">
              About
            </Link>
            <Link className="px-1 border-b-1 border-white hover:border-b-1 hover:border-black transition-all duration-400">
              Sign Up
            </Link>
          </div>
        </div>
        <div className=" w-[25%] md:w-[15%] h-full flex items-center justify-end pr-10">
          <div className="flex gap-x-3 md:gap-x-4">
            <Heart className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            <BaggageClaim className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            <CircleUserRound className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
