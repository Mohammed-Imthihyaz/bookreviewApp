import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;