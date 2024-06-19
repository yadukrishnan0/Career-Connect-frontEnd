import React from 'react';
import Microsoft from '../../assets/microsoft.webp'
import JobOverview from './JobOverview';
const JobDetails = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 flex justify-between items-center border-b">
          <div className="flex items-center">
            <img src={Microsoft} alt="Company Logo" className="w-16 h-16 rounded-full mr-4"/>
            <div>
              <h1 className="text-2xl font-bold">
                Senior UX Designer 
                <span className="text-red-500 ml-2">Featured</span>
              </h1>
              <p className="text-blue-500">Full Time</p>
              <div className="text-gray-600">
                <a href="https://instagram.com" className="block">https://instagram.com</a>
                <p><a href="tel:+14065550120">(406) 555-0120</a></p>
                <p><a href="mailto:career@instagram.com">career@instagram.com</a></p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
            <p className="text-gray-600 mt-2">Job expire in: <span className="text-red-500">June 30, 2021</span></p>
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
              <li>Quisque semper gravida est et consectetur.</li>
              <li>Curabitur blandit lorem velit, vitae pretium leo placerat eget.</li>
              <li>Morbi mattis in ipsum ac tempus.</li>
              <li>Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.</li>
              <li>Vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.</li>
              <li>Lobortis vel lectus. Nulla at risus ut diam.</li>
              <li>Commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.</li>
              <li>Odio metus posuere lorem, id condimentum erat velit nec neque.</li>
              <li>Dui sodales ut. Curabitur tempus augue.</li>
            </ul>
            
          </div>
          {/* Job Overview */}
          <div>
          
            <JobOverview/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
