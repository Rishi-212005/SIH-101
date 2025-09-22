import React from 'react';

const JobCard = ({ job, darkMode }) => {
  const getStatusColor = (daysLeft) => {
    if (daysLeft <= 2) return 'text-red-500';
    if (daysLeft <= 5) return 'text-yellow-500';
    return 'text-green-500';
  };

  const daysLeft = Math.ceil((new Date(job.deadline) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{job.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(daysLeft)} bg-opacity-10 ${daysLeft <= 2 ? 'bg-red-500' : daysLeft <= 5 ? 'bg-yellow-500' : 'bg-green-500'}`}>
            {daysLeft}d left
          </span>
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <i className="fas fa-rupee-sign mr-2 w-4"></i>
            <span>{job.stipend}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <i className="fas fa-map-marker-alt mr-2 w-4"></i>
            <span>{job.location} • {job.type}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <i className="fas fa-clock mr-2 w-4"></i>
            <span>Posted {job.posted}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {job.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            Apply Now
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <i className="fas fa-heart text-gray-400 hover:text-red-500"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;