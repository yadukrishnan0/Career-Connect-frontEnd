import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

 function Userlayout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
 }
 export default Userlayout;