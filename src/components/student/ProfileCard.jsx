import React from 'react';

const ProfileCard = ({ student, darkMode }) => {
  const profileCompletion = 85;

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
            {student.avatar}
          </div>
          <div>
            <h2 className="text-xl font-bold">{student.name}</h2>
            <p className="text-blue-100">{student.department}</p>
            <p className="text-blue-100 text-sm">{student.semester} • CGPA: {student.cgpa}</p>
          </div>
        </div>
        <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200">
          <i className="fas fa-edit mr-2"></i>
          Edit Profile
        </button>
      </div>

      {/* Profile Completion */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-100">Profile Completion</span>
          <span className="font-semibold">{profileCompletion}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-white rounded-full h-2 transition-all duration-500"
            style={{ width: `${profileCompletion}%` }}
          ></div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-blue-100 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {student.skills.map((skill, index) => (
            <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-3 mt-4">
        <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg transition-colors duration-200">
          <i className="fas fa-file-alt mr-2"></i>
          Update Resume
        </button>
        <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg transition-colors duration-200">
          <i className="fas fa-eye mr-2"></i>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;