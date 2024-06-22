import React from 'react';
import { CiClock2 } from "react-icons/ci";
const CompanyOverview = ({jobdata}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Company Overview</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-600">
        <div className="flex items-center">
          <i className="fas fa-calendar-alt text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">JOB EXIPIRY:</p>
            <p>{jobdata.date}</p>
          </div>
        </div>

        

        <div className="flex items-center">
          <i className="fas fa-user-graduate text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">EDUCATION:</p>
            <p>{jobdata.education}</p>
          </div>
        </div>



        <div className="flex items-center">
          <i className="fas fa-wallet text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">SALARY:</p>
            <p>{jobdata.maxsalary}-{jobdata.minisalary}/month</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">LOCATION:</p>
            <p>{jobdata.companyDocuments.state}</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="fas fa-briefcase text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">JOB TYPE:</p>
            <p>{jobdata.jobType}</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="fas fa-briefcase text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">EXPERIENCE:</p>
            <p>{jobdata.experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyOverview;
