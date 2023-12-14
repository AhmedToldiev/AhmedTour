import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from '../../../components/types/auth';
import { thunkCheckAuth, thunkLogin, thunkRefreshToken } from './checkAuthThunk';

const initialState: AuthState = {
  accessToken: '',
  user: {
    status: 'pending',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkCheckAuth.fulfilled, (state, action) => action.payload);
    builder.addCase(thunkCheckAuth.rejected, (state, action) => {
      state.user.status = 'guest';
    });
    builder.addCase(thunkRefreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
    builder.addCase(thunkLogin.fulfilled, (state, action)=> {
        state.accessToken = action.payload.accessToken
        state.user = {...action.payload.user, status: 'authenticated'}
    })
  },
});

export default authSlice.reducer;
