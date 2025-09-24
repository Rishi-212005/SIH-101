import React, { useMemo, useState } from 'react';
import {
  MetricCards,
  PlacementChart,
  DepartmentStats,
  RecentActivity,
  QuickActions,
  UpcomingInterviews
} from './Dashboard';
import { JobList } from './JobManagement';

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
    { label: 'Total Applications', value: 1240, trend: '+8%' },
    { label: 'Active Jobs', value: 34, trend: '+3%' },
    { label: 'Interviews Scheduled', value: 18, trend: '+12%' },
    { label: 'Employers Verified', value: 42, trend: '+5%' },
  ]), []);

  const recentActivity = useMemo(() => ([
    { type: 'job', text: 'New job posted: Backend Intern - CloudNine' },
    { type: 'application', text: 'Riya applied for Frontend Intern' },
    { type: 'employer', text: 'Employer verified: TechSpark' },
  ]), []);

  const handleJobUpdate = (updatedJob) => {
    setJobs((prev) => prev.map((j) => (j.id === updatedJob.id ? updatedJob : j)));
  };

  const handleJobDelete = (jobId) => {
    setJobs((prev) => prev.filter((j) => j.id !== jobId));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {metrics.map((m, idx) => (
            <MetricCards key={idx} {...m} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <PlacementChart />
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
            <UpcomingInterviews />
          </div>
        </div>

        <div className="mb-8">
          <RecentActivity items={recentActivity} />
        </div>

        <div className="mb-12">
          <JobList
            jobs={jobs}
            onJobUpdate={handleJobUpdate}
            onJobDelete={(job) => handleJobDelete(job.id ?? job)}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


