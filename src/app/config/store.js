import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/components/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
