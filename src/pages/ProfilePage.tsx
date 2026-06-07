 
import { user } from "@/Data/User";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ShoppingCart,
  Heart,
  Package,
  User,
  Calendar,
  Key
} from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-black antialiased p-6 sm:p-10 mt-5">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* HEADER / PROFILE CARD */}
        <div className="bg-white border-2 border-black p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Avatar Area */}
          <div className="relative flex-shrink-0">
            <div className="w-28 h-28 bg-neutral-100 border-2 border-black overflow-hidden shadow-sm">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            {user.isVerified && (
              <span className="absolute -bottom-1 -right-1 bg-black text-white rounded-full p-1.5 border border-white shadow">
                <ShieldCheck size={16} className="text-red-500 fill-red-500" />
              </span>
            )}
          </div>

          {/* User Essential Info */}
          <div className="flex-1 space-y-3 text-center md:text-left w-full">
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 justify-center md:justify-start">
                <h1 className="text-2xl font-black uppercase tracking-tight">
                  {user.name}
                </h1>
                <span className="self-center inline-block px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase bg-red-500 text-white rounded-none">
                  {user.role}
                </span>
              </div>
            </div>

            {/* Quick Contact Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-neutral-100 text-sm text-neutral-600">
              <p className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail size={15} className="text-neutral-400" /> {user.email}
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone size={15} className="text-neutral-400" /> {user.phone}
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2.5 sm:col-span-2">
                <MapPin size={15} className="text-neutral-400" />
                {user.address.street}, {user.address.city}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full md:w-auto px-6 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-red-500 transition-colors duration-300 transform active:translate-y-0.5 flex-shrink-0">
            Edit Profile
          </button>
        </div>

        {/* COUNTERS / STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Wishlist */}
          <div className="bg-white border border-neutral-200 p-5 flex items-center gap-4 group hover:border-black transition-colors duration-200">
            <div className="p-3 bg-neutral-100 group-hover:bg-red-50 transition-colors">
              <Heart className="text-neutral-900 group-hover:text-red-500 group-hover:fill-red-500 transition-colors" size={20} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-neutral-400">Wishlist</p>
              <h3 className="text-xl font-black mt-0.5 font-mono">{user.wishlist.length} <span className="text-xs font-normal text-neutral-500 uppercase">Items</span></h3>
            </div>
          </div>

          {/* Cart */}
          <div className="bg-white border border-neutral-200 p-5 flex items-center gap-4 group hover:border-black transition-colors duration-200">
            <div className="p-3 bg-neutral-100 group-hover:bg-red-50 transition-colors">
              <ShoppingCart className="text-neutral-900 group-hover:text-red-500 transition-colors" size={20} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-neutral-400">Active Cart</p>
              <h3 className="text-xl font-black mt-0.5 font-mono">{user.cart.length} <span className="text-xs font-normal text-neutral-500 uppercase">Items</span></h3>
            </div>
          </div>

          {/* Orders */}
          <div className="bg-white border border-neutral-200 p-5 flex items-center gap-4 group hover:border-black transition-colors duration-200">
            <div className="p-3 bg-neutral-100 group-hover:bg-red-50 transition-colors">
              <Package className="text-neutral-900 group-hover:text-red-500 transition-colors" size={20} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-neutral-400">Total Orders</p>
              <h3 className="text-xl font-black mt-0.5 font-mono">{user.orders.length} <span className="text-xs font-normal text-neutral-500 uppercase">Placed</span></h3>
            </div>
          </div>

        </div>

        {/* DETAILS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* SHIPPING ADDRESS CARD */}
          <div className="bg-white border border-neutral-200 p-6">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3 mb-4">
              <MapPin size={18} className="text-red-500" />
              <h2 className="text-sm font-black tracking-widest uppercase">
                Shipping Address
              </h2>
            </div>

            <div className="space-y-2 text-sm text-neutral-700">
              <div className="flex justify-between py-1 border-b border-neutral-50">
                <span className="font-semibold text-neutral-400 uppercase text-[11px] tracking-wider">Street Address</span>
                <span className="font-medium text-right">{user.address.street}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-50">
                <span className="font-semibold text-neutral-400 uppercase text-[11px] tracking-wider">City</span>
                <span className="font-medium">{user.address.city}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-50">
                <span className="font-semibold text-neutral-400 uppercase text-[11px] tracking-wider">Postal Code</span>
                <span className="font-mono font-medium">{user.address.postalCode}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-neutral-400 uppercase text-[11px] tracking-wider">Country</span>
                <span className="font-medium">{user.address.country}</span>
              </div>
            </div>
          </div>

          {/* ACCOUNT META DETAILS */}
          <div className="bg-white border border-neutral-200 p-6">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3 mb-4">
              <User size={18} className="text-red-500" />
              <h2 className="text-sm font-black tracking-widest uppercase">
                Account Details
              </h2>
            </div>

            <div className="space-y-2 text-sm text-neutral-700">
              <div className="flex justify-between items-center py-1 border-b border-neutral-50">
                <span className="font-semibold text-neutral-400 uppercase text-[11px] tracking-wider flex items-center gap-1.5"><Key size={12}/> User ID</span>
                <span className="font-mono text-xs bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded select-all">{user.id}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-50">
                <span className="font-semibold text-neutral-400 uppercase text-[11px] tracking-wider flex items-center gap-1.5"><Calendar size={12}/> Member Since</span>
                <span className="font-medium text-neutral-600">{new Date(user.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-neutral-400 uppercase text-[11px] tracking-wider flex items-center gap-1.5"><Calendar size={12}/> Last Updated</span>
                <span className="font-medium text-neutral-600">{new Date(user.updatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;