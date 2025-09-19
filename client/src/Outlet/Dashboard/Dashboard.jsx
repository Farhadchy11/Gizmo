import { AuthContext } from "../../Providers/AuthProvider.jsx";
import { useContext } from "react";
import { MdDashboard } from "react-icons/md";
import { FiHome, FiLogOut } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin.jsx";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const { isAdmin } = useAdmin();
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="flex items-center flex-col gap-3 p-3 bg-black text-white min-h-screen">
      <Link to={"/"}>
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
          <MdDashboard /> Dashboard
        </h2>
      </Link>

      <ul className="space-y-4">
        {isAdmin ? (
          <>
            <Link
              to={"/dashboard/allUsers"}
              className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer"
            >
              All Users
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/dashboard/UserHome"}
              className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer"
            >
              <FiHome /> Home || User
            </Link>

            <Link
              class="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer"
              to={"/cart"}
            >
              {" "}
              <FaShoppingCart />
              Your Order Products
            </Link>
          </>
        )}

        {user ? (
          <div className="">
            <li
              onClick={handleLogout}
              className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer text-red-400"
            >
              <FiLogOut /> Logout
            </li>
          </div>
        ) : (
          <Link
            to="/loginForm"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>Login</span>
          </Link>
        )}
      </ul>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 transition-all">
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
