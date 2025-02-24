import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    clearOrders: (state) => {
      state.orders = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addOrder, setOrders, clearOrders, setLoading, setError } = ordersSlice.actions;
export default ordersSlice.reducer;
