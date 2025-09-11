import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider.jsx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItem = (
    <>
      <li>
        <Link to={"/Products"} class="relative px-3 py-2 group">
          Products
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard" class="relative px-3 py-2 group">
            Dashboard
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <nav className="w-screen  bg-black text-white z-50">
        <div className=" mx-auto px-4 md:px-6 lg:px-10">
          <div className="flex justify-between items-center py-4 ">
            <Link to={"/"} className="group flex items-center ">
              <div className="relative">
                <h1 className=" text-white-500 text-3xl font-bold">Gizmo</h1>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>

            <ul className="hidden md:flex items-center space-x-2 text-base font-medium text-white-800 ">
              {navItem}
            </ul>

            {user ? (
              <div className="flex items-center space-x-2">
                <Link to={"/cart"}>
                  <button type="button">
                    <BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
                  </button>
                </Link>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-white-400 hover:border-blue-400 transition-colors duration-300"
                  />
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/loginForm"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                {/* <FiUser className="w-4 h-4" /> */}
                <span>Login</span>
              </Link>
            )}

            {/* Mobile Menu Button */}

            <button
              onClick={toggleMenu}
              class="md:hidden p-2 rounded-full hover:bg-white-100  transition-all duration-300"
            >
              <div class="relative w-6 h-6">
                <AiOutlineMenu
                  class={`absolute inset-0 text-white-700 transition-all duration-300 ${
                    isOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <AiOutlineClose
                  class={`absolute inset-0 text-white-700  transition-all duration-300 ${
                    isOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div
          class={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div class="py-4 border-t border-white-200 ">
            <ul class="space-y-2 text-base font-medium text-white-800 ">
              {navItem}
            </ul>
          </div>
        </div>

        {/* Backdrop for mobile menu */}
        {isOpen && (
          <div
            class="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
