import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from "@mui/icons-material/Logout";
import VerifiedIcon from '@mui/icons-material/Verified';
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="sidebar bg-customGray h-screen w-[50px] md:w-[230px] flex flex-col justify-between">
        <div className="first flex flex-col gap-3 mt-11">
      <Link to='/admin/companyverification'>
        <div className="flex gap-2  h-12  items-center hover:bg-gray-300 p-3">
            < VerifiedIcon />
            <p className="hidden md:flex">Verification</p>
          </div>
      </Link>
          <div className="flex gap-2  h-12  items-center hover:bg-gray-300 p-3">
            <ApartmentIcon />
            <p className="hidden md:flex">Companys</p>
          </div>

          <div className="flex gap-2  h-12  items-center hover:bg-gray-300 p-3">
            <FaUser />
            <p className="hidden md:flex">Employee</p>
          </div>

        </div>

        <div className="second flex flex-col gap-4 mb-7">
          <div className="flex gap-2  h-12  items-center hover:bg-gray-300 p-3">
            <AccountBoxIcon />
            <p className="hidden md:flex">Profile</p>
          </div>

          <div className="flex gap-2  h-12  items-center hover:bg-gray-300 p-3">
            <LogoutIcon />
            <p className="hidden md:flex">Logout</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
