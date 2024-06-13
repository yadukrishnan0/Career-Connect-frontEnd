import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";

function Signupform({
  Nameplaceholder,
  handleBlur,
  handleChange,
  handleSubmit,
  formData,
  error,
}) {
  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      {Nameplaceholder === "Employee" && (
          <input
            type="text"
            name="name"
            className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}

{Nameplaceholder === "Company" && (
          <input
            type="text"
            name="Companyname"
            className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
            placeholder="Company Name"
            value={formData.Companyname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}

        <p className="text-red-600">{error.email}</p>
        <input
          type="email"
          name="email"
          className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className="text-red-600">{error.phone}</p>
        <input
          type="text"
          name="phone"
          className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className="text-red-600">{error.password}</p>
        <input
          type="password"
          name="password"
          className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className="text-red-600">{error.ConfirmPassword}</p>
        <input
          type="password"
          name="ConfirmPassword"
          className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
          placeholder="Confirm Password"
          value={formData.ConfirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button
          type="submit"
          className="px-3 shadow-sm border border-[#00000015] outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
        >
          Create Account
          <FaArrowRightLong />
        </button>
        <p className="text-red-600">{error.error}</p>
        <Link to={"/login"}>
          <h1 className="text-blue-400">Already have an account? Login</h1>
        </Link>
      </form>
    </>
  );
}

export default Signupform;
