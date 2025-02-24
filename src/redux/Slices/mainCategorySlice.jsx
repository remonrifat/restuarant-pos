
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: "All",
  clickedCards: [],
  showCategoryImagesAbove: false,
};

const mainCategorySlice = createSlice({
  name: 'mainCategory',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    toggleClickedCard: (state, action) => {
      const index = action.payload;
      if (state.clickedCards.includes(index)) {
        state.clickedCards = state.clickedCards.filter(item => item !== index);
      } else {
        state.clickedCards.push(index);
      }
    },
    setShowCategoryImagesAbove: (state, action) => {
      state.showCategoryImagesAbove = action.payload;
    },
  },
});

export const { setActiveTab, toggleClickedCard, setShowCategoryImagesAbove } = mainCategorySlice.actions;

export const selectActiveTab = (state) => state.mainCategory.activeTab;
export const selectClickedCards = (state) => state.mainCategory.clickedCards;
export const selectShowCategoryImagesAbove = (state) => state.mainCategory.showCategoryImagesAbove;

export default mainCategorySlice.reducer;
