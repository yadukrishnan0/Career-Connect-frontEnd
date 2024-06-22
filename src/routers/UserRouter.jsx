import React from "react";
import { Route, Routes } from "react-router-dom";

import UserHome from "../pages/userPages/UserHome";
import Signup from "../pages/userPages/Signup";
import SignupOtp from "../pages/userPages/SignupOtp";
import CompanyRegisterInfo from "../pages/userPages/CompanyRegisterInfo";
import UserLogin from "../pages/userPages/UserLogin";
import Userlayout from "../Layout/Userlayout";
import Error from "../pages/sharedPages/Error";
import JobdetailsPage from "../pages/userPages/JobdetailsPage";
import FilterJob from "../pages/userPages/FilterJob";
const UserRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<SignupOtp />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/companyregisterInfo" element={<CompanyRegisterInfo />} />
      <Route path="/" element={<Userlayout />}>
        <Route path="/" element={<UserHome />} />
        <Route path="/*" element={<Error />} />
        <Route path="/jobdetail" element={<JobdetailsPage/>} />
        <Route path="/filterjob" element={<FilterJob/>} />
      </Route>
    </Routes>
  );
};

export default UserRouter;
