  import React from "react";
  import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
  import { HiDotsVertical } from "react-icons/hi";
  import { FaUsers } from "react-icons/fa";
  const JobCard = ({handleClick,actions}) => {
    return (
      <div className="flex items-center justify-around p-4 border-b border-gray-200">
        <div>
          <p className="md:text-lg text-sm ">UI/UX Designer</p>
          {/* <p className="text-sm text-gray-500">Full Time • 27 days remaining</p> */}
        </div>

        <span className="flex items-center text-green-600 mr-4">
          <TaskAltRoundedIcon />
          Active
        </span>
        <span className="flex items-center text-gray-500 mr-4 justify-center gap-2">
          <FaUsers className="text-[1.3rem] " />
          <p className="sm:text-lg "> 74 Applications</p>
        </span>

        <div className="flex items-center justify-center relative ">
          <button className="md:px-4 md:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 relative">
            View Applications
          </button>
          <HiDotsVertical className="text-[1.3rem]" onClick={handleClick}/>
      

          <div className={`bg-customGray w-32 h-16 ${actions?'flex':'hidden'} flex-col gap-2  rounded-md absolute inset-0 left-11 top-12 z-30 `}>
          <p className="border-b-2 h-1/2 cursor-pointer ">Expiry</p>
          <p className=" h-1/2 cursor-pointer">Delete</p>
        </div>

        
        </div>
        
      </div>
    );
  };

  export default JobCard;
