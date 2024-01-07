import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialFilterState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
