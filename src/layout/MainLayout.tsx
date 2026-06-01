import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const MainLayout = () => {
  return (
    <>
      <SidebarProvider className="flex-col" defaultOpen={false}>
        <div className="md:hidden">
          <AppSidebar />
        </div>
        <header>
          <Topbar />
          <Navbar />
        </header>
        <main className="w-full md:w-[90%] lg:w-[80%] mx-auto">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </SidebarProvider>
    </>
  );
};

export default MainLayout;
