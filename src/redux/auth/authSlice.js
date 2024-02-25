import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { initialState } from './initialAuthState';
import { persistConfig } from './persistConfig';
import * as operations from './authOperations';
import * as responceHandler from './handleAuthResponceActions';

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
      )
      .addCase(
        operations.updateUserAvatar.fulfilled,
        responceHandler.handleUpdateUserAvatarFulfilled
      );
  },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
