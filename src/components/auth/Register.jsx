import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: 'student',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    department: '',
    skills: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const roles = [
    { value: 'student', label: 'Student', icon: 'fas fa-user-graduate', color: 'from-blue-500 to-blue-600' },
    { value: 'mentor', label: 'Faculty Mentor', icon: 'fas fa-chalkboard-teacher', color: 'from-green-500 to-green-600' },
    { value: 'employer', label: 'Employer', icon: 'fas fa-briefcase', color: 'from-purple-500 to-purple-600' }
  ];

  const departments = [
    'Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 
    'Civil Engineering', 'Electronics & Communication', 'Information Technology',
    'Business Administration', 'Data Science', 'Artificial Intelligence',
    'Other'
  ];

  const checkPasswordStrength = (password) => {
    if (password.length === 0) return '';
    if (password.length < 6) return 'weak';
    if (password.length < 8) return 'medium';
    
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const strength = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length;
    
    if (strength >= 3) return 'strong';
    if (strength >= 2) return 'medium';
    return 'weak';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value));
    }
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (formData.role === 'student' && !formData.department) {
      newErrors.department = 'Department is required for students';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Registration data:', formData);
      setIsLoading(false);
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-2xl font-bold text-blue-600 mb-4 hover:text-blue-700 transition-colors">
            <i className="fas fa-graduation-cap mr-2"></i>
            InternConnect
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Join Our Community</h1>
          <p className="text-lg text-gray-600">Create your account and start your internship journey</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <i className="fas fa-user-tag mr-2 text-blue-500"></i>
                Select Your Role <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {roles.map(role => (
                  <button
                    type="button"
                    key={role.value}
                    onClick={() => setFormData(prev => ({ ...prev, role: role.value }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      formData.role === role.value 
                        ? `border-blue-500 bg-gradient-to-r ${role.color} text-white shadow-lg` 
                        : 'border-gray-200 hover:border-blue-300 bg-white text-gray-700 hover:shadow-md'
                    }`}
                  >
                    <i className={`${role.icon} text-lg mb-2 block`}></i>
                    <span className="font-medium text-sm">{role.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all duration-300 ${
                    errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Contact & Academic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all duration-300 ${
                    errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                  }`}
                  placeholder="+91 9876543210"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {formData.role === 'student' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all duration-300 ${
                      errors.department ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                  >
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>
              )}
            </div>

            {/* Skills Section */}
            {(formData.role === 'student' || formData.role === 'mentor') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="fas fa-tools mr-2 text-purple-500"></i>
                  Skills & Technologies
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-300"
                  placeholder="React, Node.js, Python, Machine Learning, etc."
                />
                <p className="text-xs text-gray-500 mt-1">Separate skills with commas</p>
              </div>
            )}

            {/* Passwords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all duration-300 ${
                    errors.password ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                  }`}
                  placeholder="••••••••"
                />
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <div className={`h-2 rounded-full flex-1 ${
                        passwordStrength === 'weak' ? 'bg-red-500' : 
                        passwordStrength === 'medium' ? 'bg-yellow-500' : 
                        passwordStrength === 'strong' ? 'bg-green-500' : 'bg-gray-200'
                      }`}></div>
                      <span className="text-xs font-medium text-gray-600 capitalize">
                        {passwordStrength || 'Enter password'}
                      </span>
                    </div>
                  </div>
                )}
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all duration-300 ${
                    errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                  }`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <i className="fas fa-user-plus mr-2 group-hover:scale-110 transition-transform"></i>
                  Create My Account
                </span>
              )}
            </button>

            {/* Login Link */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;