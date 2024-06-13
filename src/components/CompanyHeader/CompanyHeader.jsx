import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
function CompanyHeader() {
  return (
    <>
    <div className='w-full bg-customGray items-center justify-center hidden md:flex h-[56px]'>
      <div className='flex h-auto gap-6'>
         <p className='font-noto-sans'>Overview</p>
         <p className='font-noto-sans'>Find Candites</p>
         <p className='font-noto-sans'>Dashboard</p>
         <p className='font-noto-sans'>My Jobs</p>
         <p className='font-noto-sans'>Applications</p>
         <p className='font-noto-sans'>Customer supports</p>
      </div>
</div>

<div className=' flex justify-around items-center h-[64px] border-b-2 border-b-gray-300'>

<div className='left flex md:hidden'>
  <RxHamburgerMenu/>
</div>

<div className='left'>
  <p>Carrer-Connect</p>
</div>

<div className='right flex gap-6 items-center'>
  <  IoIosNotifications className='h-16 w-6'/>
  <button className='py-1 px-4  border-2 border-customBlue text-customBlue rounded-md'>Post A Jobs</button>
  <div><img src="" alt="" /></div>
</div>

</div>
    </>
  )
}

export default CompanyHeader;