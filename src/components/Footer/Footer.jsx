import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-customGray text-gray-400 py-12 mt-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-gray-500 text-lg font-semibold"></h2>
            <p className='text-gray-500'>Call now: <a href="tel:(319)555-0115" className="text-gray-500">(319) 555-0115</a></p>
            <address className="not-italic mt-2 text-gray-500">
              6391 Elgin St. Celina, Delaware 10299, New York, United States of America
            </address>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Quick Link</h3>
            <ul>
              <li><a href="#about" className="hover:text-white text-gray-500">About</a></li>
              <li><a href="#contact" className="hover:text-white text-gray-500">Contact</a></li>
              <li><a href="#pricing" className="hover:text-white text-gray-500">Pricing</a></li>
              <li><a href="#blog" className="hover:text-white text-gray-500">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-semibold">Candidate</h3>
            <ul>
              <li><a href="#browse-jobs" className="hover:text-white text-gray-500">Browse Jobs</a></li>
              <li><a href="#browse-employers" className="hover:text-white text-gray-500">Browse Employers</a></li>
              <li><a href="#candidate-dashboard" className="hover:text-white text-gray-500">Candidate Dashboard</a></li>
              <li><a href="#saved-jobs" className="hover:text-white text-gray-500">Saved Jobs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-semibold">Employers</h3>
            <ul>
              <li><a href="#post-job" className="hover:text-white text-gray-500">Post a Job</a></li>
              <li><a href="#browse-candidates" className="hover:text-white text-gray-500">Browse Candidates</a></li>
              <li><a href="#employers-dashboard" className="hover:text-white text-gray-500">Employers Dashboard</a></li>
              <li><a href="#applications" className="hover:text-white" text-gray-500>Applications</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2024 MyJob - Job Portal. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#facebook" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#youtube" className="hover:text-white"><i className="fab fa-youtube"></i></a>
            <a href="#instagram" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#twitter" className="hover:text-white"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
