import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/auth/InputField';
import Button from '../../components/auth/Button';
import FormCard from '../../components/auth/FormCard';

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
    // Clear error when user starts typing
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
    if (formData.role === 'student' && !formData.department.trim()) {
      newErrors.department = 'Department is required for students';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Registration data:', formData);
      alert('Registration successful! Redirecting to login...');
      navigate('/login');
    }
  };

  return (
    <FormCard 
      title="Create Your Account" 
      subtitle="Join InternConnect and start your journey"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            I am a <span className="text-red-500">*</span>
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
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          error={errors.fullName}
        />

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
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
          error={errors.phone}
        />

        {formData.role === 'student' && (
          <InputField
            label="Department"
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter your department"
            required
            error={errors.department}
          />
        )}

        {(formData.role === 'student' || formData.role === 'mentor') && (
          <InputField
            label="Skills (comma separated)"
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., React, Node.js, Python"
            error={errors.skills}
          />
        )}

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

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
          error={errors.confirmPassword}
        />

        <Button type="submit" variant="primary">
          Create Account
        </Button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-primary hover:text-indigo-700 font-semibold transition-colors duration-300"
            >
              Sign in here
            </button>
          </p>
        </div>
      </form>
    </FormCard>
  );
};

export default Register;