import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Computer Science Student',
      college: 'IIT Delhi',
      quote: 'This platform made internship hunting so much easier! The smart matching connected me with 3 perfect opportunities and I landed my dream internship at Google.',
      avatar: '👨‍💻',
      rating: 5,
      internship: 'Software Engineer Intern at Google'
    },
    {
      name: 'Prof. Priya Patel',
      role: 'Faculty Mentor',
      college: 'NIT Karnataka',
      quote: 'The automated approval system saved me hours of paperwork. I can now focus on guiding students rather than administrative tasks. The dashboard gives me perfect visibility.',
      avatar: '👩‍🏫',
      rating: 5,
      internship: 'Mentored 50+ students'
    },
    {
      name: 'Anil Kumar',
      role: 'Placement Officer',
      college: 'DTU',
      quote: 'Real-time dashboards help us track placements effectively. We reduced manual work by 80% and improved our placement statistics significantly this year.',
      avatar: '👨‍💼',
      rating: 5,
      internship: 'Managed 200+ placements'
    },
    {
      name: 'Sarah Johnson',
      role: 'HR Manager',
      college: 'Microsoft India',
      quote: 'The quality of candidates from this portal is exceptional. The skill matching ensures we get students who are perfectly aligned with our requirements.',
      avatar: '👩‍💼',
      rating: 5,
      internship: 'Hired 30+ interns'
    },
    {
      name: 'Vikram Singh',
      role: 'Mechanical Engineering Student',
      college: 'BITS Pilani',
      quote: 'From application to offer letter, everything was seamless. The one-click apply feature and mentor approval workflow made the process stress-free.',
      avatar: '👨‍🔧',
      rating: 5,
      internship: 'Design Intern at Tesla'
    },
    {
      name: 'Dr. Meera Desai',
      role: 'Department Head',
      college: 'VJTI Mumbai',
      quote: 'The portal has transformed how we manage internships. The analytics help us identify skill gaps and improve our curriculum accordingly.',
      avatar: '👩‍🎓',
      rating: 5,
      internship: 'Improved curriculum based on data'
    }
  ]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Community Says
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Hear from students, mentors, and employers about their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.college}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              
              <div className="border-t border-gray-200 pt-3">
                <p className="text-primary text-sm font-semibold">{testimonial.internship}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Section */}
        <div className="mt-12 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center items-center mb-4">
              <div className="text-4xl font-bold mr-4">4.9</div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <div className="text-indigo-200 text-sm">Average Rating from 2,500+ Users</div>
              </div>
            </div>
            <p className="text-indigo-100">
              Trusted by students, faculty, and employers across 50+ educational institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials