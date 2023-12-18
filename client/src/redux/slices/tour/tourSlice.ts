import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TourSlicesState, TourType } from '../../../types/tour/tour';

import { thunkEditTour, thunkTourAdd, thunkTourDelete, thunkTourLoad } from './createAsyncThunk';

const initialState: TourSlicesState = {
  tours: [],
  selectedTour: null,
  addTourModalIsOpen: false,
  editTourModalIsOpen: false,
};

export const tourSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    addTourModal: (state) => {
      state.addTourModalIsOpen = !state.addTourModalIsOpen;
    },
    editTourModal: (state) => {
      state.editTourModalIsOpen = !state.editTourModalIsOpen;
    },
    setTours: (state, action: PayloadAction<TourType[]>) => {
      state.tours = action.payload;
    },
    setSelectedTour: (state, action: PayloadAction<TourSlicesState['selectedTour']>) => {
      state.selectedTour = action.payload;
    },
    clearSelectedTour: (state) => {
      state.selectedTour = null;
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
    builder.addCase(thunkTourAdd.fulfilled, (state, action) => {
      state.tours.unshift(action.payload);
    });

    builder.addCase(thunkEditTour.fulfilled, (state, action) => {
      const index = state.tours.findIndex((tour) => tour.id === action.payload.id);
      if (index !== -1) {
        state.tours[index] = action.payload;
      }
      state.selectedTour = null;
    });

    builder.addCase(thunkTourDelete.fulfilled, (state, action) => {
      console.log(action.payload, '+++++++++++++++++++');

      const indexTour = state.tours.findIndex((tour) => tour.id === action.payload);
      if (indexTour !== -1) {
        state.tours.splice(indexTour, 1);
      }
      state.selectedTour = null;
    });
  },
});
export const { setTours,clearSelectedTour,setSelectedTour,addTourModal, editTourModal } = tourSlice.actions;

export default tourSlice.reducer;
