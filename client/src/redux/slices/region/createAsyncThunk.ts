import { createAsyncThunk } from '@reduxjs/toolkit';
import RegionService from '../../../services/regions';

export const thunkRegionLoad = createAsyncThunk('regionSlices/thunkRegionLoad', async () =>

  RegionService.getRegion(),
);

export 
