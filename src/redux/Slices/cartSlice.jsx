import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        item => item.title === action.payload.title && item.size === action.payload.size
      );
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    updateCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.cartItems.find(item => item.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const { addToCart, removeItem, updateCart, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotal = (state) => state.cart.cartItems.reduce(
  (total, item) => {
    const itemTotal = item.price * item.quantity;
    // If baseDiscount is present, subtract it from the total
    return total + (item.baseDiscount ? itemTotal - (item.baseDiscount * item.quantity) : itemTotal);
  },
  0
);
export default cartSlice.reducer;
