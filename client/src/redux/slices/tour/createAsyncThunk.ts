import { createAsyncThunk } from '@reduxjs/toolkit';
import TourService from '../../../services/tours';

export const thunkTourLoad = createAsyncThunk('tourSlice/thunkTourLoad', async () =>
  TourService.getTour(),
);

export const a = 3;
