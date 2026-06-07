import { SendHorizontal } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-5 bg-black text-white">
      <div className="w-full md:w-[80%] mx-auto my-10 flex flex-wrap justify-between gap-y-5">
        
        <div className="w-full md:w-1/5 pl-10 md:pl-0 flex flex-col gap-y-3">
          <h1 className="text-3xl md:text-3xl font-medium tracking-tight uppercase font-monospace">
            PRIONA
          </h1>
          <p>Subscribe</p>
          <p className="text-[10px] sm:text-md md:text-[8px] lg:text-[8px] xl:text-[10px]">
            Get 10% off your first order
          </p>
          <div className="w-[80%] md:w-full flex bg-black/10 px-3 md:px-3 py-1 border rounded-xs justify-between items-center md:gap-x-1">
            <input
              className="py-1 w-[90%] focus:outline-none text-[10px]  md:text-[12px]"
              type="text"
              placeholder="What are you looking for ?"
            />
            <SendHorizontal className="w-4 h-4  md:w-4 md:h-4 lg:w-4 lg:h-4 text-white" />
          </div>
        </div>

        <div className="w-1/2 md:w-1/5 pl-10 md:pl-5 text-[10px] md:text-[12px] flex flex-col gap-y-2 text-wrap wrap-break-word">
          <h1 className="text-lg md:text-[16px] lg:text-[18px] mb-2">
            Support
          </h1>
          <p>
            Sector 12 , Uttara,
            <br /> Dhaka-1203, Bangladesh
          </p>
          <p>prionaliveshop@gmail.com</p>
          <p>+88017-0000-0000</p>
        </div>

        <div className="w-1/2 md:w-1/6 pl-5 md:pl-5 text-[10px] md:text-[12px] flex flex-col gap-y-2">
          <h1 className="text-lg md:text-[16px] lg:text-[18px] mb-2">
            Account
          </h1>
          <div className="flex flex-col gap-y-1">
            <Link to={"/"}>My Account</Link>
            <Link to={"/"}>Login/Register</Link>
            <Link to={"/"}>Cart</Link>
            <Link to={"/"}>Wishlist</Link>
            <Link to={"/"}>Shop</Link>
          </div>
        </div>

        <div className="w-1/2 md:w-1/6 pl-10 md:pl-5 text-[10px] md:text-[12px] flex flex-col gap-y-2">
          <h1 className="text-lg md:text-[16px] lg:text-[18px] mb-2">
            Quick Link
          </h1>
          <div className="flex flex-col gap-y-1">
            <Link to={"/"}>Privacy Policy</Link>
            <Link to={"/"}>Terms Of Use</Link>
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>Contact</Link>
          </div>
        </div>

        <div className="w-1/2 md:w-1/4 pl-5 md:pl-0 text-[10px] md:text-[12px] flex flex-col gap-y-2">
          <h1 className="text-lg md:text-[16px] lg:text-[18px] mb-2">
            Download App
          </h1>
          <p className="text-[8px]  md:text-[10px]">
            save 300 Tk with App New User Only
          </p>
          <div className="flex w-[80%]">
            <div className="w-[50%] border border-white/20 p-2 px-1 flex items-center justify-center">
              QR Code
            </div>
            <div>
              <div className="w-full border py-2 border-white/20 flex items-center justify-center">
                google play
              </div>
              <div className="w-full border py-2 px-1 border-white/20 flex items-center justify-center">
                App Store
              </div>
            </div>
          </div>

          <div className="flex justify-start gap-x-3 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] mt-2">
            <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-white/70" />
            <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-white/70" />
            <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-white/70" />
            <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-white/70" />
          </div>
        </div>
      </div>

      <div className="w-full pt-4 text-center text-white/50 border-t border-white/10 text-[10px]  md:text-[12px] ">
        Copy right © {new Date().getFullYear()} PRIONA. All rights reserved.
        Developed by Pritom Saha.
      </div>
    </div>
  );
};

export default Footer;