import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContactAction(_, { payload }) {
      return payload;
    },
  },
});

export const { filterContactAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;