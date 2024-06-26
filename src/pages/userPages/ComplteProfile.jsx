import React, { useEffect, useState } from "react";
import Profilefrom from "../../components/compltePofile/Profilefrom";
import axiosInstance from "../../instence/axiosinstance";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ComplteProfile() {
  const [profileData, setProfileData] = useState("");
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: "",
    education: "",
    experience: "",
    company: "",
    dob: "",
    location: "",
    skill: [{ skill: "" }],
    language: [{ language: "" }],
  });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("user");
      try {
        const response = await axiosInstance.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token here
          },
        });
        if (response.status == 200) {
          const user = response?.data?.exisitUser;
          const userprofile = response?.data?.profiledata;
          setInitialValues({ ...initialValues, name: user.name });
          setProfileData(userprofile);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const token = localStorage.getItem("user");
    const Data = values;
    try {
      const response = await axiosInstance.post("/profile", Data, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token here
        },
      });
      if (response.status == 201) {
        setProfileData(Data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="overflow-y-auto w-full h-full  ">
        {profileData ? (
          <div>welcome profile</div>
        ) : (
          <Profilefrom initialValues={initialValues} onSubmit={handleSubmit} />
        )}
      </div>
    </>
  );
}

export default ComplteProfile;
