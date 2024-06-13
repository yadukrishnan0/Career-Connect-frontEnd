import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyLayout from "../Layout/CompanyLayout";
import CompanyOverview from "../pages/companyPages/CompanyOverview";
import PostJobpage from "../pages/companyPages/PostJobpage";
function CompanyRouter() {
  return (
    <Routes>
      <Route path="/" element={<CompanyLayout/>}>

      <Route path="/overview" element={<CompanyOverview/>}/>
      <Route path="/postjob" element={<PostJobpage/>}/>
      
      </Route>
    </Routes>
  );
}

export default CompanyRouter;
