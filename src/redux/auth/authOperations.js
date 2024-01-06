import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/defaultInstance';
import * as authAPI from 'api/authApi';

const token = {
  set(tokenValue) {
    instance.defaults.headers.common.Authorization = `Bearer ${tokenValue}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await authAPI.signupUser(user);
      token.set(data.token);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await authAPI.loginUser(user);
      token.set(data.token);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await authAPI.logoutUser(user);
      token.unset();
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    try {
      const { data } = await authAPI.fetchCurrentUser();
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
