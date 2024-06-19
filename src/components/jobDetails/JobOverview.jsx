import React from 'react';
import { CiClock2 } from "react-icons/ci";
const JobOverview = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Job Overview</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-600">
        <div className="flex items-center">
          <i className="fas fa-calendar-alt text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">JOB POSTED:</p>
            <p>14 June, 2021</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <CiClock2 className='text-blue-500 mr-2'/>
          <div>
            <p className="font-bold">JOB EXPIRE IN:</p>
            <p>14 July, 2021</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="fas fa-user-graduate text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">EDUCATION:</p>
            <p>Graduation</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="fas fa-wallet text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">SALARY:</p>
            <p>$50k-80k/month</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">LOCATION:</p>
            <p>New York, USA</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="fas fa-briefcase text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">JOB TYPE:</p>
            <p>Full Time</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="fas fa-briefcase text-blue-500 mr-2"></i>
          <div>
            <p className="font-bold">EXPERIENCE:</p>
            <p>10-15 Years</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobOverview;
