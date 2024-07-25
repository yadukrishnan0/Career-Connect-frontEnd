import React, { useEffect, useState } from "react";
import JobDetails from "../../components/jobDetails/JobDetails";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../../instence/axiosinstance";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../utilities/ScrollToTop";

function JobdetailsPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [jobdata, setJobdata] = useState(null);
  const [myjobs, setMyjobs] = useState([]);

  const[btndisble,setBtndisble]=useState(true)

  const navigate = useNavigate();
  const token = localStorage.getItem("user");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/jobdetail?id=${id}`);
        const job = response?.data?.jobsObject;
        setJobdata(job);
        console.log(job)
      } catch (err) {
        if (err.response) {
          navigate("/fdjf");
        }
      }
    };
    fetchData();
  }, [id, navigate]);

  useEffect(() => {
    if (token) {
      const fetchMyjobs = async () => {
        try {
          const response = await axiosInstance.get("/applyjob");
          const applyjobsData = response.data.myjobData;
          setMyjobs(applyjobsData);

          if (response.status === 200) {
            const jobid = applyjobsData.jobs.filter((val) => val.jobId === id);
          jobid.length == 0 ? setBtndisble(true) :setBtndisble(false)
          }
        } catch (err) {
          console.error(err);
        }
      };
      fetchMyjobs();
    }
  }, [token, id]);

  const applyClick = (jobid) => {
    navigate(`/application?jobId=${jobid}`);
  };

  return (
    <>
      <ScrollToTop />
      {jobdata ? (
        <JobDetails jobdata={jobdata} applyClick={applyClick} btndisble={btndisble} />
      ) : (
        <div>no job data</div>
      )}
    </>
  );
}

export default JobdetailsPage;
