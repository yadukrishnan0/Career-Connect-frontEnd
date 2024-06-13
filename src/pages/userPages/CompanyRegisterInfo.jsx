import React, { useState } from "react";
import CompanyImg from "../../assets/company.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import axiosInstance from "../../instence/axiosinstance";
import { useNavigate } from "react-router-dom";
function CompanyRegisterInfo() {
  const navigate =useNavigate()
  const[formData,setformData] =useState({
    Registration_Number:"",
    Gst_Number:"",
    Sector:"",
     state:'',
     district:'',
     pincode:'',
     logo:''
  });
  const[error,setError]=useState('')

  const hanldeChange =async(e)=>{
    const{name,value}=e.target;
    if (name === 'logo') {
      setformData({ ...formData, [name]: e.target.files[0] });
  } else {
      setformData({ ...formData, [name]: value });
  }
  }
  const handleSubmit =async (e)=>{
    e.preventDefault()
 if(formData.Gst_Number == '' || formData.Registration_Number == '' ||formData.state =="" ||formData.district =='' ||formData.pincode ==''){
       setError('Please fill the form')
       setTimeout(()=>{
        setError(' ')
       },2000)
 }else{
  const datas = formData;
  const newFormData =new FormData();
  newFormData.append('Gst_Number',formData.Gst_Number );
  newFormData.append('Registration_Number',formData.Registration_Number )
  newFormData.append('state',formData.state )
  newFormData.append('district',formData.district )
  newFormData.append('pincode',formData.pincode)
  newFormData.append('logo',formData.logo)
  newFormData.append('Sector',formData.Sector)
  console.log(newFormData)
  try{
     const response = await axiosInstance.post('/companydocuments',newFormData,{
      headers:{
        'Content-Type' :'multipart/form-data'
      }
     });
     if( response.status ==200){
      navigate('/login');
    }
  }catch(err){
    console.log(err)
  }
         
 }
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex shadow-md h-[500px]">
          <div className="right_div flex-1 flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-around">
              <h1 className="text-[1.5rem] font-thin">Register</h1>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit} encType="multipart/form-data">
              <input
                type="text"
                name="Registration_Number"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder=
                 "Registration Number"
                value={formData.Registration_Number}
                onChange={hanldeChange}
              />

              <input
                type="text"
                name="Gst_Number"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Gst Number"
                value={formData.Gst_Number}
                onChange={hanldeChange}
              />
              <input
                type="text"
                name="Sector"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Sector"
                value={formData.Sector}
                onChange={hanldeChange}
              />
              
              <input
                type="text"
                name="state"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="state"
                value={formData.state}
                onChange={hanldeChange}
              />
              <input
                type="text"
                name="district"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="District"
                value={formData.district}
                onChange={hanldeChange}
              />
              <input
                type="text"
                name="pincode"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="pincode"
                value={formData.pincode}
                onChange={hanldeChange}
              />
              <input
                type="file"
                name="logo"
                className="px-3 shadow-sm border border-[#00000015] focus:border-blue-600 outline-none w-96 h-10"
                placeholder="Logo"
                onChange={hanldeChange}
                accept="image/*"
              />
              <button
                type="submit"
                className="px-3 shadow-sm border border-[#00000015] outline-none w-96 h-10 bg-blue-500 text-white flex items-center justify-center gap-2"
               
              >
                Register
                <FaArrowRightLong />
              </button>
        
              <p className="text-red-600">{error}</p>
              <h1 className="text-blue-400">Already have an account? Login</h1>
            </form>
          </div>

          <div className="left_div flex-1 hidden md:flex ">
            <img
              src={CompanyImg}
              alt=""
              className="w-full p-10 object-fill h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyRegisterInfo;
