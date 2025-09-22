import React from 'react';

const NotificationsPanel = ({ notifications, darkMode }) => {
  const getNotificationIcon = (type) => {
    const icons = {
      job: 'fas fa-briefcase text-blue-500',
      application: 'fas fa-file-alt text-green-500',
      test: 'fas fa-clipboard-list text-purple-500',
      certificate: 'fas fa-award text-yellow-500'
    };
    return icons[type] || 'fas fa-bell text-gray-500';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Mark all read</button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex-shrink-0">
              <i className={`${getNotificationIcon(notification.type)} text-lg mt-1`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {notification.message}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Notification Settings */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 py-2">
          <i className="fas fa-cog"></i>
          <span>Notification Settings</span>
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel;