import React from "react";
import Otpimg from "../../assets/otp.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
function OtpComponent() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex shadow-md h-[500px]">
          <div className="right_div flex-1 flex flex-col  items-center justify-center gap-3">
            <div className="flex w-full justify-center flex-col items-center">
              <h1 className="text-[1.5rem] font-thin">OTP VERIFICATION</h1>
              <h1>SEND YOUR EMAIL</h1>
            </div>
            <Formik>
              {() => (
                <Form className="flex flex-col  gap-4 justify-center items-center">
                  <>
                    <div className="flex gap-6 justify-center items-center  ">
                      <Field
                        type="email"
                        name="email"
                        className="px-3 shadow-sm border rounded-md  border-[#00000015] focus:border-blue-600 outline-none w-14 h-10"
                      />
                      <Field
                        type="email"
                        name="email"
                        className="px-3 shadow-sm border rounded-md  border-[#00000015] focus:border-blue-600 outline-none w-14 h-10"
                      />
                      <Field
                        type="email"
                        name="email"
                        className="px-3 shadow-sm border rounded-md  border-[#00000015] focus:border-blue-600 outline-none w-14 h-10"
                      />
                      <Field
                        type="email"
                        name="email"
                        className="px-3 shadow-sm border rounded-md border-[#00000015] focus:border-blue-600 outline-none w-14 h-10"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3 shadow-sm border border-[#00000015] outline-none w-56 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
                    >
                      Submit
                    </button>
                  </>
                </Form>
              )}
            </Formik>
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
