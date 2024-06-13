import React from "react";
import OtpComponent from "../../components/OTP/OtpComponent";
import axiosInstance from "../../instence/axiosinstance";
import { useNavigate } from "react-router-dom";
function SignupOtp() {
  const navigate = useNavigate();
  const handleSubmit = async (e, values) => {
    e.preventDefault();
    try {
      const datas = {
        otp1: values[0],
        otp2: values[1],
        otp3: values[2],
        otp4: values[3],
      };
      console.log(datas);
      try {
        const respones = await axiosInstance.post("/otpsignup", datas);
        if (respones.status == 200) {
          navigate(
            respones.data.role === "employee"
              ? "/login"
              : "/companyregisterInfo"
          );
        }
      } catch (err) {
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <OtpComponent handleSubmit={handleSubmit} />
    </>
  );
}

export default SignupOtp;
