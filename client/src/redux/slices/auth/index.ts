import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from '../../../types/auth';
import {
  thunkCheckAuth,
  thunkLogin,
  thunkLogout,
  thunkRefreshToken,
  thunkSignup,
} from './checkAuthThunk';

const initialState: AuthState = {
  accessToken: '',
  user: {
    status: 'pending',
  },
  addCommentModalIsOpen: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registrModal: (state) => {
      state.addCommentModalIsOpen = !state.addCommentModalIsOpen;
    },
  },
  extraReducers(builder) {
    builder.addCase(thunkCheckAuth.fulfilled, (state, action) => action.payload);
    builder.addCase(thunkCheckAuth.rejected, (state, action) => {
      state.user.status = 'guest';
    });
    builder.addCase(thunkRefreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
    builder.addCase(thunkLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'authenticated' };
    });

    builder.addCase(thunkSignup.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'authenticated' };
    });
    builder.addCase(thunkLogout.fulfilled, (state, action) => {
      state.user.status = 'guest';
    });

  },
});

export const { registrModal } = authSlice.actions;

export default authSlice.reducer;
