import { createAsyncThunk } from '@reduxjs/toolkit';
import HistoryService from '../../../services/historyService';

export const thunkAllTourLoad = createAsyncThunk('historySlice/thunkAllTourLoad', async () =>
  HistoryService.getAllTours(),
);

export const a = 3;
