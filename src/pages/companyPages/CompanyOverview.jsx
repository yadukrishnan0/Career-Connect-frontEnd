import React, { useState } from "react";
import JobTable from "../../components/JobTable/JobTable";
import JobCard from "../../components/Cards/JobCard";

function CompanyOverview() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const array =[1,2,3,4,5,6,7,8,9,10,11]
  const handleClick =(index)=>{
    setActiveCardIndex(activeCardIndex === index ? null : index);
  }
  return (
    <div className=" w-full h-full overflow-y-auto">
      <div className=" w-full h-auto flex flex-col gap-2 p-3">
        <p className="font-bold">Hello instagram</p>    
        <p className="text-gray-400">
          Here is your daily activites and applications
        </p>
      </div>

      <div className="flex items-center justify-around p-4 border-b border-gray-200 bg-customGray">
        <div>
          <h3 className=" text-gray-500">JOBS</h3>
        </div>

        <span className="flex items-center text-gray-500 mr-4">Status</span>
        <span className="flex items-center text-gray-500 mr-4">Applications </span>
        <p>ACTIONS</p>
      </div>
       
      {array.map((val, i) => (
        <JobCard
          key={i}
          actions={activeCardIndex === i}
          handleClick={() => handleClick(i)}
        />
      ))}

      
    </div>
  );
}

export default CompanyOverview;
