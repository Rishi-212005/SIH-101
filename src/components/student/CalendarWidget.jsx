import React from 'react';

const CalendarWidget = ({ darkMode }) => {
  const upcomingEvents = [
    { id: 1, title: 'Google Interview', time: '10:00 AM', date: '2024-03-20', type: 'interview' },
    { id: 2, title: 'JavaScript Test Due', time: '11:59 PM', date: '2024-03-22', type: 'test' },
    { id: 3, title: 'Microsoft HR Call', time: '3:00 PM', date: '2024-03-25', type: 'meeting' }
  ];

  const getEventColor = (type) => {
    const colors = {
      interview: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
      test: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      meeting: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
    };
    return colors[type] || colors.meeting;
  };

  const getEventIcon = (type) => {
    const icons = {
      interview: 'fas fa-user-tie',
      test: 'fas fa-clipboard-list',
      meeting: 'fas fa-video'
    };
    return icons[type] || icons.meeting;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Upcoming Events</h2>
        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
          <i className="fas fa-download mr-1"></i>
          Export .ics
        </button>
      </div>

      <div className="space-y-4">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="flex items-center space-x-4 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow duration-200">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-2 min-w-[60px]">
                <div className="text-sm font-bold">{new Date(event.date).getDate()}</div>
                <div className="text-xs">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{event.title}</h3>
              <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mt-1">
                <i className="fas fa-clock mr-1"></i>
                {event.time}
              </div>
            </div>
            
            <span className={`px-2 py-1 rounded-full text-xs ${getEventColor(event.type)}`}>
              <i className={`${getEventIcon(event.type)} mr-1`}></i>
              {event.type}
            </span>
          </div>
        ))}
      </div>

      {/* Mini Calendar */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="font-medium text-gray-500 dark:text-gray-400">{day}</div>
          ))}
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`p-2 rounded-full ${
                day === 20 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;