import React, { useEffect, useState } from 'react'
import JobDetails from '../../components/jobDetails/JobDetails'
import ScrollToTop from '../../utilities/ScrollToTop'
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '../../instence/axiosinstance';
import { useNavigate } from 'react-router-dom';
function JobdetailsPage() {
    ScrollToTop()
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

   const [jobdata,setJobdata] =useState({})
   const navigate =useNavigate()
    useEffect(()=>{
        const fetchData = async()=>{
            try{
             const response = await axiosInstance.get(`/jobdetail?id=${id}`)
             const job =response?.data?.jobsObject;
             setJobdata(job)
             
            }catch(err){
               if(err.response){
                navigate('/fdjf')
               }
            }
        }
        fetchData()
    },[])
  return (
   <>
   <JobDetails/>
   </>
  )
}
export default JobdetailsPage