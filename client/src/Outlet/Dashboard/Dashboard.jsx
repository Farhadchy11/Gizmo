//import { AuthContext } from "../../Providers/AuthProvider.jsx";
//import { useContext } from "react";
//import { useState, useEffect } from "react";
import useAdmin from "../../Hooks/useAdmin.jsx";
//import { Link } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
//import axiosSecure from "../../Hooks/useAxiosSecure.jsx";
//import axios from "axios";

const Sidebar = () => {//
  const { isAdmin } = useAdmin();

  // const { user } = useAuthContext();
  // console.log("User sidebar:", user);
  // const [isAdmin, setIsAdmin] = useState(false);
  // console.log("admin:", isAdmin);

  // axios.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("access-token");
  //     console.log(token);
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  //admin true sucess
  // const senddataadmin = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5050/user/admin/${user.email}`
  //     );
  //     const userData = response.data;
  //     setIsAdmin(userData.admin);
  //     console.log(userData);
  //   } catch (error) {
  //     console.log("Error fetching data:");
  //   }
  // };

  // const checkAdminStatus = async () => {
  //   try {
  //     const response = await axiosSecure.get(
  //       `http://localhost:5050/user/admin/${user.email}`
  //     );
  //     //const userData = response.data;
  //     setIsAdmin(response.data.admin);
  //     console.log("Admin status:", response.data.admin);
  //     // return res.data?.admin
  //   } catch (err) {
  //     console.log("Error checking admin status:", err);
  //   }
  // };

  //  const checkAdminStatus = async () => {
  //    try {
  //     const response = await axiosSecure.get(
  //       `http://localhost:5050/user/admin/${user.email}`
  //     );
  //     //const userData = response.data;
  //      setIsAdmin(response.data.admin);
  //      console.log("Admin status:", response.data.admin);
  //      // return res.data?.admin
  //    } catch (err) {
  //      console.log("Error checking admin status:", err);
  //    }
  //  };

  //  useEffect(() => {
  //  const checkAdminStatus = async () => {
  //    try {

  // const timer = setTimeout(() => {

  //         const response = await axios.get(
  //           `http://localhost:5050/user/admin/${user.email}`
  //           );
  //           //const userData = response.data;
  //            setIsAdmin(response.data.admin);
  //           console.log("Admin status:", response.data.admin);// Action to perform after the delay
  //       }, 2000);

  //         const response = await axios.get(
  //           `http://localhost:5050/user/admin/${user.email}`
  //           );
  //           //const userData = response.data;
  //            setIsAdmin(response.data.admin);
  //           console.log("Admin status:", response.data.admin);
  //           // return res.data?.admin
  //          } catch (err) {
  //            console.log("Error checking admin status:", err);
  //         }
  //        };

  //       checkAdminStatus();
  //     }, []);

  return (
    <div className="flex min-h-screen">
      <Link to={"/"}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          Dashboard
        </h2>
      </Link>
      {/* <button
        onClick={senddataadmin}
        className="bg-blue-500 text-white p-2 rounded"
      >
        senddataadmin
      </button> */}
      <ul className="space-y-4">
        {isAdmin ? (
          <>
            {/* <Link
              to={"/dashboard/Admindash"}
              className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer"
            >
              Admin
            </Link> */}
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
              to={"/dashboard/Prtc"}
              className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer"
            >
              Prtc user
            </Link>
            <Link
              to={"/dashboard/payments"}
              className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer"
            >
              Payments
            </Link>
          </>
        )}
        <li>
          <Link to={"/dashboard/usercontrol"}>User Control</Link>
        </li>
      </ul>

      <h1>sidebar</h1>
    </div>
  );
};

const Dashboard = () => {
  //const [isOpen, setIsOpen] = useState(false);
  //const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64 p-6 transition-all">
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500">
          <Outlet />
          <h1>Dashboard Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
