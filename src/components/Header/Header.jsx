import React, { useCallback, useEffect, useState } from "react";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { debounce } from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { fetchData, searchJob } from "../../Redux/Features/jobDataslice";

function Header() {
  const [searchInput, setSearchInput] = useState('');
 
  const status = useSelector((state) => state.jobdata.status);

 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialize debounce with a delay of 300ms
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      dispatch(searchJob(searchTerm));
    }, 300),
    [dispatch]
  );

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    debouncedSearch(value);
  };

  return (
    <>
      <div className="w-full bg-customGray flex justify-between items-center h-16 p-4">
        <div>
          <h1 className="font-medium text-[1.1rem]">Career-Connect</h1>
        </div>
        <div className="sm:flex gap-14 hidden">
          <Link to='/'>
            <h1 className="hover:border-b-customBlue hover:border-b-2 hover:text-customBlue">
              Home
            </h1>
          </Link>
          <h1 className="hover:border-b-customBlue hover:border-b-2 hover:text-customBlue">
            Jobs
          </h1>
          <h1 className="hover:border-b-customBlue hover:border-b-2 hover:text-customBlue">
            My Jobs
          </h1>
          <h1 className="hover:border-b-customBlue hover:border-b-2 hover:text-customBlue">
            Customer Support
          </h1>
        </div>

        <div className="hidden sm:flex">
          <Button label="Sign in" />
        </div>
        <div className="flex sm:hidden">
          <CiMenuBurger />
        </div>
      </div>

      <div className="flex justify-around p-2 border-b-2">
        <div className="flex border border-gray-300 rounded-lg shadow-sm p-2 md:w-1/4">
          <input
            type="text"
            placeholder="Job title, keyword, company"
            className="flex-grow ml-2 outline-none text-sm text-gray-700"
            value={searchInput}
            onChange={handleSearch} // Use handleSearch function directly
          />
          <button className="ml-2 text-gray-500 focus:outline-none">
            <IoSearchOutline />
          </button>
        </div>

        <div className="sm:flex hidden items-center justify-center gap-3">
          <IoNotificationsOutline />
          <FaRegUser
            onClick={() => { navigate('/profile'); }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
