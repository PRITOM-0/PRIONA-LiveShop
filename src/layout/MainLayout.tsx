import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
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
    </>
  );
};

export default MainLayout;
