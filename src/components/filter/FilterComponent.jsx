import React, { useState } from 'react';

const FilterComponent = () => {
  // State variables for each filter category
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [jobType, setJobType] = useState([]);
  const [education, setEducation] = useState([]);
  const [jobLevel, setJobLevel] = useState('');

  // Handle change for radio buttons (experience, salary, job level)
  const handleRadioChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Handle change for checkboxes (job type, education)
  const handleCheckboxChange = (setter, state) => (event) => {
    const value = event.target.value;
    if (state.includes(value)) {
      setter(state.filter(item => item !== value));
    } else {
      setter([...state, value]);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const filters = {
      experience,
      salary,
      jobType,
      education,
      jobLevel,
    };
    console.log(filters);
    // Do something with the filters (e.g., make an API call)
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto absolute">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-gray-700">Experience</label>
          <div className="mt-2">
            {['Freshers', '1 - 2 Years', '2 - 4 Years', '4 - 6 Years', '6 - 8 Years', '8 - 10 Years', '10 - 15 Years', '15+ Years'].map((experienceOption, index) => (
              <div key={index} className="flex items-center mt-1">
                <input 
                  type="radio" 
                  name="experience" 
                  value={experienceOption}
                  checked={experience === experienceOption}
                  onChange={handleRadioChange(setExperience)}
                  className="h-4 w-4 text-blue-600" 
                />
                <label className="ml-2 text-gray-700">{experienceOption}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Salary</label>
          <div className="mt-2">
            {['$50 - $1000', '$1000 - $2000', '$3000 - $4000', '$4000 - $6000', '$6000 - $8000', '$8000 - $10000', '$10000 - $15000', '$15000+'].map((salaryOption, index) => (
              <div key={index} className="flex items-center mt-1">
                <input 
                  type="radio" 
                  name="salary" 
                  value={salaryOption}
                  checked={salary === salaryOption}
                  onChange={handleRadioChange(setSalary)}
                  className="h-4 w-4 text-blue-600" 
                />
                <label className="ml-2 text-gray-700">{salaryOption}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Job Type</label>
          <div className="mt-2">
            {['Full Time', 'Part Time', 'Internship', 'Remote', 'Temporary', 'Contract Base'].map((type, index) => (
              <div key={index} className="flex items-center mt-1">
                <input 
                  type="checkbox" 
                  value={type}
                  checked={jobType.includes(type)}
                  onChange={handleCheckboxChange(setJobType, jobType)}
                  className="h-4 w-4 text-blue-600" 
                />
                <label className="ml-2 text-gray-700">{type}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Education</label>
          <div className="mt-2">
            {['High School', 'Intermediate', 'Graduation', 'Master Degree', 'Bachelor Degree'].map((educationOption, index) => (
              <div key={index} className="flex items-center mt-1">
                <input 
                  type="checkbox" 
                  value={educationOption}
                  checked={education.includes(educationOption)}
                  onChange={handleCheckboxChange(setEducation, education)}
                  className="h-4 w-4 text-blue-600" 
                />
                <label className="ml-2 text-gray-700">{educationOption}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Job Level</label>
          <div className="mt-2">
            {['Entry Level', 'Mid Level', 'Expert Level'].map((level, index) => (
              <div key={index} className="flex items-center mt-1">
                <input 
                  type="radio" 
                  name="jobLevel" 
                  value={level}
                  checked={jobLevel === level}
                  onChange={handleRadioChange(setJobLevel)}
                  className="h-4 w-4 text-blue-600" 
                />
                <label className="ml-2 text-gray-700">{level}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">Find Job</button>
      </div>
    </form>
  );
};

export default FilterComponent;
