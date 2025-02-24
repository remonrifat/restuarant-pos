import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  unreadCount: 0,
  isNotificationOpen: false
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
      state.unreadCount = action.payload.filter(notif => !notif.read).length;
    },
    toggleNotificationPanel: (state) => {
      state.isNotificationOpen = !state.isNotificationOpen;
    },
    markAsRead: (state, action) => {
      const notificationId = action.payload;
      const notification = state.notifications.find(n => n.id === notificationId);
      if (notification && !notification.read) {
        notification.read = true;
        state.unreadCount -= 1;
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach(notification => {
        notification.read = true;
      });
      state.unreadCount = 0;
    },
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
      if (!action.payload.read) {
        state.unreadCount += 1;
      }
    }
  }
});

export const {
  setNotifications,
  toggleNotificationPanel,
  markAsRead,
  markAllAsRead,
  addNotification
} = notificationSlice.actions;

export default notificationSlice.reducer;
