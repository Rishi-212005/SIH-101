import React, { useState } from 'react';

const TopNavbar = ({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode, student }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 mr-4"
          >
            <i className="fas fa-bars text-gray-600 dark:text-gray-300"></i>
          </button>
          
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search jobs, tests, certificates..."
              className="pl-10 pr-4 py-2 w-80 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-gray-600 dark:text-gray-300`}></i>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative transition-colors duration-200"
            >
              <i className="fas fa-bell text-gray-600 dark:text-gray-300"></i>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Notifications Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="p-2">
                  <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                    <p className="text-sm">New internship matching your skills</p>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                    <p className="text-sm">Application status updated</p>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="font-medium">{student.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{student.department}</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              {student.avatar}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;