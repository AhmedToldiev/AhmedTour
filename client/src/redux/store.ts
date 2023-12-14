import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import regionsReducer from './slices/region/regionSlice';

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    regionSlice: regionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
