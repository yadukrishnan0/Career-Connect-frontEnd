// jobdataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from "../../instence/axiosinstance";



export const fetchData = createAsyncThunk('jobdata/fetchData', async () => {
  const response = await axiosInstance.get('/');
  return response.data.jobData; 
});


const initialState = {
  Jobdata: [],
  filterJobDatas:[],
  status: 'idle', 
  error: null,
};


const jobDataslice = createSlice({
  name: 'jobdata',
  initialState,
  reducers: {
    searchJob: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.Jobdata =state.filterJobDatas.filter(job =>
        job.jobTitle.toLowerCase().includes(searchTerm) 
        // job.description.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Jobdata = action.payload;
        state.filterJobDatas=action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { searchJob } = jobDataslice.actions;
export default jobDataslice.reducer;
