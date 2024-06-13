import React from "react";
import { Outlet } from "react-router-dom";
import CompanyHeader from "../components/CompanyHeader/CompanyHeader";
import CompanySidebar from "../components/CompanySidebar/CompanySidebar";
function CompanyLayout() {
  return (
    <div className="min-h-screen">
   <CompanyHeader/>
   <div className="flex h-[calc(100vh-120px)]">

    <div className=" border-2 h-full "><CompanySidebar/></div>
    <div className="w-full"><Outlet/></div>

   </div>
   </div>
  
  )
}

export default CompanyLayout



 