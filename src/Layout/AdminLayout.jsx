import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/Header/Header';
function AdminLayout() {
  return (
    <>
    <div className='flex h-screen w-full'>
    <Sidebar/>
    <div className='h-auto flex-1 p-5 overflow-y-auto'>
    <Outlet />
    </div>
    </div>
    </>
  )
}

export default AdminLayout