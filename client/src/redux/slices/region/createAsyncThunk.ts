import { createAsyncThunk } from '@reduxjs/toolkit';
import RegionService from '../../../services/regions';

export const thunkRegionLoad = createAsyncThunk('regionSlice/thunkRegionLoad', async () =>
  RegionService.getRegion(),
);

export const a = 3;
