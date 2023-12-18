import { createAsyncThunk } from '@reduxjs/toolkit';
import TourService from '../../../services/tours';
import type { AddTourFormData, TourType } from '../../../types/tour/tour';

export const thunkTourLoad = createAsyncThunk('tourSlice/thunkTourLoad', async () =>
  TourService.getTour(),
);
export const thunkEditTour = createAsyncThunk(
  'commentsSlice/thunkEditComment',
  async ({ formData, id }: { formData: AddTourFormData; id: TourType['id'] }) =>
  TourService.editTour(formData, id),
);

// export const a = 3;
