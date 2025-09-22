import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg mr-3 transform group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                InternConnect
              </span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:ml-12 md:flex md:space-x-10">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500"
              >
                Home
              </Link>
              <a 
                href="#opportunities" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500"
              >
                Opportunities
              </a>
              <a 
                href="#dashboard" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500"
              >
                Dashboard
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500"
              >
                About
              </a>
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="px-6 py-2.5 border-2 border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 hover:border-blue-600 transition-all duration-300 transform hover:scale-105 shadow-sm"
            >
              <i className="fas fa-sign-in-alt mr-2"></i>
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-user-plus mr-2"></i>
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {/* Mobile Navigation Links */}
            <Link 
              to="/" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-home mr-3"></i>
              Home
            </Link>
            <a 
              href="#opportunities" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-briefcase mr-3"></i>
              Opportunities
            </a>
            <a 
              href="#dashboard" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-chart-bar mr-3"></i>
              Dashboard
            </a>
            <a 
              href="#about" 
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-info-circle mr-3"></i>
              About
            </a>

            {/* Mobile Auth Buttons */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="space-y-3">
                <Link 
                  to="/login" 
                  className="block w-full text-center px-4 py-3 border-2 border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-user-plus mr-2"></i>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;