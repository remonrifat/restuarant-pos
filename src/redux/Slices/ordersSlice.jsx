import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: []
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    increaseQuantity: (state, action) => {
      const index = action.payload;
      if (state.orders[index].quantity < 99) {
        state.orders[index].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const index = action.payload;
      if (state.orders[index].quantity > 1) {
        state.orders[index].quantity -= 1;
      }
    },
    deleteOrder: (state, action) => {
      const index = action.payload;
      state.orders = state.orders.filter((_, i) => i !== index);
    }
  }
});

export const { setOrders, increaseQuantity, decreaseQuantity, deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer;





