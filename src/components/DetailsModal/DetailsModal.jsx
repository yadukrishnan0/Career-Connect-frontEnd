import React, { useEffect } from "react";
import { MdClear } from "react-icons/md";
function DetailsModal({companyDetails,handleclick}) {

  return (
    <>
      <div className="fixed ins inset-0 flex justify-center items-center">
        <div className="bg-white w-[80%] min-h-[90%] h-auto shadow-box rounded-md border-2 border-gray-400">
          <div className="w-full h-52 flex flex-col">
            <div className="w-full h-52 flex">
              <div className="h-full flex-1 flex flex-col gap-3 pt-5 pl-12 pr-2">
                <div className="flex mt-5 justify-between">
                  <span className="flex w-[49.5%] flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[.75rem] font-inter opacity-90"
                    >
                      Company Name
                    </label>
                    <input
                      spellCheck={false}
                      className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                      type="text"
                      name="fullname"
                      value={companyDetails[0]?.companyId?.Companyname}
                    />
                  </span>
                  <span className="flex w-[49.5%] flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[.75rem] font-inter opacity-90"
                    >
                      Mobile Number
                    </label>
                    <input
                      spellCheck={false}
                      className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      type="number"
                      name="mobilenum"
                      value={companyDetails[0]?.companyId?.phone}
                    />
                  </span>
                </div>
                <div className="flex mt-5 justify-between">
                  <span className="flex w-[49.5%] flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[.75rem] font-inter opacity-90"
                    >
                      Email
                    </label>
                    <input
                      className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                      spellCheck={false}
                      type=""
                      name="dob"
                      value={companyDetails[0]?.companyId?.email}
                    />
                  </span>
                  <span className="flex w-[49.5%] flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[.75rem] font-inter opacity-90"
                    >
                      Gst Number
                    </label>
                    <input
                      className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                      name="gender"
                      value={companyDetails[0]?.Gst_Number}
                    />
                  </span>
                </div>
              </div>
              <div className="h-full w-[16rem] flex justify-center gap-4 flex-col items-center">
                <button className="" onClick={()=>handleclick()}><MdClear/></button>
                <div className="h-36 border shadow-md sm:w-32 w-24 mt-14">
                  <div className="w-auto flex h-[2rem] items-center">
                    <div className="my-4 p-2 px-4 bg-cusOrange text-white font-poppins font-medium text-[.7rem] rounded-sm">
                      CHOOSE FILE
                    </div>
                    <input
                      accept="image/*"
                      className="absolute opacity-0 w-24"
                      type="file"
                      encType="profile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto">
              <div className="h-full py-2 px-12 w-full">
                <div className="flex mt-5 justify-between">
                  <span className="flex w-[49.5%] flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[.75rem] font-inter opacity-90"
                    >
                      Company Register Number
                    </label>
                    <input
                      spellCheck={false}
                      className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                      type="text"
                      name="occupation"
                      value={companyDetails[0]?.Registration_Number}
                    />
                  </span>
                  <span className="flex w-[49.5%] flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[.75rem] font-inter opacity-90"
                    >
                      Sector
                    </label>
                    <input
                      className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                      name="referalsource"
                      value={companyDetails[0]?.Sector}
                    />
                  </span>
                </div>
                <div className="flex mt-5 justify-between">
                  <span className="flex w-[41.5%] flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[.75rem] font-inter opacity-90"
                    >
                      State
                    </label>
                    <input
                      spellCheck={false}
                      className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                      type="text"
                      name="state"
                      value={companyDetails[0]?.state}
                    />
                  </span>
                  <span className="flex w-[35.5%] flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[.75rem] font-inter opacity-90"
                    >
                      District
                    </label>
                    <input
                      spellCheck={false}
                      className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                      type="text"
                      name="district"
                      value={companyDetails[0]?.district}   
                    />
                  </span>
                  <span className="flex w-[21%] flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[.75rem] font-inter opacity-90"
                    >
                      Pincode
                    </label>
                    <input
                      spellCheck={false}
                      className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      type="number"
                      name="pincode"
                      value={companyDetails[0]?.pincode}
                    />
                  </span>
                </div>
                <div className="flex mt-5 mb-7 justify-between">
                  {/* <span className="flex w-[33.5%] flex-col gap-2">
                                            <label htmlFor="" className="text-[.75rem] font-inter opacity-90">City</label>
                                            <input
                                                spellCheck={false}
                                                className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                                                type="text"
                                                name="city"
                                            />
                                        </span> */}
                  {/* <span className="flex w-[35.5%] flex-col gap-2">
                                            <label htmlFor="" className="text-[.75rem] font-inter opacity-90">Landmark</label>
                                            <input
                                                spellCheck={false}
                                                className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                                                type="text"
                                                name="landmark"
                                            />
                                        </span> */}
                  {/* <span className="flex w-[26%] flex-col gap-2">
                                            <label htmlFor="" className="text-[.75rem] font-inter opacity-90">House No</label>
                                            <input
                                                spellCheck={false}
                                                className="h-[2.4rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full shadow-md border outline-none px-4 text-[.9rem]"
                                                type="number"
                                                name="houseno"
                                            />
                                        </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsModal;
