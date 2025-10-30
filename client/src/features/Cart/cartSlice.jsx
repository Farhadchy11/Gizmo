import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
};

const MAX_QUANTITY = 10;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);
      if (existingItem && existingItem.quantity < MAX_QUANTITY) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("items", JSON.stringify(state.items));
    },

    increaseQty: (state, action) => {
      const { productID } = action.payload;
      const itemToUpdate = state.items.find((item) => item._id === productID);
      if (itemToUpdate && itemToUpdate.quantity < MAX_QUANTITY) {
        itemToUpdate.quantity += 1;
        localStorage.setItem("items", JSON.stringify(state.items));
      }
    },

    decreaseQty: (state, action) => {
      const { productID } = action.payload;
      const itemToUpdate = state.items.find((item) => item._id === productID);
      if (itemToUpdate) {
        itemToUpdate.quantity -= 1;
      }

      if (itemToUpdate.quantity === 0) {
        const filteredItems = state.items.filter(
          (item) => item._id !== productID
        );
        state.items = filteredItems;
      }
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const itemToRemove = state.items.find((item) => item._id === productId);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item._id !== productId);
      }
      localStorage.setItem("items", JSON.stringify(state.items));
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  updateQuantity,
  removeFromCart,
} = cartSlice.actions;
