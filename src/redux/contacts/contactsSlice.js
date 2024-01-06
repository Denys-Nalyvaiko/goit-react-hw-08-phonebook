import { createSlice } from '@reduxjs/toolkit';
import * as operations from './contactsOperations';
import * as responceHandlers from './handleContactsResponceActions';

const initialState = {
  list: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        operations.fetchContacts.fulfilled,
        responceHandlers.handleFetchContactsFulfilled
      )
      .addCase(
        operations.addContact.fulfilled,
        responceHandlers.handleAddContactFulfilled
      )
      .addCase(
        operations.deleteContact.fulfilled,
        responceHandlers.handleDeleteContact
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
