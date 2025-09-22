import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import ProfileCard from './ProfileCard';
import StatsCards from './StatsCards';
import JobCard from './JobCard';
import ApplicationsTimeline from './ApplicationsTimeline';
import TestsSection from './TestsSection';
import CalendarWidget from './CalendarWidget';
import CertificatesGrid from './CertificatesGrid';
import NotificationsPanel from './NotificationsPanel';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Mock data
  const studentData = {
    name: "Rahul Sharma",
    avatar: "👨‍💻",
    department: "Computer Science & Engineering",
    semester: "6th Semester",
    cgpa: "8.9/10",
    skills: ["React", "Node.js", "Python", "MongoDB", "Machine Learning"],
    resumeUrl: "#"
  };

  const recommendedJobs = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Google",
      stipend: "₹45,000/month",
      location: "Bangalore",
      type: "Remote",
      skills: ["React", "JavaScript", "CSS"],
      posted: "2 days ago",
      deadline: "2024-03-15"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Microsoft",
      stipend: "₹50,000/month",
      location: "Hyderabad",
      type: "On-site",
      skills: ["Node.js", "Python", "AWS"],
      posted: "1 day ago",
      deadline: "2024-03-20"
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Amazon",
      stipend: "₹40,000/month",
      location: "Bangalore",
      type: "Hybrid",
      skills: ["Python", "ML", "SQL"],
      posted: "3 days ago",
      deadline: "2024-03-18"
    }
  ];

  const applications = [
    { id: 1, company: "Google", position: "Frontend Developer", status: "interview", date: "2024-03-20" },
    { id: 2, company: "Microsoft", position: "Backend Developer", status: "pending", date: "2024-03-15" },
    { id: 3, company: "Amazon", position: "Data Scientist", status: "offer", date: "2024-03-25" }
  ];

  const tests = [
    { id: 1, title: "JavaScript Fundamentals", type: "MCQ", duration: "30 mins", due: "2024-03-20" },
    { id: 2, title: "React.js Assessment", type: "Coding", duration: "60 mins", due: "2024-03-25" },
    { id: 3, title: "Data Structures", type: "MCQ", duration: "45 mins", due: "2024-03-22" }
  ];

  const certificates = [
    { id: 1, title: "Web Development Bootcamp", issuer: "InternConnect", date: "2024-01-15" },
    { id: 2, title: "React.js Certification", issuer: "Meta", date: "2024-02-20" },
    { id: 3, title: "Node.js Mastery", issuer: "Udemy", date: "2024-03-01" }
  ];

  const notifications = [
    { id: 1, type: "job", message: "New internship matching your skills", time: "2 hours ago" },
    { id: 2, type: "application", message: "Google application status updated", time: "1 day ago" },
    { id: 3, type: "test", message: "New test available", time: "2 days ago" }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} darkMode={darkMode} />
      
      <div className="lg:ml-64">
        <TopNavbar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          student={studentData}
        />
        
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome back, {studentData.name}!
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Here's your internship journey dashboard
            </p>
          </div>

          {/* Stats Cards */}
          <StatsCards />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-6">
              {/* Profile Card */}
              <ProfileCard student={studentData} darkMode={darkMode} />

              {/* Recommended Jobs */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Recommended Internships</h2>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendedJobs.map(job => (
                    <JobCard key={job.id} job={job} darkMode={darkMode} />
                  ))}
                </div>
              </div>

              {/* Applications Timeline */}
              <ApplicationsTimeline applications={applications} darkMode={darkMode} />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Calendar Widget */}
              <CalendarWidget darkMode={darkMode} />

              {/* Tests Section */}
              <TestsSection tests={tests} darkMode={darkMode} />

              {/* Certificates */}
              <CertificatesGrid certificates={certificates} darkMode={darkMode} />

              {/* Notifications */}
              <NotificationsPanel notifications={notifications} darkMode={darkMode} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;