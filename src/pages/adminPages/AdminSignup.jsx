import React, { useState } from "react";
import adminloginImg from "../../assets/admin.svg";
import { Link } from "react-router-dom";
import Svalidation from "../../utilities/Auth";
import axiosInstance from "../../instence/axiosinstance";
import { useNavigate } from "react-router-dom";
function AdminSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    ConfirmPassword: "",
    secretCode:""
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    ConfirmPassword: "",
    error: "",
  });
  const navigate =useNavigate()

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    switch (name) {
      case "email":
        if (formData.email.length > 0) {
          Svalidation.emailValidation(formData.email)
            ? setError({ ...setError, email: "" })
            : setError({ ...setError, email: "invalid email" });
        } else {
          setError({ ...setError, email: "" });
        }

        break;

      case "password":
        if (formData.password.length > 0) {
          Svalidation.passwordValidation(formData.password)
            ? setError({ ...setError, password: "" })
            : setError({ ...setError, password: "invalid password" });
        } else {
          setError({ ...setError, password: "" });
        }
        break;

      case "ConfirmPassword":
        if (formData.password.length > 0) {
          Svalidation.ConfirmPassword(
            formData.password,
            formData.ConfirmPassword
          )
            ? setError({ ...setError, ConfirmPassword: "" })
            : setError({
                ...setError,
                ConfirmPassword: "password is not match",
              });
        } else {
          setError({ ...setError, ConfirmPassword: "" });
        }

        break;

      case "phone":
        formData.phone.length == 9
          ? console.log("phone number is correct")
          : console.log("phone number is error");
        break;

      default:
        break;
    }
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      formData.name == "" ||
      formData.ConfirmPassword == "" ||
      formData.email == "" ||
      formData.password == "" ||
      formData.phone == "" ||
      formData.secretCode ==''
    ) {
      setError({ ...error, error: "Please fill the form" });
      setTimeout(() => {
        setError({ ...error, error: " " });
      }, 2000);
    } else if (error.ConfirmPassword || error.email || error.password) {
      setError({ ...error, error: "enter correct format" });
      setTimeout(() => {
        setError({ ...error, error: " " });
      }, 2000);
    }else{
      try{
         const response = await axiosInstance.post('/admin/signup',formData);
         if(response.status ==201){
           navigate('/admin/otp')
         }
      }catch(err){
        setError({ ...error, error: err.response?.data?.message || "An error occurred" });
        setTimeout(() => {
          setError({ ...error, error: "" });
        }, 4000);
      }
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex shadow-md h-[500px]">
          <div className="right_div flex-1 flex flex-col justify-center items-center ">
            <div className="flex w-full justify-around">
              <h1 className="text-[1.5rem] font-thin">Admin account</h1>
            </div>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <p>{error.name}</p>
              <input
                type="text"
                name="name"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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

              <input
                type="text"
                name="phone"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               <input
                type="text"
                name="secretCode"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Secretcode"
                value={formData.secretCode}
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
              </button>

              <Link to={"/login"}>
                <h1 className="text-blue-400">
                  Already have an account? Login
                </h1>
              </Link>
              <p className="text-red-600">{error.error}</p>
            </form>
          </div>
          <div className="left_div flex-1 hidden md:flex ">
            <img
              src={adminloginImg}
              alt=""
              className="w-full p-10 object-fill h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSignup;
