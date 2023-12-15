import { createSlice } from '@reduxjs/toolkit';
import { thunkRegionLoad } from './createAsyncThunk';
import type { RegionSlicesState } from '../../../types/region/region';


const initialState: RegionSlicesState = {
  regions: [],
};

export const regionSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkRegionLoad.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.regions = action.payload;
    });
    builder.addCase(thunkRegionLoad.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export default regionSlice.reducer;
