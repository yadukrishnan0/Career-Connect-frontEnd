import React from "react";
import { FaBriefcase } from "react-icons/fa";
function Card() {
  return (
    <>
      <div className=" p-4 rounded-lg shadow-md flex items-center w-64 bg-white">
        <div className="bg-blue-00 p-4 rounded-md border-2 border-customBlue">
          <FaBriefcase />
        </div>
        <div className="ml-4">
          <div className="text-lg font-semibold text-customBlue">112,3,67</div>
          <div className="text-customBlue">Live job</div>
        </div>
      </div>
    </>
  );
}
export default Card;
