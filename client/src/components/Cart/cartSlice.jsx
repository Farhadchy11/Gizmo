import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const MAX_QUANTITY = 20;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity < MAX_QUANTITY) {
          existingItem.quantity += 1;
          const str1 = product.price;
          const price = Number(str1);
          state.totalAmount += price;
        }
      } else {
        state.items.push({ ...product, quantity: 1 });
        const str1 = product.price;
        const price = Number(str1);
        state.totalAmount += price;
      }
    },

    updateQuantity(state, action) {
      const { productID, quantity } = action.payload;

      const itemToUpdate = state.items.find((item) => item.id === productID);

      const difference = quantity - itemToUpdate.quantity;

      itemToUpdate.quantity = quantity;
      const str1 = itemToUpdate.price;
      const price = Number(str1);
      state.totalAmount += difference * price;
    },

    removeFromCart(state, action) {
      const productId = action.payload;
      const itemToRemove = state.items.find((item) => item.id === productId);
      if (itemToRemove) {
        const str1 = itemToRemove.price;
        const price = Number(str1);
        state.totalAmount -= price * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export const selectCartTotalAmount = (state) => state.cart.totalAmount;
