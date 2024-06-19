import React from 'react';
import microsoftLgo from '../../assets/microsoft.webp';

const JobListing = ({jobs}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 py-7 border rounded-sm shadow-sm space-y-4 md:space-y-0">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            src={`http://localhost:8086/assets/${jobs?.companyDocuments?.companylogo}`}
            alt="Company Logo"
            className="h-10 w-10"
          />
        </div>

        <div className="ml-4">
          <h3 className="text-lg font-medium">{jobs.jobTitle}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <span>{jobs?.companyId?.Companyname}</span>
            <span className="mx-2">•</span>
            <span>{jobs.minisalary}-{jobs?.maxsalary}</span>
            <span className="mx-2">•</span>
            <span>4 Days Remaining</span>
          </div>
        </div>
      </div>
      <button className="w-full md:w-auto px-6 py-2 bg-customBlue text-white font-roboto font-medium text-[.9rem] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Apply
      </button>
    </div>
  );
};

export default JobListing;
