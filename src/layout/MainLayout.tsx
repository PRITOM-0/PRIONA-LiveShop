import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import BottomBar from "../components/BottomBar";

const MainLayout = () => {
  return (
    <>
      <SidebarProvider className="flex-col" defaultOpen={false}>

        {/* Sidebar for mobile */}
        <div className="md:hidden">
          <AppSidebar />
        </div>

        {/* Header */}
        <header>
          <Topbar />
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="w-full md:w-[90%] lg:w-[80%] mx-auto pb-16 md:pb-0">
          <Outlet />
        </main>

        {/* Footer (hidden on mobile if you want) */}
        <footer>
          <Footer />
        </footer>

        {/* 🔥 Bottom Bar (mobile only) */}
        <BottomBar />

      </SidebarProvider>
    </>
  );
};

export default MainLayout;