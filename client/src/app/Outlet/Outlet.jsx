import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Suspense, lazy } from "react";
const Footer = lazy(() => import("../../components/Footer/Footer.jsx"));

const MainLayout = () => {
  return (
    <div className={`min-h-screen w-screen flex flex-col  `}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default MainLayout;
