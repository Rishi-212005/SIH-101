import React, { useMemo, useState } from 'react';
import {
  MetricCards,
  PlacementChart,
  DepartmentStats,
  RecentActivity,
  QuickActions,
  UpcomingInterviews,
  JobList
} from '.';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Intern', company: 'Acme Corp', department: 'CSE', status: 'Open' },
    { id: 2, title: 'Data Analyst Intern', company: 'DataWorks', department: 'ECE', status: 'Open' },
    { id: 3, title: 'Mechanical Design Intern', company: 'MechaLabs', department: 'Mechanical', status: 'Closed' },
  ]);

  const departmentStats = useMemo(() => ([
    { name: 'CSE', placements: 120 },
    { name: 'ECE', placements: 95 },
    { name: 'Mechanical', placements: 60 },
    { name: 'Civil', placements: 45 },
    { name: 'IT', placements: 80 },
  ]), []);

  const metrics = useMemo(() => ([
    { type: 'jobs', title: 'Total Jobs Posted', value: 45, trend: '+5 this week' },
    { type: 'applicants', title: 'Pending Applications', value: 128, trend: '+12 today' },
    { type: 'interviews', title: 'Interviews Scheduled', value: 32, trend: '+8 this week' },
    { type: 'placements', title: 'Students Placed', value: 67, trend: '' },
    { type: 'pending', title: 'Pending Verification', value: 3, trend: '-2 today' },
  ]), []);

  const placementData = useMemo(() => ([
    { month: 'Jan', placed: 10, internships: 6 },
    { month: 'Feb', placed: 15, internships: 9 },
    { month: 'Mar', placed: 12, internships: 13 },
    { month: 'Apr', placed: 20, internships: 12 },
    { month: 'May', placed: 14, internships: 16 },
    { month: 'Jun', placed: 25, internships: 19 },
  ]), []);

  const recentActivity = useMemo(() => ([
    { type: 'job_posted', message: 'New job posted: Backend Intern - CloudNine', time: '2m ago', unread: true },
    { type: 'application', message: 'Riya applied for Frontend Intern', time: '10m ago', unread: false },
    { type: 'verification', message: 'Employer verified: TechSpark', time: '1h ago', unread: false },
  ]), []);

  const interviews = useMemo(() => ([
    { company: 'Acme', studentName: 'Arjun', position: 'Frontend Intern', dateTime: new Date().toISOString(), status: 'scheduled' },
    { company: 'DataWorks', studentName: 'Riya', position: 'Data Analyst Intern', dateTime: new Date(Date.now()+86400000).toISOString(), status: 'pending' },
  ]), []);

  const handleJobUpdate = (updatedJob) => {
    setJobs((prev) => prev.map((j) => (j.id === updatedJob.id ? updatedJob : j)));
  };

  const handleJobDelete = (jobId) => {
    setJobs((prev) => prev.filter((j) => j.id !== jobId));
  };

  const handleJobCreate = (jobData) => {
    setJobs((prev) => [
      ...prev,
      { id: Math.max(0, ...prev.map(j => j.id)) + 1, status: 'Open', ...jobData }
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

        <MetricCards metrics={metrics} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <PlacementChart data={placementData} />
          </div>
          <div>
            <DepartmentStats stats={departmentStats} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <QuickActions />
          </div>
          <div>
            <UpcomingInterviews interviews={interviews} />
          </div>
        </div>

        <div className="mb-8">
          <RecentActivity activities={recentActivity} />
        </div>

        <div className="mb-12">
          <JobList
            jobs={jobs}
            onJobUpdate={handleJobUpdate}
            onJobDelete={(job) => handleJobDelete(job.id ?? job)}
            onJobCreate={handleJobCreate}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;