import React, { useState } from "react";
import loginImg from "../../assets/PngItem_6631012.png";
import Select from "react-select";
import Signupform from "../../components/shared/signupform";
function Signup() {

  //this is change the employee option and change the form 
  const [Nameplaceholder, setPlaceholder] = useState("Employee");

  //change the opion values
  const options = [
    { value: "Employee", label: "Employee" },
    { value: "Company", label: "Company" },
  ];

 // initial values send to the signupform component
  const initialValues = {
    Name: "",
    Companyname: "",
    email: "",
    phone: "",
    password: "",
    ConfirmPassword: "",
  };

  

  const changing = ({ value }) => {
    setPlaceholder(value);
  };

  const hanldeSumbit =(value)=>{
     console.log(value)
  }

  return (
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
          <Signupform Nameplaceholder={Nameplaceholder} initialValues={initialValues} hanldeSumbit={hanldeSumbit} />
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
  );
}

export default Signup;
