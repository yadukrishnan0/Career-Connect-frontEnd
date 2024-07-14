import React, { useState } from "react";
import Profilelogo from "../../assets/userProfile.png";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import axiosInstance from "../../instence/axiosinstance";
import { Construction } from "@mui/icons-material";
import { CiCircleMinus } from "react-icons/ci";

const Userprofile = ({ userdata, profileData }) => {
  const [skills, setSkills] = useState(profileData.skill); //data base skill
  const [Dataexperience, setDataExperince] = useState(profileData.experience);
  const [newSkill, setNewSkill] = useState(); // new skills add
  const [visible, setVisible] = useState(false);
  const [errMsg, setErrmsg] = useState("");
  const [expvisible, setExpvisible] = useState(false);
  const [newExperince, setNewExperince] = useState({
    company: "",
    location: "",
    experience: "",
    jobrole: "",
    startdate: "",
    enddate: "",
  });

  //delete skill and update skill using same api
  const addSkill = async () => {
    if (!newSkill.trim()) {
      console.error("Skill cannot be empty");
      return;
    }

    try {
      const response = await axiosInstance.post("/updateskill", {
        skill: newSkill,
      });

      if (response.status === 200) {
        setSkills([...skills, { skill: newSkill }]);
        setNewSkill("");
      } else {
        console.error("Failed to add skill:", response?.statusText);
      }
    } catch (error) {
      if (error) {
        setErrmsg(error?.response?.data?.message);
        setTimeout(() => {
          setErrmsg("");
        }, 2000);
      }
    }
  };
  // deleted skill
  const deleteskill = async (skill) => {
    try {
      const response = await axiosInstance.post(`/updateskill?skill=${skill}`, {
        skill: newSkill,
      });
      if (response.status == 200) {
        const filterskill = skills.filter((val) => {
          return val.skill != skill;
        });
        setSkills(filterskill);
      }
    } catch (err) {}
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setNewExperince({
      ...newExperince,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const { company, location, experience, jobrole, startdate, enddate } =
      newExperince;
    if (
      !company.trim() ||
      !location.trim() ||
      !experience.trim() ||
      !jobrole.trim() ||
      !startdate.trim() ||
      !enddate.trim()
    ) {
      setErrmsg("please fill the");
      return setTimeout(() => {
        setErrmsg("");
      }, 2000);
    }

    try {
      const response = await axiosInstance.post(
        "/updateexperience",
        newExperince
      );

      if (response.status == 200) {
        setDataExperince([...Dataexperience, newExperince]);
        setExpvisible(false);
      }
    } catch (err) {}
  };
  return (
    <div className="max-w-4xl mx-auto bg-white  rounded-lg overflow-hidden">
      <div className="bg-white p-6 relative">
        <div className="flex items-center space-x-4">
          <img
            className="w-20 h-20 rounded-full border-4 "
            src={Profilelogo}
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-semibold">{userdata.name}</h2>
            <p className="text-sm text-gray-600">MERN STACK DEVELOPER</p>
            <p className="text-sm text-gray-600">Eranad, Kerala, India</p>
          </div>
        </div>
      </div>

      <div className=" bg-white shadow-md  overflow-hidden p-6">
        <div className="flex justify-between items-center w-full"></div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">Contact Info</h3>
          <div className="mt-2">
            <div className="flex items-center mt-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Phone"
                className="h-6 w-6 mr-2"
              />

              <div>
                <p className="text-blue-600 hover:underline">
                  +91 {userdata.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
                className="h-6 w-6 mr-2"
              />
              <div>
                <a
                  href="mailto:yadhu4507@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  {userdata.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-lg  p-4 ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Education</h2>

            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">{profileData.institution}</h3>
            <p className="text-sm text-gray-600">{profileData.education}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border-1 border-black">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Experince</h2>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700">
                <FaPlus
                  onClick={() => {
                    setVisible(false);
                    setExpvisible(true);
                  }}
                />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </div>
          {Dataexperience.map((val, index) => (
            <div key={index}>
              <h3 className="font-semibold">{val.company}</h3>
              <p className="text-sm text-gray-600">
                {val.jobrole.toUpperCase()}
              </p>
              <p className="text-sm text-gray-600">
                Experience :{val.experience}
              </p>
              <p className="text-sm text-gray-600">
                {" "}
                {new Date(val.startdate).toLocaleDateString()}-
                {new Date(val.enddate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Skills</h2>
            <button className="text-gray-400 hover:text-gray-600">
              {visible ? (
                <CiCircleMinus
                  onClick={() => {
                    visible ? setVisible(false) : setVisible(true);
                  }}
                />
              ) : (
                <FaPlus
                  onClick={() => {
                    visible ? setVisible(false) : setVisible(true);
                  }}
                />
              )}
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex text-center"
              >
                {skill.skill}
                <button className="text-gray-400 hover:text-gray-600">
                  <IoMdClose
                    onClick={() => {
                      deleteskill(skill.skill);
                    }}
                  />
                </button>
              </span>
            ))}
          </div>

          <div className={`${visible ? "flex" : "hidden"} mt-2  flex-col`}>
            <div>
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add new skill"
                className="border p-1 rounded-l-lg"
              />
              <button
                onClick={addSkill}
                className="bg-blue-500 text-white p-1 rounded-r-lg"
              >
                Add Skill
              </button>
            </div>

            <p>{errMsg}</p>
          </div>
        </div>
      </div>

      <div
        className={`w-full   bg-[#ffffffca]  h-screen inset-0 absolute  ${
          expvisible ? "flex" : "hidden"
        }  justify-center`}
      >
        <div className="w-1/3 bg-white shadow-md rounded-lg p-2  relative top-36 h-[550px] ">
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-700">
                jobrole*
              </label>
              <IoMdClose
                onClick={() => {
                  setExpvisible(false);
                }}
              />
            </div>

            <input
              type="text"
              placeholder="jobrole"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              name="jobrole"
              value={newExperince.jobrole}
              onChange={handlechange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Company name*
            </label>
            <input
              type="text"
              placeholder="Ex: Microsoft"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              name="company"
              value={newExperince.company}
              onChange={handlechange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Location*
            </label>
            <input
              type="text"
              placeholder="Ex: London, United Kingdom"
              name="location"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={newExperince.location}
              onChange={handlechange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Experience*
            </label>
            <input
              type="text"
              placeholder="Ex: London, United Kingdom"
              name="experience"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={newExperince.experience}
              onChange={handlechange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Startdate*
            </label>
            <input
              type="date"
              placeholder="Ex: London, United Kingdom"
              name="startdate"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={newExperince.startdate}
              onChange={handlechange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Enddate*
            </label>
            <input
              type="date"
              placeholder="Ex: London, United Kingdom"
              name="enddate"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={newExperince.enddate}
              onChange={handlechange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleSubmit}
          >
            Save
          </button>
          <p className="text-red-600 w-full flex p-2 justify-center">
            {errMsg}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
