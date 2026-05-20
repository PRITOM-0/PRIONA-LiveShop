import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <header>
        <Topbar />
        <Navbar />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
