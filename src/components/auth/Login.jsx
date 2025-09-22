import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/auth/InputField';
import Button from '../../components/auth/Button';
import FormCard from '../../components/auth/FormCard';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  
  const [errors, setErrors] = useState({});

  const roles = [
    { value: 'student', label: 'Student' },
    { value: 'mentor', label: 'Faculty Mentor' },
    { value: 'employer', label: 'Employer' },
    { value: 'placement', label: 'Placement Cell' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Login data:', formData);
      alert(`Login successful as ${formData.role}!`);
      // Redirect based on role
      navigate('/dashboard');
    }
  };

  const handleDemoLogin = (role) => {
    const demoCredentials = {
      student: { email: 'student@demo.com', password: 'demo123' },
      mentor: { email: 'mentor@demo.com', password: 'demo123' },
      employer: { email: 'employer@demo.com', password: 'demo123' },
      placement: { email: 'placement@demo.com', password: 'demo123' }
    };
    
    setFormData({
      ...demoCredentials[role],
      role: role
    });
  };

  return (
    <FormCard 
      title="Welcome Back" 
      subtitle="Sign in to your InternConnect account"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Login as
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary/20 transition-all duration-300"
          >
            {roles.map(role => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>

        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          error={errors.password}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <button
            type="button"
            className="text-sm text-primary hover:text-indigo-700 transition-colors duration-300"
          >
            Forgot password?
          </button>
        </div>

        <Button type="submit" variant="primary">
          Sign In
        </Button>

        {/* Demo Login Buttons */}
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-3">Quick Demo Login:</p>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => handleDemoLogin('student')}
            >
              Student Demo
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => handleDemoLogin('mentor')}
            >
              Mentor Demo
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => handleDemoLogin('employer')}
            >
              Employer Demo
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => handleDemoLogin('placement')}
            >
              Placement Demo
            </Button>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-primary hover:text-indigo-700 font-semibold transition-colors duration-300"
            >
              Create one here
            </button>
          </p>
        </div>
      </form>
    </FormCard>
  );
};

export default Login;