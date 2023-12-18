import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TourSlicesState, TourType } from '../../../types/tour/tour';
import { thunkAddBasket, thunkBasketLoad, thunkTourLoad } from './createAsyncThunk';


const initialState: TourSlicesState = {
  tours: [],
  favoriteTours: [],
  basket: [],
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
    builder.addCase(thunkAddBasket.fulfilled, (state, action) => {
      console.log(state.tours);
      state.favoriteTours.push(state.tours.filter((tour) => tour.id === action.payload.tourId)[0]);
    });
    builder.addCase(thunkBasketLoad.fulfilled, (state, action) => {
      state.basket = action.payload;
    });
  },
});
export const { setTours } = tourSlice.actions;

export default tourSlice.reducer;
