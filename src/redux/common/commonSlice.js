import { createSlice } from '@reduxjs/toolkit';
import * as responceHandler from './handleCommonResponceActions';
import * as actionCheker from '../checkAction';

const initialState = {
  isLoading: false,
  error: null,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  extraReducers: buider => {
    buider
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

export const commonReducer = commonSlice.reducer;
