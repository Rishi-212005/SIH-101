import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      title: 'Applications Sent',
      value: '12',
      change: '+3 this week',
      icon: 'fas fa-paper-plane',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Tests Completed',
      value: '8',
      change: '+2 this week',
      icon: 'fas fa-clipboard-check',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Interviews',
      value: '5',
      change: '+1 today',
      icon: 'fas fa-user-tie',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Certificates',
      value: '3',
      change: '60% progress',
      icon: 'fas fa-award',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
              <p className="text-xs text-green-500 dark:text-green-400 mt-1">{stat.change}</p>
            </div>
            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white`}>
              <i className={`${stat.icon} text-lg`}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;