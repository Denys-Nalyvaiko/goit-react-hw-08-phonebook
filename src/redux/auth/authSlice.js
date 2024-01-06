import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as operations from './authOperations';
import * as responceHandler from './handleAuthResponceActions';
import * as actionCheker from '../checkAction';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLogin: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const persistConfig = {
  key: 'root',
  storage,
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
      .addMatcher(actionCheker.isPendingAction, responceHandler.handlePending)
      .addMatcher(
        actionCheker.isFulfilledAction,
        responceHandler.handleFulfilled
      )
      .addMatcher(
        actionCheker.isRejectedAction,
        responceHandler.handleRejected
      );
  },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
