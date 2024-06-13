import React from "react";
import ErrorRobert from "../../assets/error.svg";
function Error() {
  return (
    <>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center ">
        <div className="right">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Oops! Page not found</h1>
              <p className="mb-4">
                Something went wrong. It's look like the link is broken or the
                page is removed.
              </p>
              <div className="space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Home
                </button>
                <button className="bg-gray-200 text-black px-4 py-2 rounded">
                  Go Back
                </button>
              </div>    
            </div>
          </div>
        </div>
        <div className="left md:flex hidden">
          <img src={ErrorRobert} alt="" className=" h-auto w-auto" />
        </div>
      </div>
    </>
  );
}

export default Error;
