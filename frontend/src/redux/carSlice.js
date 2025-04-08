import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'cars',
  initialState: [],
  reducers: {
    addCars: (state, action) => {
        return action.payload;
    }
  },
});

export const { addCars } = carSlice.actions;

export default carSlice.reducer;