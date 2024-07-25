// jobdataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from "../../instence/axiosinstance";



export const fetchData = createAsyncThunk('jobdata/fetchData', async () => {
  const response = await axiosInstance.get('/');
  return response.data.jobData; 
});


const initialState = {
  Jobdata: [],
  status: 'idle', 
  error: null,
};


const jobDataslice = createSlice({
  name: 'jobdata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Jobdata = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default jobDataslice.reducer;
