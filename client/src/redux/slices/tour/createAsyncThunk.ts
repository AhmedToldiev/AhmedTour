import { createAsyncThunk } from '@reduxjs/toolkit';
import TourService from '../../../services/tours';
import BasketService from '../../../services/baskets';

export const thunkTourLoad = createAsyncThunk('tourSlice/thunkTourLoad', async () =>
  TourService.getTour(),
);
export const thunkAddBasket = createAsyncThunk('basketSlice/thunkBasketAdd', async (formData) =>
  BasketService.addToBasket(formData),
);

export const thunkBasketLoad = createAsyncThunk('basketSlice/', async () =>
  BasketService.getTourBasket(),
);

export const a = 3;
