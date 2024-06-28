import React, { useState } from "react";
import loginImage from "../../assets/Files-sent-bro.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Password } from "@mui/icons-material";
import Svalidation from "../../utilities/Auth";
import axiosInstance from "../../instence/axiosinstance";
import { useNavigate } from "react-router-dom";
function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    error: "",
  });
  const navigate = useNavigate();

  const hanldeChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "email":
        if (formData.email.length > 0) {
          Svalidation.emailValidation(value)
            ? setError({ ...setError, email: "" })
            : setError({ ...setError, email: "invalid email format" });
        } else {
          setError({ ...setError, email: " " });
        }

        break;
    }
  };

  const hanldeBlur = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        if (formData.email.length > 0) {
          Svalidation.emailValidation(value)
            ? setError({ ...setError, email: "" })
            : setError({ ...setError, email: "invalid email format" });
        } else {
          setError({ ...setError, email: " " });
        }

        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      setError((prevError) => ({
        ...prevError,
        error: "Please fill the form",
      }));
      setTimeout(() => {
        setError((prevError) => ({ ...prevError, error: "" }));
      }, 2000);
    } else if (error.email || error.error) {
      setError((prevError) => ({
        ...prevError,
        error: "Entered details are invalid",
      }));
    } else {
      try {
        const response = await axiosInstance.post("/login", formData);

        const role = response?.data?.role || null //checking role
        const token = response?.data?.token;// jwt token
        const otp = response?.data?.otp || true
if(!otp){
   return navigate('/otp')
  }
        if (response.status == 200) {
          role === "company" ? localStorage.setItem("jwt", token):localStorage.setItem("user",token); //if user login success the the jwt token will be store to localstorage
          role === "company" ? navigate("/company/overview") : navigate("/");
        }
      } catch (err) {
        if (err.response) {
          const Errmsg = err.response?.data?.message;
          setError((prevError) => ({ ...prevError, error: Errmsg }));

          setTimeout(() => {
            setError((prevError) => ({ ...prevError, error: "" }));
          }, 4000);
        }
      }
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex  h-[500px]  p-8 ">
          <div className="right_div flex-1 flex flex-col justify-center   gap-3 ">
            <div className="flex w-full flex-col justify-center">
              <h1 className="text-[1.5rem] font-medium">Sign in</h1>
              <Link to={"/signup"}>
                <h1 className="text-blue-400">Create account ? signup</h1>
              </Link>
            </div>

            <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
              <p className="text-red-600">{error.email}</p>
              <input
                type="email"
                name="email"
                className="px-3  rounded-md shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Email"
                value={formData.email}
                onChange={hanldeChange}
                onBlur={hanldeBlur}
              />

              <input
                type="password"
                name="password"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10 rounded-md"
                placeholder="password"
                value={formData.password}
                onChange={hanldeChange}
              />
              <button
                type="submit"
                className="px-3 shadow-sm border border-[#00000015] outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
              >
                Login
                <FaArrowRightLong />
              </button>
              <p className="text-red-600">{error.error}</p>
              <h1 className="text-blue-400">forgot password?</h1>
            </form>
          </div>

          <div className="left_div flex-1 hidden md:flex ">
            <img
              src={loginImage}
              alt=""
              className="w-full p-10 object-fill h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
