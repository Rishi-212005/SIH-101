import React from 'react';

const CertificatesGrid = ({ certificates, darkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">My Certificates</h2>
        <button className="text-blue-600 dark:text-blue-400 hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="group p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white">
                  <i className="fas fa-award text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{certificate.issuer}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Issued: {certificate.date}</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group-hover:border-blue-300">
                  <i className="fas fa-eye text-gray-400 group-hover:text-blue-500"></i>
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group-hover:border-green-300">
                  <i className="fas fa-download text-gray-400 group-hover:text-green-500"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Progress */}
      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold">Certificate Progress</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">3 of 5 required certificates earned</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-orange-600">60%</div>
            <div className="text-xs text-gray-500">Completion</div>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full h-2 transition-all duration-500" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesGrid;