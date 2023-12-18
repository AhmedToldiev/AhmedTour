import { createAsyncThunk } from '@reduxjs/toolkit';

import type { AddTourFormData, TourType } from '../../../types/tour/tour';
import TourService from '../../../services/tours';

export const thunkTourLoad = createAsyncThunk('tourSlice/thunkTourLoad', async () =>
  TourService.getTour(),
);
export const thunkTourAdd = createAsyncThunk(
  'tourSlice/thunkAddTour',
  async (formData: AddTourFormData) => TourService.addTour(formData),
);
export const thunkEditTour = createAsyncThunk(
  'commentsSlice/thunkEditComment',
  async ({ formData, id }: { formData: AddTourFormData; id: TourType['id'] }) =>
    TourService.editTour(formData, id),
);
export const thunkTourDelete = createAsyncThunk(
  'tourSlice/thunkTourDelete',
  async (id: TourType['id']) => TourService.deleteTour(id),
);
