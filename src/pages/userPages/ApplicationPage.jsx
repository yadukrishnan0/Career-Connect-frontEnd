import React from "react";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "../../components/applyForm/ApplicationForm";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../../instence/axiosinstance";

function ApplicationPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('jobId');

  const initialValues = {
    education: "f",
    experience: "0-1",
    company: "fff",
    location: "ff",
    skill: [{ skill: "f" }],
    language: [{ language: "ff" }],
    
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    values.jobId =jobId
    const formData = new FormData();
   const token = localStorage.getItem('user')
    for (const key in values) {
      if (key === 'resume') {
        formData.append(key, values[key]);
      } else {
        formData.append(key, JSON.stringify(values[key]));
      }
    }
  const response = await axiosInstance.post('/application',formData,
    {
      headers:{
    'Content-Type' :'multipart/form-data',
    'Authorization': `Bearer ${token}`
  }}
)
   
  };
  

  return (
    <div className="overflow-y-auto w-full h-full">
      <ApplicationForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ApplicationPage;
