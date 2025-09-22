import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen, darkMode }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/student/dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { path: '/student/profile', icon: 'fas fa-user', label: 'Profile' },
    { path: '/student/jobs', icon: 'fas fa-briefcase', label: 'Jobs' },
    { path: '/student/applications', icon: 'fas fa-file-alt', label: 'Applications' },
    { path: '/student/tests', icon: 'fas fa-clipboard-list', label: 'Tests' },
    { path: '/student/certificates', icon: 'fas fa-award', label: 'Certificates' },
    { path: '/student/notifications', icon: 'fas fa-bell', label: 'Notifications' },
    { path: '/student/settings', icon: 'fas fa-cog', label: 'Settings' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-graduation-cap text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              InternConnect
            </span>
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <i className="fas fa-times text-gray-600 dark:text-gray-300"></i>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
                      }
                    `}
                  >
                    <i className={`${item.icon} w-5 text-center`}></i>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Logout Button */}
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 w-full transition-colors duration-200">
              <i className="fas fa-sign-out-alt w-5 text-center"></i>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;