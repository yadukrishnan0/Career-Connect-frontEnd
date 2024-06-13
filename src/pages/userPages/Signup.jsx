import React, { useState } from "react";
import loginImg from "../../assets/PngItem_6631012.png";
import Select from "react-select";
import Signupform from "../../components/shared/signupform";
import Svalidation from "../../utilities/Auth";
import axiosInstance from "../../instence/axiosinstance";
import { useNavigate } from 'react-router-dom';
function Signup() {
  //change placeholders
  const [Nameplaceholder, setPlaceholder] = useState("Employee");
const navigate =useNavigate()
  const [error, setError] = useState({
    name: "",
    Companyname: "",
    email: "",
    phone: "",
    password: "",
    ConfirmPassword: "",
    error: "",
  });

  const options = [
    { value: "Employee", label: "Employee" },
    { value: "Company", label: "Company" },
  ];

  //form data
  const [formData, setformData] = useState({
    name: "",
    Companyname: "",
    email: "",
    phone: "",
    password: "",
    ConfirmPassword: "",
  });

  // change value of placehloder in signup form
  const changing = ({ value }) => {
    setPlaceholder(value);
    setformData((prevData) => ({
      ...prevData,
      name: value === "Employee" ? "" : prevData.name,
      Companyname: value === "Company" ? "" : prevData.Companyname,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  //onblur validation//////
  const validatiobBlur = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        console.log("");
        break;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('hello')
    try {
      if (Nameplaceholder === "Employee") {
        const data = formData;
        delete data.Companyname;
      }

      if (Nameplaceholder === "Company") {
        const data = formData;
        delete data.name;
      }

      if (
        (Nameplaceholder === "Employee" && formData.name === "") ||
        (Nameplaceholder === "Company" && formData.Companyname === "") ||
        formData.email === "" ||
        formData.phone === "" ||
        formData.password === "" ||
        formData.ConfirmPassword === ""
      ) {
        setError((prevError) => ({
          ...prevError,
          error: "PLEASE FILL THE FORM",
        }));
        setTimeout(() => {
          setError((prevError) => ({ ...prevError, error: "" }));
        }, 2000);
      } else {
        const datas = formData;
        try {
          const response = await axiosInstance.post("/signup", datas);
       
        if (response.status == 201) {
          navigate('/otp')
        }
        } catch (error) {
          if(error.response){
            const{data}=error.response;
            setError((prevError) => ({
              ...prevError,
              error:data.message,
            }));
            setTimeout(() => {
              setError((prevError) => ({ ...prevError, error: "" }));
            }, 3000);

          }
        }
      }
    } catch (err) {
      console.log("handlesumbit error", err);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex shadow-md h-[500px]">
          <div className="right_div flex-1 flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-around">
              <h1 className="text-[1.5rem] font-thin">Create account</h1>
              <Select
                options={options}
                defaultValue={options[0]}
                onChange={changing}
              />
            </div>
            <Signupform
              Nameplaceholder={Nameplaceholder}
              formData={formData}
              error={error}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleBlur={validatiobBlur}
            />
          </div>
          <div className="left_div flex-1 hidden md:flex ">
            <img
              src={loginImg}
              alt=""
              className="w-full p-10 object-fill h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
