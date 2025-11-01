import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home.jsx";
import ProductsDetailsPage from "../products/ProductsDetailsPage.jsx";
import Outlet from "../Outlet/Outlet.jsx";
import { Suspense, lazy } from "react";
const Products = lazy(() => import("../products/products.jsx"));
const Cart = lazy(() => import("../cart/Cart.jsx"));
const Signin = lazy(() => import("../auth/signin.jsx"));
const Signup = lazy(() => import("../auth/signup.jsx"));
const Payment = lazy(() => import("../payment/Payment.jsx"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard.jsx"));
const UserHome = lazy(() =>
  import("../../features/Dashboard/UserHome/UserHome.jsx")
);
const AllUsers = lazy(() =>
  import("../../features/Dashboard/Allusers/Allusers.jsx")
);
const AddProduct = lazy(() =>
  import("../../features/Dashboard/AddProduct/AddProduct.jsx")
);
const AllProducts = lazy(() =>
  import("../../features/Dashboard/AllProducts/AllProducts.jsx")
);

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products",
        element: (
          <Suspense fallback={<div>Loading Products...</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<div>Loading Signin...</div>}>
            <Signin />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<div>Loading Signup...</div>}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/payment",
        element: (
          <Suspense fallback={<div>Loading Payment...</div>}>
            <Payment />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: <ProductsDetailsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5050/products/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <Dashboard />
      </Suspense>
    ),
    children: [
      {
        path: "userHome",
        element: (
          <Suspense fallback={<div>Loading UserHome...</div>}>
            <UserHome />
          </Suspense>
        ),
      },
      {
        path: "allUsers",
        element: (
          <Suspense fallback={<div>Loading AllUsers...</div>}>
            <AllUsers />
          </Suspense>
        ),
      },
      {
        path: "addProduct",
        element: (
          <Suspense fallback={<div>Loading AddProduct...</div>}>
            <AddProduct />
          </Suspense>
        ),
      },
      {
        path: "allProducts",
        element: (
          <Suspense fallback={<div>Loading AllProducts...</div>}>
            <AllProducts />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Routers;
