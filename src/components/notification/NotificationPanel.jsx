import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markAsRead, markAllAsRead } from '../../redux/Slices/notificationSlice';

const NotificationPanel = () => {
  const dispatch = useDispatch();
  const { notifications, unreadCount } = useSelector((state) => state.notification);

  const handleMarkAsRead = (notificationId) => {
    dispatch(markAsRead(notificationId));
    // Backend call can be made here
    // Example:
    // fetch('/api/notifications/mark-read', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ notificationId })
    // });
  };

  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead());
    // Backend call can be made here
    // Example:
    // fetch('/api/notifications/mark-all-read', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' }
    // });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="text-sm text-[#D76527] hover:text-[#D76527] font-medium"
            >
              Mark all as read
            </button>
          )}
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No notifications
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                !notification.read ? 'bg-gray-50' : ''
              }`}
              onClick={() => handleMarkAsRead(notification.id)}
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <p className={`text-sm ${!notification.read ? 'font-semibold' : ''}`}>
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatTime(notification.timestamp)}
                  </p>
                </div>
                {!notification.read && (
                  <span className="w-2 h-2 bg-[#D76527] rounded-full mt-2"></span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;
