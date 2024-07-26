import React, { useEffect } from "react";
import BoyPic from "../../assets/Illustration.png";
import Cards from "../../components/Cards/Cards";
import HowToworks from "../../components/how works/HowToworks";
import { FaRegUser } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import arrowImg from "../../assets/arrows.png";
import ReverseArrow from "../../assets/arrow-reverse.png";
import JobListing from "../../components/JobListing/JobListing";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Features/jobDataslice";


function UserHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const jobs = useSelector((state) => state.jobdata.Jobdata);
  const status = useSelector((state) => state.jobdata.status);
  const error = useSelector((state) => state.jobdata.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  return (
    <>
      <div className="main w-full flex flex-col md:flex-row justify-evenly items-center bg-customGray gap-5">
        <div className="right flex flex-col items-center gap-4">
          <div>
            <h1 className="md:text-[2rem] text-[2rem] font-noto-sans lg:text-[2.5rem]">
              Find a job that suits
            </h1>
            <h1 className="md:text-[2rem] text-[2rem] font-noto-sans lg:text-[2.5rem]">
              your interest & skills
            </h1>
          </div>
          <h1 className="md:w-[34rem] w-[15rem] text-gray-500">
            Welcome to careerConnect, where you can find exciting job chances in India's
            growing gig economy. Discover jobs that let you work when you want,
            learn new things, and earn money on your own schedule. Join our
            community of motivated people and begin creating your future today
          </h1>
          <button className="border-2 bg-customBlue text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="left">
          <img src={BoyPic} alt="" />
        </div>
      </div>

      {/* cards */}
      <div className="cards w-full flex flex-wrap no-wrap justify-center items-center bg-customGray gap-5 h-auto pb-10">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      {/* cards */}

      {/* how to career work */}
      <HowToworks />
      {/* how to career work */}
      <div className="bg-customGray w-full h-auto flex items-center justify-center p-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-10">
          <div className="card relative w-60 h-52 flex flex-col justify-center items-center rounded-md gap-4">
            <div className="bg-white rounded-[100%] flex justify-center items-center h-10 w-10">
              <FaRegUser className="text-customBlue" />
            </div>
            <h1 className="font-medium text-customBlue">Create account</h1>
            <h1 className="text-gray-500">hjfhsdkhfksnkdjfhkjfksdjhxkjflsd</h1>
            <img
              src={arrowImg}
              alt=""
              className="absolute left-[9.5rem] top-[0.5rem] z-10 md:flex hidden"
            />
          </div>

          <div className="card relative w-60 h-52 bg-white flex flex-col justify-center items-center rounded-md gap-4">
            <div className="bg-customBlue rounded-[100%] flex justify-center items-center h-10 w-10">
              <IoCloudUploadOutline className="text-white" />
            </div>
            <h1 className="font-medium text-customBlue">Upload Resume</h1>
            <h1 className="text-gray-500">hjfhsdkhfksnkdjfhkjfksdjhxkjflsd</h1>
            <img
              src={ReverseArrow}
              alt=""
              className="absolute left-[9rem] top-[3.5rem] z-10 lg:flex hidden"
            />
          </div>

          <div className="card relative w-60 h-52 flex flex-col justify-center items-center rounded-md gap-4">
            <div className="bg-white rounded-[100%] flex justify-center items-center h-10 w-10">
              <FaSearchPlus className="text-customBlue" />
            </div>
            <h1 className="font-medium text-customBlue">
              Find your suitable job
            </h1>
            <h1 className="text-gray-500">hjfhsdkhfksnkdjfhkjfksdjhxkjflsd</h1>
            <img
              src={arrowImg}
              alt=""
              className="absolute left-[9.5rem] top-[0.5rem] z-10 md:flex hidden"
            />
          </div>

          <div className="card w-60 h-52 flex flex-col justify-center items-center rounded-md gap-4">
            <div className="bg-white rounded-[100%] flex justify-center items-center h-10 w-10">
              <MdOutlineVerified className="text-customBlue" />
            </div>
            <h1 className="font-medium text-customBlue">Apply job</h1>
            <h1 className="text-gray-500">hjfhsdkhfksnkdjfhkjfksdjhxkjflsd</h1>
          </div>
        </div>
      </div>

      {/* featured job */}
      <div className="h-auto w-[80%] mx-auto flex flex-col items-center justify-center">
        <div className="flex w-full my-10 h-auto justify-between items-center">
          <h1 className="text-[2rem] font-bold">Featured jobs</h1>
          <button
            className="px-6 py-2 text-customBlue rounded-md border-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => navigate('/filterjob')}
          >
            View All
          </button>
        </div>
        <div className="flex w-full flex-col gap-3">
          {status === 'loading' && <p>Loading...</p>}
          {status === 'failed' && <p>{error}</p>}
          {status === 'succeeded' && jobs.map((val) => (
            <JobListing key={val._id} jobs={val} />
          ))}
        </div>
      </div>
    </>
  );
}

export default UserHome;
