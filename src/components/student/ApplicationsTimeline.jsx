import React from 'react';

const ApplicationsTimeline = ({ applications, darkMode }) => {
  const statusConfig = {
    pending: { color: 'bg-yellow-500', text: 'Pending Review' },
    'mentor-approval': { color: 'bg-blue-500', text: 'Mentor Approval' },
    interview: { color: 'bg-purple-500', text: 'Interview' },
    offer: { color: 'bg-green-500', text: 'Offer Received' },
    placed: { color: 'bg-emerald-500', text: 'Placed' },
    rejected: { color: 'bg-red-500', text: 'Rejected' }
  };

  const getStatus = (status) => statusConfig[status] || statusConfig.pending;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Application Status</h2>
        <button className="text-blue-600 dark:text-blue-400 hover:underline">View All</button>
      </div>

      <div className="space-y-4">
        {applications.map((app) => {
          const status = getStatus(app.status);
          return (
            <div key={app.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${status.color}`}></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{app.position}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{app.company}</p>
                </div>
              </div>
              
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.color} text-white`}>
                  {status.text}
                </span>
                <p className="text-sm text-gray-500 mt-1">{app.date}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Application Progress</span>
          <span>3/8 Applications</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full h-2 transition-all duration-500" style={{ width: '37.5%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsTimeline;