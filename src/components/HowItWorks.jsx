import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Profile',
      description: 'Students create their digital profile with skills, resume, and academic details. Maintain one profile updated per semester.',
      icon: 'fas fa-user-edit'
    },
    {
      number: '02',
      title: 'Find Opportunities',
      description: 'Placement cell posts verified internships tagged by skills, department, stipend range, and placement potential.',
      icon: 'fas fa-search'
    },
    {
      number: '03',
      title: 'Smart Matching',
      description: 'AI-powered recommendation engine suggests best-fit roles based on student skills and preferences.',
      icon: 'fas fa-robot'
    },
    {
      number: '04',
      title: 'One-Click Apply',
      description: 'Students apply with single click using their pre-filled profile. No repetitive form filling.',
      icon: 'fas fa-mouse-pointer'
    },
    {
      number: '05',
      title: 'Mentor Approval',
      description: 'Automated approval workflow with faculty mentors. Digital signatures and notifications.',
      icon: 'fas fa-check-double'
    },
    {
      number: '06',
      title: 'Get Placed',
      description: 'Receive offers, complete internship, and get digital certificates. Track everything in one place.',
      icon: 'fas fa-trophy'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">WORKFLOW</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">How Our Internship Portal Works</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless journey from internship discovery to placement conversion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 h-full">
                {/* Simple centered icon with number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                    <i className={`${step.icon} text-white text-lg absolute -bottom-2 -right-2 bg-blue-400 rounded-full p-2`}></i>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks