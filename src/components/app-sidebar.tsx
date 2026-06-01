import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  Home,
  ShoppingCart,
  Heart,
  User,
  Settings,
  LogOut,
  Phone,
  Info,
  UserPlus,
} from "lucide-react";

import { Link } from "react-router-dom";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className=" border-r bg-white">
      {/* Header */}
      <SidebarHeader className="p-4 text-2xl font-bold text-red-500">
        PRIONA
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        {/* Main Menu */}
        <SidebarGroup>
          <div className="flex flex-col gap-2 px-2">
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-black hover:bg-red-50 transition"
            >
              <Home size={18} /> Home
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-black hover:bg-red-50 transition"
            >
              <Phone size={18} /> Contact
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-black hover:bg-red-50 transition"
            >
              <Info size={18} /> About
            </Link>

            <Link
              to="/signup"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-black hover:bg-red-50 transition"
            >
              <UserPlus size={18} /> Sign Up
            </Link>
          </div>
        </SidebarGroup>

        {/* Shop Section */}
        <SidebarGroup>
          <p className="px-3 mt-4 mb-2 text-xs text-gray-400 uppercase">Shop</p>

          <div className="flex flex-col gap-2 px-2">
            <Link
              to="/cart"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-black hover:bg-red-50 transition"
            >
              <ShoppingCart size={18} /> Cart
            </Link>

            <Link
              to="/wishlist"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-black hover:bg-red-50 transition"
            >
              <Heart size={18} /> Wishlist
            </Link>
          </div>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <div className="flex flex-col gap-2 p-3 border-t">
          <Link
            to="/profile"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-black hover:bg-red-50 transition"
          >
            <User size={18} /> Profile
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-black hover:bg-red-50 transition"
          >
            <Settings size={18} /> Settings
          </Link>

          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 transition">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
