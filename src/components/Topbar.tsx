 import { Link } from "react-router-dom";
import {Languages} from "lucide-react"

const Topbar = () => {
  return (
    <div className="bg-black text-white w-full h-8 md:h-6 lg:h-8 flex justify-around items-center font-primary">
      <div className="mx-auto w-[80%] px-5 h-full flex gap-2 justify-center items-center text-[6px] sm:text-[5px] md:text-[6px] lg:text-[10px] xl:text-[10px] ">
        <p className="font-extralight">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        </p>
        <Link className="font-bold underline " to={"/"}> Shop Now</Link>
      </div>
      <div className="divLan w-[20%]">
        <button className="flex gap-1  items-center  text-[8px] sm:text-[5px] md:text-[6px] lg:text-[10px] xl:text-[10px] font-bold " >Bangla<Languages size={10} /> </button>
      </div>
    </div>
  );
};

export default Topbar;
