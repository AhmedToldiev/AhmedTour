import { createSlice } from '@reduxjs/toolkit';
import type { TourSlicesState } from '../../../types/tour/tour';
import { thunkTourLoad } from './createAsyncThunk';

const initialState: TourSlicesState = {
  tours: [],
};

export const tourSlice = createSlice({
  name: 'regions',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(thunkTourLoad.fulfilled, (state, action) => {
        // console.log(action.payload);
      state.tours = action.payload;
    });
    builder.addCase(thunkTourLoad.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});
 
export default tourSlice.reducer