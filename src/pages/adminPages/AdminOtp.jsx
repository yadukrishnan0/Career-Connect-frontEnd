import React, { useState } from "react";
import OtpComponent from "../../components/OTP/OtpComponent";
import axiosInstance from "../../instence/axiosinstance";
import { useNavigate } from "react-router-dom";
function AdminOtp() {
  const[error,setError] =useState('')
  const navigate = useNavigate();
  const handleSubmit = async (e, values) => {
    e.preventDefault();

    const datas = {
      otp1: values[0],
      otp2: values[1],
      otp3: values[2],
      otp4: values[3],
    };
  
    try {
      const respones = await axiosInstance.post("/admin/otp", datas);
      if (respones.status == 200) {
       navigate('/admin/login')
      }
    } catch (err) {
      setError({ ...error, error: err.response?.data?.message || "An error occurred" });

    }
  };
  return (
    <>
      <OtpComponent handleSubmit={handleSubmit }  />
    </>
  );
}

export default AdminOtp;
