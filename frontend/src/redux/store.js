import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carSlice';
import wishlistReducer from './wishlistSlice';

const store = configureStore({
  reducer: {
    cars: carReducer,
    wishlist: wishlistReducer,
  },
});

export default store;