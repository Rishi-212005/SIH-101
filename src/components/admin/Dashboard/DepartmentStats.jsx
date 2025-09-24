import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DepartmentStats = ({ stats }) => {
  const departmentColors = {
    'CSE': ['#3B82F6', '#60A5FA', '#93C5FD'],
    'ECE': ['#10B981', '#34D399', '#6EE7B7'],
    'Mechanical': ['#F59E0B', '#FBBF24', '#FCD34D'],
    'Civil': ['#8B5CF6', '#A78BFA', '#C4B5FD'],
    'IT': ['#EF4444', '#F87171', '#FCA5A5']
  };

  const chartData = {
    labels: stats.map(dept => dept.name),
    datasets: [
      {
        data: stats.map(dept => dept.placements),
        backgroundColor: stats.map(dept => departmentColors[dept.name]?.[0] || '#6B7280'),
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
        }
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Department-wise Placements</h3>
      <div className="flex items-center justify-center">
        <div className="w-64 h-64">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {stats.map((dept, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-3"
                style={{ backgroundColor: departmentColors[dept.name]?.[0] }}
              ></div>
              <span className="text-sm font-medium text-gray-700">{dept.name}</span>
            </div>
            <div className="text-right">
              <span className="font-bold text-gray-900">{dept.placements}</span>
              <span className="text-xs text-gray-500 ml-1">placed</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentStats;