import React from 'react';
import { FaUsers } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
const JobTable = () => {
  const jobs = [
    {
      title: 'UI/UX Designer',
      type: 'Full Time',
      daysRemaining: 27,
      status: 'Active',
      applications: 798,
      expired: false,
    },
    {
      title: 'Senior UX Designer',
      type: 'Internship',
      daysRemaining: 8,
      status: 'Active',
      applications: 185,
      expired: false,
    },
    {
      title: 'Junior Graphic Designer',
      type: 'Full Time',
      daysRemaining: 24,
      status: 'Active',
      applications: 583,
      expired: false,
    },
    {
      title: 'Front End Developer',
      type: 'Full Time',
      daysRemaining: 'Dec 7, 2019',
      status: 'Expired',
      applications: 740,
      expired: true,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-start">Jobs</th>
            <th className="py-2 px-4 bg-gray-200 text-start">Status</th>
            <th className="py-2 px-4 bg-gray-200">Applications</th>
            <th className="py-2 px-4 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">
                <div>
                  <div className="font-semibold">{job.title}</div>
                  <div className="text-sm text-gray-500">{job.type} • {job.daysRemaining} days remaining</div>
                </div>
              </td>
              <td className="py-2 px-4">
                <span className={`inline-flex px-2 text-xs leading-5 font-semibold rounded-full ${job.expired ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  {job.status}
                </span>
              </td>
              <td className="py-2 px-4">
                <div className="text-sm text-gray-900 flex items-center justify-center gap-3"><FaUsers />{job.applications} Applications</div>
              </td>
              <td className="py-2 px-4 flex items-center justify-center relative">
                <button className="text-customBlue hover:text-white bg-customGray px-4 py-2 hover:bg-customBlue">View Applications</button>
                <HiOutlineDotsVertical className='text-[1.4rem] cursor-pointer'/>
                <div className='bg-red-600 h-10 w-10 absolute left-60 top-16 z-10'>hello</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
