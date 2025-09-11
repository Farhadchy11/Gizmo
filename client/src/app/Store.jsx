import { configureStore } from "@reduxjs/toolkit";
import cartS from "../components/Cart/cartSlice.jsx";

export default configureStore({
  reducer: {
    cart: cartS,
  },
});
