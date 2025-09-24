import React from 'react';

const JobCard = ({ job, onEdit, onViewApplicants, onDelete }) => {
  const getStatusColor = (status) => {
    const colors = {
      active: 'text-green-600 bg-green-50',
      inactive: 'text-gray-600 bg-gray-50',
      draft: 'text-orange-600 bg-orange-50',
      closed: 'text-red-600 bg-red-50'
    };
    return colors[status] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{job.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
          {job.status}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">🏢</span>
          <span className="ml-2">{job.company}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">💰</span>
          <span className="ml-2">₹{job.stipend}/month</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">📅</span>
          <span className="ml-2">Apply by: {new Date(job.deadline).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.slice(0, 3).map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
            {skill}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
            +{job.skills.length - 3} more
          </span>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{job.applicantCount}</span> applicants
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => onEdit(job)}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
          >
            Edit
          </button>
          <button 
            onClick={() => onViewApplicants(job)}
            className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors"
          >
            View Applicants
          </button>
          <button 
            onClick={() => onDelete(job.id)}
            className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
