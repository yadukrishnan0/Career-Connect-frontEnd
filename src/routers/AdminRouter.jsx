import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSignup from "../pages/adminPages/AdminSignup";
import AdminOtp from "../pages/adminPages/AdminOtp";
import AdminLogin from "../pages/adminPages/AdminLogin";
import AdminHome from "../pages/adminPages/AdminHome";
import AdminLayout from "../Layout/AdminLayout";
import Companyverification from "../pages/adminPages/Companyverification";
const AdminRouter = () => {
  return (
    <Routes>
      <Route path='/signup' element={<AdminSignup/>}/>
      <Route path='/otp' element={<AdminOtp/>}/>
      <Route path='/login' element={<AdminLogin/>}/>

      <Route path='/' element={<AdminLayout/>}>

      <Route path='/home' element={<AdminHome/>}/>
      <Route path='/companyverification' element={<Companyverification/>}/>
      
      </Route>

     
    
    </Routes>
  );
};

export default AdminRouter;
