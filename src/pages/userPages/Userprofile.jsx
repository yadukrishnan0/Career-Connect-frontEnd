import React, { useState } from "react";
import Profilelogo from '../../assets/userProfile.png'
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import axiosInstance from "../../instence/axiosinstance";
const Userprofile = ({userdata,profileData}) => {

  const[skills,setSkills]=useState(profileData.skill)
  const[newSkill,setNewSkill]=useState()
  const[visible,setVisible]=useState(false);

  const addSkill = async () => {
    const token = localStorage.getItem('user');
  
    if (!newSkill.trim()) {
      console.error('Skill cannot be empty');
      return;
    }
  
    try {
      const response = await axiosInstance.post('/updateskill', { skill: newSkill }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        setSkills([...skills, { skill: newSkill }]);
        setNewSkill('');
      } else {
        console.error('Failed to add skill:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while adding the skill:', error);
    }
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
      <div className="flex justify-between items-center w-full">
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">Contact Info</h3>
        <div className="mt-2">

          <div className="flex items-center mt-2">
          <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" className="h-6 w-6 mr-2" />

            <div>
              
              <p className="text-blue-600 hover:underline">
             +91 {userdata.phone}
              </p>
            </div>
          </div>


          <div className="flex items-center mt-4">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="h-6 w-6 mr-2" />
            <div>
              
              <a href="mailto:yadhu4507@gmail.com" className="text-blue-600 hover:underline">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
        </div>
      </div>
      {profileData.experience.map((val,index)=>(
   <div key={index}>
        <h3 className="font-semibold">{val.company}</h3>
        <p className="text-sm text-gray-600">Mern STACK DEVELOPER</p>
</div>
))}
    </div>



    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Skills</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <FaPlus onClick={()=>{visible ? setVisible(false) : setVisible(true)}}/>
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex text-center">
            {skill.skill}<button className="text-gray-400 hover:text-gray-600">
          <IoMdClose/>
        </button>
          </span>
        ))}
      </div>

      <div className={`${visible ? 'flex' : 'hidden'} mt-2`}>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add new skill"
            className="border p-1 rounded-l-lg"
          />
          <button onClick={addSkill} className="bg-blue-500 text-white p-1 rounded-r-lg">
            Add Skill
          </button>
        </div>
        
    </div>



</div>

    </div>
  );
};

export default Userprofile;
