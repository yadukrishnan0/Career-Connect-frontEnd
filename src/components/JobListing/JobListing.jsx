import React from 'react';
import applelogo from '../../assets/applelogo.gif'
const JobListing = () => {
  return (
    <div className="flex items-center justify-between p-4 py-7 border rounded-sm shadow-sm">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            src={applelogo}
            alt="Company Logo"
            className="h-10 w-10"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium">Software Engineer</h3>
          <div className="flex items-center text-sm text-gray-500">
            <span>China</span>
            <span className="mx-2">•</span>
            <span>$50K-$60K</span>
            <span className="mx-2">•</span>
            <span>4 Days Remaining</span>
          </div>
        </div>
      </div>
      <button className="px-6 py-2 bg-blue-600 text-white font-roboto font-medium text-[.9rem] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Apply
      </button>
    </div>
  );
};

export default JobListing;
