import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupValidation } from '../../utilities/SIgnupYup';
function Signupform({ Nameplaceholder,initialValues,hanldeSumbit }) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={hanldeSumbit}
        validationSchema={SignupValidation}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            
              <Field
                type="text"
                name={Nameplaceholder === 'Employee' ? 'Name' : 'Companyname'}
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder={Nameplaceholder === 'Employee' ? 'Name' : 'Company Name'}
              />
          
              <Field
                type="email"
                name="email"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Email"
              />
              <Field
                type="text"
                name="phone"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Phone"
              />
              <Field
                type="password"
                name="password"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Password"
              />
              <Field
                type="password"
                name="ConfirmPassword"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Confirm Password"
              />
              <button
                type="submit"
                className="px-3 shadow-sm border border-[#00000015] outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
              >
                Create Account
                <FaArrowRightLong />
              </button>
              <h1 className="text-blue-400">Already have an account? Login</h1>
          
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Signupform;
