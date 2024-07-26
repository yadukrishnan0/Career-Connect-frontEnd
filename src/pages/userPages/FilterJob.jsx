import React from "react";
import FilterComponent from "../../components/filter/FilterComponent";
import JobListing from "../../components/JobListing/JobListing";
import { useEffect, useState } from "react";
import axiosInstance from "../../instence/axiosinstance";
import ScrollToTop from "../../utilities/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Features/jobDataslice";
function FilterJob() {
  ScrollToTop();
  const[filtermodal,setFiltermodal]=useState(false);


  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobdata.Jobdata);
  const status = useSelector((state) => state.jobdata.status);
  const error = useSelector((state) => state.jobdata.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [dispatch, status]);



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
