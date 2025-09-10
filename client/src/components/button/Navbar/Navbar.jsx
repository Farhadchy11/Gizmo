// import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
// import { BsSun, BsMoon } from "react-icons/bs";
// import useTheme from "../../hooks/useTheme";
// import { AuthContext } from "../../Providers/AuthProvider";
// import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";
// import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  //   const [cart] = useCarts();

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <nav>
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo with hover effect */}
          <Link to="/" className="group flex items-center space-x-2">
            <div className="relative">
              <h1 className="text-xl font-bold">jakky</h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          <form
            // onClick={handleSubmit}
            onSubmit={handleSubmit}
            className="search-bar"
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-3">
            {/* Cart Icon with Animation */}
            <Link
              to={"/dashboard/cart"}
              className="relative group p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <FiShoppingCart className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
