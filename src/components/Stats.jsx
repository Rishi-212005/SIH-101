import React from 'react'

const Stats = () => {
  const mainStats = [
    { number: '10,000+', label: 'Students Placed', icon: 'fas fa-user-graduate' },
    { number: '500+', label: 'Partner Companies', icon: 'fas fa-building' },
    { number: '95%', label: 'Success Rate', icon: 'fas fa-trophy' },
    { number: '50+', label: 'Colleges Using', icon: 'fas fa-university' },
    { number: '15,000+', label: 'Internships Posted', icon: 'fas fa-briefcase' },
    { number: '24/7', label: 'Support Available', icon: 'fas fa-headset' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">STATISTICS</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming internship experiences across educational institutions
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {mainStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${stat.icon} text-blue-600 text-xl`}></i>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Placement Trends */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <i className="fas fa-chart-bar text-blue-600 mr-3"></i>
              Placement Trends
            </h3>
            <div className="space-y-5">
              {[
                { department: 'Computer Science', percentage: 92, color: 'bg-green-500' },
                { department: 'Mechanical Engineering', percentage: 85, color: 'bg-blue-500' },
                { department: 'Business Administration', percentage: 88, color: 'bg-purple-500' },
                { department: 'Electrical Engineering', percentage: 90, color: 'bg-orange-500' }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{item.department}</span>
                    <span className="text-gray-900 font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portal Usage */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <i className="fas fa-chart-pie text-blue-600 mr-3"></i>
              Portal Usage
            </h3>
            <div className="space-y-4">
              {[
                { icon: 'fas fa-check-circle', label: 'Daily Active Users', value: '2,500+', color: 'text-green-600' },
                { icon: 'fas fa-clock', label: 'Avg. Time Saved', value: '5 hours/week', color: 'text-yellow-600' },
                { icon: 'fas fa-chart-line', label: 'Application Rate', value: 'Increased by 40%', color: 'text-blue-600' },
                { icon: 'fas fa-user-check', label: 'Satisfaction Rate', value: '94% Positive', color: 'text-purple-600' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <i className={`${item.icon} ${item.color} text-lg mr-3`}></i>
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats