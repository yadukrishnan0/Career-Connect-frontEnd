import React from 'react';
import Microsoft from '../../assets/microsoft.webp'
import JobOverview from './JobOverview';
import CompanyOverview from './CompanyOverview';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const JobDetails = ({jobdata}) => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 flex justify-between items-center border-b">
          <div className="flex items-center">
            <img src={`http://localhost:8086/assets/${jobdata?.companyDocuments?.companylogo}`} alt="Company Logo" className="w-16 h-16 rounded-full mr-4 object-cover"/>
            <div>
              <h1 className="text-2xl font-bold">
                {jobdata?.jobTitle}
                
              </h1>
              <p className="text-blue-500">{jobdata?.jobType}</p>
              <div className="text-gray-600">
                
                <p><a href="tel:+14065550120">{jobdata?.companyId?.phone}</a></p>
                <p><a href="mailto:career@instagram.com">{jobdata?.companyId?.email}</a></p>
              </div>
            </div>
          </div>
          
          <div className="text-right flex gap-4 items-center ">
          <BookmarkIcon className='text-gray-400 '/>  
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
            {/* <p className="text-gray-600 mt-2">Job expire in: <span className="text-red-500">June 30, 2021</span></p> */}
          </div>
        </div>
        {/* Main Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Job Description and Responsibilities */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Job Description</h2>
            <p className="text-gray-600 mb-4">
              Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod id at magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.
            </p>
            <p className="text-gray-600 mb-4">
              Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet eget lobortis. Etiam in neque sit amet orci interdum tincidunt.
            </p>
            <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
  {jobdata.requirements.map((val)=>(


                <li>{val.requirement}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
  {jobdata.skill.map((val)=>(


                <li>{val.skill}</li>
              ))}
            </ul>

          </div>
          {/* Job Overview */}
          <div className='flex flex-col gap-6'>
          
            <JobOverview jobdata={jobdata}/>
           <CompanyOverview jobdata={jobdata}/> 
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
