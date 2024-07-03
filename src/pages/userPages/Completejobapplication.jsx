import React from 'react';
import { Link } from 'react-router-dom';
const Completejobapplication = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 border-4 border-green-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <h1 className="text-xl font-semibold">Application Submit Successfully</h1>
        <p className="mb-4">Thank you</p>
        < Link to={'/filterjob'}>
        <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none">
          Search jobs
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Completejobapplication;
