import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Router/Routers.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Provider } from "react-redux";
import store from './app/Store.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div>
        <AuthProvider>
          <RouterProvider router={Routers}></RouterProvider>
        </AuthProvider>
      </div>
    </Provider>
  </StrictMode>
);
