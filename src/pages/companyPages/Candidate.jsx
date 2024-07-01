import React, { useEffect, useState } from 'react';
import ApplicationCard from '../../components/Cards/ApplicationCard';
import axiosInstance from '../../instence/axiosinstance';
import { useSearchParams } from 'react-router-dom';

const Candidate = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('jobId');
  const [CanditesData, setCanditesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/company/viewCandidates?jobId=${jobId}`);
        if (response.status === 200) {
          const data = response.data.CanditesData.applications;
          setCanditesData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [jobId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      <div className="flex">
        <div className="w-1/2 pr-2">
          <h2 className="text-xl font-semibold mb-4">All Applications ({CanditesData.length})</h2>
          {CanditesData.filter(applicant => applicant.userId).map((applicant, index) => (
            <ApplicationCard key={index} applicant={applicant} />
          ))}
        </div>

        <div className="w-1/2 pl-2">
        <h2 className="text-xl font-semibold mb-4">All Applications ({CanditesData.length})</h2>
          {CanditesData.filter(applicant => applicant.userId).map((applicant, index) => (
            <ApplicationCard key={index} applicant={applicant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidate;
