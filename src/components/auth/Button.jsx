import React from 'react';

const Button = ({ 
  children, 
  type = 'button', 
  onClick, 
  disabled = false,
  variant = 'primary' 
}) => {
  const baseClasses = "w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-indigo-700 focus:ring-primary hover:scale-105",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;