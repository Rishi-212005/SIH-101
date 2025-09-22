import React from 'react';

const TestsSection = ({ tests, darkMode }) => {
  const getTestIcon = (type) => {
    return type === 'MCQ' ? 'fas fa-list-ol' : 'fas fa-code';
  };

  const getTestColor = (type) => {
    return type === 'MCQ' ? 'from-green-500 to-emerald-600' : 'from-purple-500 to-indigo-600';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Available Tests</h2>
        <button className="text-blue-600 dark:text-blue-400 hover:underline">View All</button>
      </div>

      <div className="space-y-4">
        {tests.map((test) => (
          <div key={test.id} className="group p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${getTestColor(test.type)} rounded-lg flex items-center justify-center text-white`}>
                  <i className={`${getTestIcon(test.type)} text-lg`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {test.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span className="flex items-center">
                      <i className="fas fa-clock mr-1"></i>
                      {test.duration}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-calendar mr-1"></i>
                      Due: {test.due}
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform group-hover:scale-105">
                Start Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestsSection;