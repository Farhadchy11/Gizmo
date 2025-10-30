import { configureStore } from "@reduxjs/toolkit";
import  cartS  from "./../features/Cart/cartSlice.jsx";

export default configureStore({
  reducer: {
    cart: cartS,
  },
});
