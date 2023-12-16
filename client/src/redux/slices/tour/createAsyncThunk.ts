import { createAsyncThunk } from '@reduxjs/toolkit';
import TourService from '../../../services/tours';
import type { TourType } from '../../../types/tour/tour';

export const thunkTourLoad = createAsyncThunk('tourSlice/thunkTourLoad', async () =>
  TourService.getTour(),
);
export const thunkTourDelete = createAsyncThunk(
  'tourSlice/thunkTourDelete',
  async (id: TourType['id']) => TourService.deleteTour(id),
);

export const a = 3;
