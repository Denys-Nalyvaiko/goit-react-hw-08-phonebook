import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as operations from './authOperations';
import * as responceHandler from './handleAuthResponceActions';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLogin: false,
  isRefreshing: false,
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        operations.signupUser.fulfilled,
        responceHandler.handleSignupUserFulfilled
      )
      .addCase(
        operations.loginUser.fulfilled,
        responceHandler.handleLoginUserFulfilled
      )
      .addCase(
        operations.logoutUser.fulfilled,
        responceHandler.handleLogoutUserFulfilled
      )
      .addCase(
        operations.fetchCurrentUser.pending,
        responceHandler.handleFetchCurrentUserPending
      )
      .addCase(
        operations.fetchCurrentUser.fulfilled,
        responceHandler.handleFetchCurrentUserFulfilled
      )
      .addCase(
        operations.fetchCurrentUser.rejected,
        responceHandler.handleFetchCurrentUserRejected
      );
  },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
