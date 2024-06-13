import React from "react";
import { BsStack } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { PiSuitcaseSimple } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
function CompanySidebar() {
  return (
    <>
      <div className="w-64   h-full  border-customGray md:flex  flex-col justify-between hidden">
        <ul className="top p-4 flex flex-col gap-2">
        <Link to={'/company/overview'}>
          <li className="w-full cursor-pointer  h-10 flex items-center gap-4">
            <BsStack className="text-[1.3rem]" />
            Overview
          </li>
          </Link> 
          <li className="w-full cursor-pointer  h-10 flex items-center gap-4">
            <CgProfile className="text-[1.3rem]" />
            Company Profile
          </li>
          <Link to={'/company/postjob'}>
          <li className="w-full cursor-pointer  h-10 flex items-center gap-4">
            <CiCirclePlus className="text-[1.3rem]" />
            Post Job
          </li>
  </Link>          <li className="w-full cursor-pointer  h-10 flex items-center gap-4">
            <PiSuitcaseSimple className="text-[1.3rem]" />
            Jobs
          </li>

          <li className="w-full cursor-pointer  h-10 flex items-center gap-4">
            <CiSettings className="text-[1.3rem]" />
            Settings
          </li>
        </ul>

        <div className="bottom flex p-4">
          <div className="w-full  h-10 flex items-center gap-4">
            <IoIosLogOut />
            <button className="text-gray-400">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanySidebar;
