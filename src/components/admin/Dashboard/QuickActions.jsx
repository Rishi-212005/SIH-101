import React from 'react';

const QuickActions = () => {
  const actions = [
    {
      icon: '📋',
      title: 'Post New Job',
      description: 'Create internship opportunity',
      color: 'from-blue-500 to-blue-600',
      path: '/admin/jobs'
    },
    {
      icon: '👥',
      title: 'View Applications',
      description: 'Manage student applications',
      color: 'from-green-500 to-green-600',
      path: '/admin/applicants'
    },
    {
      icon: '📅',
      title: 'Schedule Interview',
      description: 'Arrange candidate interviews',
      color: 'from-purple-500 to-purple-600',
      path: '/admin/interviews'
    },
    {
      icon: '🏢',
      title: 'Verify Employer',
      description: 'Approve company registrations',
      color: 'from-orange-500 to-orange-600',
      path: '/admin/employers'
    },
    {
      icon: '📊',
      title: 'Generate Report',
      description: 'Export placement analytics',
      color: 'from-red-500 to-red-600',
      path: '/admin/settings'
    },
    {
      icon: '⚙️',
      title: 'System Settings',
      description: 'Configure matching algorithm',
      color: 'from-gray-500 to-gray-600',
      path: '/admin/settings'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`bg-gradient-to-br ${action.color} text-white p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg`}
            onClick={() => window.location.href = action.path}
          >
            <div className="text-2xl mb-2">{action.icon}</div>
            <div className="text-sm font-semibold">{action.title}</div>
            <div className="text-xs opacity-90 mt-1">{action.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;