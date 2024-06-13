import React from "react";
import worldImg from "../../assets/4901198.jpg";
import imge2 from "../../assets/analysis.svg";

function HowToworks() {
  return (
    <>
      <div className="w-full bg-white flex  justify-center h-auto pb-5">
        <h1 className="text-[2rem] font-roboto py-7">
          How Carrer-Connect Works
        </h1>
      </div>

      <div className="w-full flex flex-col items-center   bg-white md:flex-row ">
        <div className="w-1/4 h-auto flex justify-around">
          <img
            src={worldImg}
            alt=""
            className="max-w-[320px] min-w-[250px] h-auto w-auto"
          />
        </div>

        <div className="w-1/2 flex gap-6  items-center flex-col flex-1 justify-around ">
          <h1 className="font-bold text-customBlue text-[1.2rem] ">Employee</h1>
          <h1 className="w-[25rem] text-gray-500">
            Your premier destination for streamlined recruitment solutions. Our
            platform empowers companies of all sizes to efficiently manage their
            hiring processes with ease
          </h1>
          <h1 className="font-bold text-customBlue text-[1.2rem] ">Company</h1>
          <h1 className="w-[25rem] text-gray-500">
            Our mission is to empower job seekers with the tools and resources
            they need to find the perfect job.
          </h1>
        </div>

        <div className="w-1/4">
          <img src={imge2} alt=""   className="max-w-[320px] min-w-[250px] h-auto w-auto" />
        </div>
      </div>
    </>
  );
}

export default HowToworks;
