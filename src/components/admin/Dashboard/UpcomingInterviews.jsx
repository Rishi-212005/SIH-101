import React from 'react';

const UpcomingInterviews = ({ interviews }) => {
  const getStatusColor = (status) => {
    const colors = {
      scheduled: 'text-blue-600 bg-blue-50',
      completed: 'text-green-600 bg-green-50',
      cancelled: 'text-red-600 bg-red-50',
      pending: 'text-orange-600 bg-orange-50'
    };
    return colors[status] || 'text-gray-600 bg-gray-50';
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Upcoming Interviews</h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View Calendar
        </button>
      </div>
      <div className="space-y-3">
        {interviews.map((interview, index) => (
          <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {interview.company.substring(0, 2)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{interview.studentName}</p>
                <p className="text-xs text-gray-600">{interview.company} • {interview.position}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{formatTime(interview.dateTime)}</p>
              <p className="text-xs text-gray-500">{new Date(interview.dateTime).toLocaleDateString()}</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(interview.status)}`}>
                {interview.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingInterviews;