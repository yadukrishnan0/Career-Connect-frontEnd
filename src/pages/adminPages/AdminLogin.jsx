import React from "react";
import AdminloginImage from "../../assets/adminlogin.avif";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
function AdminLogin() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex  h-[500px]  p-8 ">
          <div className="right_div flex-1 flex flex-col justify-center   gap-3 ">
            <div className="flex w-full flex-col justify-center">
              <h1 className="text-[1.5rem] font-medium">Admin Sign in</h1>
              <Link to={"/admin/signup"}>
                <h1 className="text-blue-400">Create account ? signup</h1>
              </Link>
            </div>

            <form className="flex flex-col gap-4 ">
              <input
                type="email"
                name="email"
                className="px-3  rounded-md shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Email"
              />

              <input
                type="password"
                name="password"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10 rounded-md"
                placeholder="password"
              />
              <button
                type="submit"
                className="px-3 shadow-sm border border-[#00000015] outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
              >
                Login
                <FaArrowRightLong />
              </button>
              <h1 className="text-blue-400">forgot password?</h1>
            </form>
          </div>

          <div className="left_div flex-1 hidden md:flex ">
            <img
              src={AdminloginImage}
              alt=""
              className="w-full p-10 object-fill h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
