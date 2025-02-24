
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  activeCategory: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = categorySlice.actions;

export const selectActiveCategory = (state) => state.category.activeCategory;

export default categorySlice.reducer;
