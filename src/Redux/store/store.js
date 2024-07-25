import { configureStore } from "@reduxjs/toolkit";
import jobDataslice from "../Features/jobDataslice";

export const  store  =configureStore({
    reducer:{
        jobdata:jobDataslice
    }
})