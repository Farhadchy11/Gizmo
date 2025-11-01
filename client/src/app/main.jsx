import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routers from "./Router/Routers.jsx";
import AuthProvider from "../Hooks/AuthProvider.jsx";
import { Provider } from "react-redux";
import store from "./Store.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div>
          <AuthProvider>
            <RouterProvider router={Routers}></RouterProvider>
          </AuthProvider>
        </div>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
