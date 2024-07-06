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
import ComplteProfile from "../pages/userPages/ComplteProfile";
import PrivateRoute from "./PrivateRoute";
import ApplicationPage from "../pages/userPages/ApplicationPage";
import Completejobapplication from "../pages/userPages/Completejobapplication";
import Chat from "../pages/userPages/Chat";
import How from "../pages/userPages/How";
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
        <Route path="/jobdetail" element={<JobdetailsPage />} />
        <Route path="/filterjob" element={<FilterJob />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ComplteProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/application"
          element={
            <PrivateRoute>
              <ApplicationPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/completed"
          element={
            <PrivateRoute>
              <Completejobapplication />
            </PrivateRoute>
          }
        />

        <Route path="/chat" element={<Chat />} /> 
        {/* <Route path="/userprofile" element={<How/>}/> */}
      </Route>
    </Routes>
  );
};

export default UserRouter;
