import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar.jsx";
import Footer from "../Shared/Footer/Footer.jsx";

const MainLayout = () => {
  return (
    <div className={`min-h-screen w-screen flex flex-col  `}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
