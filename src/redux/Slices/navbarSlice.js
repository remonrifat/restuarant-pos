import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  isDropdownOpen: false,
  searchQuery: '',
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  closeSidebar,
  toggleDropdown,
  closeDropdown,
  setSearchQuery,
} = navbarSlice.actions;

export default navbarSlice.reducer;
