import React from "react";
import Button from "../shared/Button";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
function Header() {
  return (
    <>
      <div className="w-full bg-customGray flex justify-between items-center h-14 p-4">
        <div>
          <h1 className="font-medium text-[1.1rem]">Carrer-Connect</h1>
        </div>
        <div className=" sm:flex gap-14 hidden ">
          <h1 className="hover:border-b-customBlue hover:border-b-2 hover:text-customBlue ">
            Home
          </h1>
          <h1 className="hover:border-b-customBlue hover:border-b-2 hover:text-customBlue">
            Jobs
          </h1>
          <h1 className="hover:border-b-customBlue hover:border-b-2 hover:text-customBlue">
            Companies
          </h1>
          <h1 className="hover:border-b-customBlue hover:border-b-2 hover:text-customBlue">
            Customer Supports
          </h1>
        </div>

        <div className="hidden sm:flex">
          <Button childern="Sign in" />
        </div>
        <div className="flex sm:hidden">
          <CiMenuBurger />
        </div>
      </div>

      <div className=" flex justify-around p-2 ">
        <div className="text-white sm:flex hidden">jj</div>
        <div className="flex  border border-gray-300 rounded-lg shadow-sm p-2 md:w-1/4">
          <input
            type="text"
            placeholder="Job title, keyword, company"
            className="flex-grow ml-2 outline-none text-sm text-gray-700"
          />
          <button className="ml-2 text-gray-500 focus:outline-none">
            <IoSearchOutline />
          </button>
        </div>

        <div className="sm:flex  hidden items-center justify-center gap-3">
          <IoNotificationsOutline />
          <FaRegUser />
        </div>
      </div>
    </>
  );
}

export default Header;
