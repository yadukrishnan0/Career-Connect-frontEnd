import React from 'react';

const PostJob = () => {
  return (

    <div className="mx-auto  p-8 max-w-4xl bg-white  rounded-md ">
      <h1 className="text-2xl font-bold mb-6">Post a Job</h1>
      <form>
        {/* Job Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Job Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Add job title, role, vacancies etc"
            name='jobTitle'
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tags</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Job keyword, tags etc"
            name='tags'
          />
        </div>

        {/* Job Role */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Job Role</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md " name='jobrole' placeholder='job role'/>
          
        </div>

        {/* Salary */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Min Salary</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Minimum salary"
            name='minisalary'/>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Max Salary</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Maximum salary"
            name='maxsalary'/>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Salary Type</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder='salary'
            name='salaryType'/>
              
          </div>
        </div>

        {/* Advanced Information */}
        <h2 className="text-xl font-bold mb-4">Advanced Information</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Education</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" name='education' placeholder='Education'/>
              
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Experience</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" name='experience' placeholder='Experience'/>
              
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Job Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md" name='jobType'>
              <option value='default' hidden>Select...</option>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Part-time">Part-time</option>
              <option value="internship">internship</option>
              {/* Add job type options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Works-Space-Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md" name='Works_Space_Type'>
              <option value=""  hidden>Select...</option>
              <option value="On-site">On-site</option>
              <option value="Hybird">Hybird</option>
              <option value="Remote">Remote</option>
              {/* Add job level options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Vacancies</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Number of vacancies"
              name='Vacancies'
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Expiration Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            name='date'/>
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
