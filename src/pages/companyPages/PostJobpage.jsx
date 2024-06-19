import React from 'react'
import PostJob from '../../components/postJob/PostJob'
import axiosInstance from "../../instence/axiosinstance";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function PostJobpage() {
  const navigate =useNavigate()
const initialValues = {
  jobTitle: '',
  tags: '',
  jobrole: '',
  minisalary: '',
  maxsalary: '',
  salaryType: '',
  education: '',
  experience: '',
  jobType: '',
  Works_Space_Type: '',
  Vacancies: '',
  date: '',
};
const handleSubmit = async(values, { setSubmitting, resetForm })=>{
const jobData =values;
const token = localStorage.getItem('jwt');

try{

const response = await axiosInstance.post('/company/jobpost', jobData, {
  headers: {
    'Authorization': `Bearer ${token}`  // Add the token here
  }
});
if(response.status ==201){
  resetForm(true)
}
}catch(err){
  console.log(err);
}
setSubmitting(false)
}


  return (
    <>
    <div className='overflow-y-auto w-full h-full '>
    <PostJob initialValues={initialValues} onSubmit={handleSubmit}/>
    </div>
    
    </>
  )
}

export default PostJobpage