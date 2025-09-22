import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import TestDashboard from "./pages/TestDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Features />
                <HowItWorks />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test-dashboard" element={<TestDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;