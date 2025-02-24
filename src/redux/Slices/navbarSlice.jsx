import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  isDropdownOpen: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
  },
});

export const { toggleSidebar, toggleDropdown, closeSidebar, closeDropdown } =
  navbarSlice.actions;

export default navbarSlice.reducer;
