import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './Slices/navbarSlice';
import ordersReducer from './Slices/ordersSlice';
import categoryReducer from './Slices/categorySlice';
import mainCategoryReducer from './Slices/mainCategorySlice';
import cartReducer from './Slices/cartSlice';
import notificationReducer from './Slices/notificationSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    orders: ordersReducer,
    category: categoryReducer,
    mainCategory: mainCategoryReducer,
    cart: cartReducer,
    notification: notificationReducer
  },
});