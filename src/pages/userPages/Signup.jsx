import React from "react";
import loginImg from "../../assets/PngItem_6631012.png";
import Select from 'react-select';
import { FaArrowRightLong } from "react-icons/fa6";
function Signup() {
  const options = [
    { value: 'Employee', label: 'Employee' },
    { value: 'Company', label: 'Company' },
  ];
  
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="flex shadow-md h-[500px]">
        <div className="right_div flex-1 flex flex-col justify-center items-center gap-3">
          <div className="flex w-full justify-around">
            <h1 className="text-[1.5rem] font-thin">Create account</h1>
            <Select options={options}  defaultValue={options[0]} />
          </div>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              className="px-3 shadow-sm border border-[#00000015]   focus:border-blue-600 outline-none w-96 h-10 "
              placeholder="Name"
            />
            <input
              type="text"
              name="email"
              className="px-3 shadow-sm border border-[#00000015]   focus:border-blue-600 outline-none w-96 h-10 "
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              className="px-3 shadow-sm border border-[#00000015]  focus:border-blue-600 outline-none w-96 h-10 "
              placeholder="Phone"
            />
            <input
              type="text"
              name="password"
              className="px-3 shadow-sm border border-[#00000015]   focus:border-blue-600 outline-none w-96 h-10 "
              placeholder="Password"
            />
  
            <input
              type="text"
              name="ConfirmPassword"
              className="px-3 shadow-sm border border-[#00000015]   focus:border-blue-600 outline-none w-96 h-10 "
              placeholder="Confirm Password"
            />
            <button className="px-3 shadow-sm border border-[#00000015]   outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2">
              Create Account<FaArrowRightLong/>
            </button>
            <h1 className="text-blue-400">Already have account? login</h1>
          </form>
        </div>

        <div className="left_div flex-1 hidden md:flex ">
          <img src={loginImg} alt="" className="w-full p-10 object-fill h-full" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
