import React from 'react';

const PostJob = () => {
  return (

    <div className="  p-8 bg-white  rounded-md ">
      <h1 className="text-2xl font-bold mb-6">Post a Job</h1>
      <form>
        {/* Job Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Job Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Add job title, role, vacancies etc"
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tags</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Job keyword, tags etc"
          />
        </div>

        {/* Job Role */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Job Role</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Select...</option>
            {/* Add job roles options here */}
          </select>
        </div>

        {/* Salary */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Min Salary</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Minimum salary"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Max Salary</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Maximum salary"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Salary Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              {/* Add salary type options here */}
            </select>
          </div>
        </div>

        {/* Advanced Information */}
        <h2 className="text-xl font-bold mb-4">Advanced Information</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Education</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              {/* Add education options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Experience</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              {/* Add experience options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Job Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              {/* Add job type options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Job Level</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              {/* Add job level options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Vacancies</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Number of vacancies"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Expiration Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Post Job
        </button>
      </form>
    </div>
    
  );
};

export default PostJob;
