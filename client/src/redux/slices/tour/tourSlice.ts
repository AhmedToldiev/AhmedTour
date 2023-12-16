import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TourSlicesState, TourType } from '../../../types/tour/tour';
import { thunkTourDelete, thunkTourLoad } from './createAsyncThunk';

const initialState: TourSlicesState = {
  tours: [],
  currentTour: null,
};

export const tourSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    setTours: (state, action: PayloadAction<TourType[]>) => {
      state.tours = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkTourLoad.fulfilled, (state, action) => {
      console.log(action.payload);
      state.tours = action.payload;
    });
    builder.addCase(thunkTourLoad.rejected, (state, action) => {
      console.log(action.error);
    });
    builder.addCase(thunkTourDelete.fulfilled, (state, action) => {
      const indexTour = state.tours.findIndex((tour) => tour.id === action.payload);
      if (indexTour !== -1) {
        state.tours.splice(indexTour, 1);
      }
      state.currentTour = null
    });
  },
});
export const { setTours } = tourSlice.actions;

export default tourSlice.reducer;
