import React, { useState } from 'react';
import JobCard from './JobCard';
import JobForm from './JobForm';
import JobFilters from './JobFilters';

const JobList = ({ jobs, onJobUpdate, onJobDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    department: '',
    search: ''
  });

  const filteredJobs = jobs.filter(job => {
    return (
      (filters.status === '' || job.status === filters.status) &&
      (filters.department === '' || job.department === filters.department) &&
      (filters.search === '' || 
       job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
       job.company.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const handleEdit = (job) => {
    setEditingJob(job);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingJob(null);
    setShowForm(true);
  };

  const handleFormSubmit = (jobData) => {
    if (editingJob) {
      onJobUpdate({ ...editingJob, ...jobData });
    } else {
      onJobCreate(jobData);
    }
    setShowForm(false);
    setEditingJob(null);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingJob(null);
  };

  if (showForm) {
    return (
      <JobForm
        job={editingJob}
        onSubmit={handleFormSubmit}
        onCancel={handleFormCancel}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Job Management</h2>
          <p className="text-gray-600">Create and manage internship opportunities</p>
        </div>
        <button
          onClick={handleCreate}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          + Create New Job
        </button>
      </div>

      <JobFilters filters={filters} onFiltersChange={setFilters} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredJobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            onEdit={handleEdit}
            onViewApplicants={() => {/* Navigate to applicants */}}
            onDelete={onJobDelete}
          />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💼</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600">Try adjusting your filters or create a new job posting.</p>
        </div>
      )}
    </div>
  );
};

export default JobList;