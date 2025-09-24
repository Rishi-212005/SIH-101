import React from 'react';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    const icons = {
      job_posted: '📋',
      application: '📨',
      interview: '📅',
      placement: '✅',
      verification: '🔍',
      shortlist: '⭐'
    };
    return icons[type] || '📢';
  };

  const getActivityColor = (type) => {
    const colors = {
      job_posted: 'text-blue-600 bg-blue-50',
      application: 'text-green-600 bg-green-50',
      interview: 'text-purple-600 bg-purple-50',
      placement: 'text-emerald-600 bg-emerald-50',
      verification: 'text-orange-600 bg-orange-50',
      shortlist: 'text-yellow-600 bg-yellow-50'
    };
    return colors[type] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${getActivityColor(activity.type)}`}>
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-800 leading-tight">
                {activity.message}
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
            {activity.unread && (
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;