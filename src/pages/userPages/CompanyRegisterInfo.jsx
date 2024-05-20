import React from "react";
import CompanyImg from "../../assets/company.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
function CompanyRegisterInfo() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex shadow-md h-[500px]">
          <div className="right_div flex-1 flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-around">
              <h1 className="text-[1.5rem] font-thin">Register</h1>
            </div>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="Registration_Number"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder=
                 "Registration Number"
                
              />

              <input
                type="text"
                name="Gst_Number"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Gst Number"
              />
              <input
                type="text"
                name="Sector"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Sector"
              />
              
              <input
                type="text"
                name="company_address"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="company address"
              />
              <button
                type="submit"
                className="px-3 shadow-sm border border-[#00000015] outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
              >
                Register
                <FaArrowRightLong />
              </button>
              <h1 className="text-blue-400">Already have an account? Login</h1>
            </form>
          </div>

          <div className="left_div flex-1 hidden md:flex ">
            <img
              src={CompanyImg}
              alt=""
              className="w-full p-10 object-fill h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyRegisterInfo;
