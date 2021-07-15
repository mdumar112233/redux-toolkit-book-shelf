import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Slice/BookSlices';

export const store = configureStore({
  reducer: {
    books : bookReducer
  },
});