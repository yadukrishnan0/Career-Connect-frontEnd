import React from "react";
import BoyPic from "../../assets/Illustration.png";
import Button from "../../components/shared/Button";
function UserHome() {
  return (
    <>
      <div className="main w-fll flex justify-evenly items-center bg-customGray gap-5 p-10">
        <div className="right">
          <div>
            <h1 className="text-[3.2rem] font-noto-sans">
              Find a job that suits
            </h1>
            <h1 className="text-[3.2rem] font-noto-sans">
              your interest & skills
            </h1>
          </div>
          <h1 className="w-[34rem]">
            Welcome to GoGig, where you can find exciting job chances in India's
            growing gig economy. Discover jobs that let you work when you want,
            learn new things, and earn money on your own schedule. Join our
            community of motivated people and begin creating your future today
          </h1>
          < Button childern='d' />
        </div>
        <div className="left">
          <img src={BoyPic} alt="" />
        </div>
      </div>
    </>
  );
}

export default UserHome;
