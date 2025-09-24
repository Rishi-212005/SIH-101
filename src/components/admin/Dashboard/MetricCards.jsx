import React from 'react';

const MetricCards = ({ metrics }) => {
  const getCardStyle = (type) => {
    const styles = {
      jobs: 'from-blue-500 to-blue-600',
      applicants: 'from-green-500 to-green-600',
      interviews: 'from-purple-500 to-purple-600',
      placements: 'from-orange-500 to-orange-600',
      pending: 'from-red-500 to-red-600'
    };
    return styles[type] || 'from-gray-500 to-gray-600';
  };

  const getIcon = (type) => {
    const icons = {
      jobs: '💼',
      applicants: '👥',
      interviews: '📅',
      placements: '✅',
      pending: '⏳'
    };
    return icons[type] || '📊';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${getCardStyle(metric.type)} text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">{metric.title}</p>
              <p className="text-3xl font-bold mt-2">{metric.value}</p>
              {metric.trend && (
                <p className={`text-xs mt-1 ${metric.trend.includes('+') ? 'text-green-200' : 'text-red-200'}`}>
                  {metric.trend}
                </p>
              )}
            </div>
            <div className="text-4xl opacity-90">{getIcon(metric.type)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricCards;