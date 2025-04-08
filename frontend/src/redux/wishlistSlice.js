import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('wishlist')) || [];

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const index = state.findIndex((id) => id === action.payload);
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(action.payload);
      }
      localStorage.setItem('wishlist', JSON.stringify(state));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;