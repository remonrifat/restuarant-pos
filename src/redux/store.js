import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './Slices/navbarSlice';
import notificationReducer from './Slices/notificationSlice';
import cartReducer from './Slices/cartSlice';
import mainCategoryReducer from './Slices/mainCategorySlice';
import categoryReducer from './Slices/categorySlice';
import ordersReducer from './Slices/ordersSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    notification: notificationReducer,
    cart: cartReducer,
    mainCategory: mainCategoryReducer,
    category: categoryReducer,
    orders: ordersReducer,
  },
});

export default store;
