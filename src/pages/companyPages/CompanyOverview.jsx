import React, { useEffect, useState } from "react";
import JobCard from "../../components/Cards/JobCard";
import axiosInstance from "../../instence/axiosinstance";

function CompanyOverview() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const array = [1]
  const[applicationData,setApplicationdata]=useState([])
  const handleClick = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwt')
      try {
        const response = await axiosInstance.get("/company/application", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data =response.data.jobapplications;
        console.log(data)
      if(response.status==200){
        setApplicationdata(data);
  
      }
      } catch (err) {}
    };
    fetchData();
  },[]);

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
        <span className="flex items-center text-gray-500 mr-4">
          Applications{" "}
        </span>
        <p>ACTIONS</p>
      </div>

      {applicationData.map((val, i) => (
        <JobCard
          key={i}
          actions={activeCardIndex === i}
          handleClick={() => handleClick(i)}
          jobData={val}
        />
      ))}
    </div>
  );
}

export default CompanyOverview;
