import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import RegisterForm from "../components/RegisterForm/RegisterForm.jsx";
import LoginForm from "../components/LoginForm/LoginForm.jsx";
import Products from "../components/Product/Products.jsx";
import Categories from "../components/Home/Categories/Categories.jsx";
import Cart from "../components/Cart/Cart.jsx";
import UserHome from "../components/Dashboard/UserHome/UserHome.jsx";
import AllUsers from "../Outlet/Dashboard/Allusers.jsx";
import Outlet from "../Outlet/Outlet.jsx";
import Dashboard from "../Outlet/Dashboard/Dashboard.jsx";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Outlet></Outlet>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/loginForm",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/Products",
        element: <Products></Products>,
      },
      {
        path: "/Categories",
        element: <Categories></Categories>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/RegisterForm",
        element: <RegisterForm></RegisterForm>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "UserHome",
        element: <UserHome></UserHome>,
      },
    ],
  },
]);

export default Routers;
