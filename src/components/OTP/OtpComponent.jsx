import React, { useState } from "react";
import Otpimg from "../../assets/otp.jpg";

function OtpComponent({ handleSubmit }) {
  const [inputs, setInputs] = useState(["", "", "", ""]);

  const handleKeyDown = (e, index) => {
    if (
      !/^[0-9]$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }
    if (e.key === "Backspace") {
      if (index > 0 && !inputs[index]) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index] = e.target.value;
    setInputs(newInputs);
    if (e.target.value && index < inputs.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e, inputs);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex shadow-md h-[500px]">
          <div className="right_div flex-1 flex flex-col  items-center justify-center gap-3">
            <div className="flex w-full justify-center flex-col items-center">
              <h1 className="text-[1.5rem] font-thin">OTP VERIFICATION</h1>
              <h1>SEND YOUR EMAIL</h1>
            </div>
            <form className="flex flex-col gap-4 justify-center items-center" onSubmit={onSubmit}>
              <div className="flex gap-6 justify-center items-center">
                {inputs.map((value, index) => (
                  <input
                    key={index}
                    type="number"
                    name={index}
                    id={`otp-input-${index}`}
                    value={value}
                    maxLength="1"
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onChange={(e) => handleChange(e, index)}
                    className="px-3 shadow-sm border rounded-md border-[#00000015] focus:border-blue-600 outline-none w-14 h-10  "
                  />
                ))}
              </div>
              <button
                type="submit"
                className="px-3 shadow-sm border border-[#00000015] outline-none w-56 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
              >
                Submit
              </button>
              
            </form>
          </div>
          <div className="left_div flex-1 hidden md:flex ">
            <img
              src={Otpimg}
              alt=""
              className="w-full p-10 object-fill h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpComponent;
