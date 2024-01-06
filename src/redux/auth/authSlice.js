import { createSlice } from '@reduxjs/toolkit';
import * as operations from './authOperations';
import * as responceHandler from './handleAuthResponceActions';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLogin: false,
  isRefreshing: false,
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
      );
  },
});

export const authReducer = authSlice.reducer;
