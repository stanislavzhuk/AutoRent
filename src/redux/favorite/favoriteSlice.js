import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addToFavList(state, action) {
      return (state = [...state, action.payload]);
    },
    removeFromFavList(state, action) {
      return (state = state.filter(user => user !== action.payload));
    },
  },
});

export const { addToFavList, removeFromFavList } = favoriteSlice.actions;
