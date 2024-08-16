import React, { useEffect, useState } from "react";
import Profilefrom from "../../components/compltePofile/Profilefrom";
import axiosInstance from "../../instence/axiosinstance";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Userprofile from "./Userprofile";
import { Email } from "@mui/icons-material";
import ScrollToTop from "../../utilities/ScrollToTop";
function ComplteProfile() {
  const [profileData, setProfileData] = useState("");
  const [profileExist, setProfileExist] = useState(false);
  const [userdata, setUserdata] = useState("");
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    name: "",
    education: "",
    institution: "",
    experience: "",
    company: "",
    dob: "",
    location: "",
    jobrole: "",
    startdate:"",
    enddate:"",
    skill: [{ skill: "" }],
    language: [{ language: "" }],
  });

  useEffect(() => {
    
    const fetchData = async () => {
      const token = localStorage.getItem("user");
      try {
        const response = await axiosInstance.get("/profile");
        if (response.status == 200) {
          console.log(response)
          const user = response?.data?.existUser;
          const userprofile = response?.data?.profiledata;
          setInitialValues({ ...initialValues, name: user.name });
          setProfileData(userprofile);
          setUserdata(user);
          setProfileExist(true);
        }
      } catch (err) {
        setProfileExist(false);
      }
    };

    fetchData();
  },[]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const token = localStorage.getItem("user");
    const Data = values;

    try {
      const response = await axiosInstance.post("/profile", Data, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token here
        },
      });
      if (response.status == 200) {
        setProfileData(response.data.profileDatas);
        setUserdata(response.data.exisitUser);
        setProfileExist(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="overflow-y-auto w-full h-full  ">
        {profileExist ? (
          <Userprofile userdata={userdata} profileData={profileData} />
        ) : (
          <Profilefrom initialValues={initialValues} onSubmit={handleSubmit} />
        )}
      </div>
    </>
  );
}

export default ComplteProfile;
