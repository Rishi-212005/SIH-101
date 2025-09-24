import React from 'react';
import QuickActions from './Dashboard/QuickActions';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        <QuickActions />
      </div>
    </div>
  );
};

export default AdminDashboard;


