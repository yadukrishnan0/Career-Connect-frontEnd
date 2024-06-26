import React from "react";
import FilterComponent from "../../components/filter/FilterComponent";
import JobListing from "../../components/JobListing/JobListing";
import { useEffect, useState } from "react";
import axiosInstance from "../../instence/axiosinstance";
import ScrollToTop from "../../utilities/ScrollToTop";

function FilterJob() {
  ScrollToTop();
  const [jobs, setJobs] = useState([]);
  const[filtermodal,setFiltermodal]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/");
        const data = response?.data?.jobData;
        setJobs(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
    <div className=" w-full flex justify-center">
      <div className="w-full flex flex-col gap-4 p-2">
        {jobs.map((val) => (
          <JobListing key={val._id} jobs={val} /> // Pass the job data as props if needed
        ))}
      </div>

  <div className={filtermodal ? 'flex' : 'hidden'}>
  <FilterComponent />
</div>

</div>

</>
  );
}

export default FilterJob;
