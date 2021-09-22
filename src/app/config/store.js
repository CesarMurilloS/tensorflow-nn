import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/components/counter/counterSlice';
import dataReducer from '../services/datasetSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
});
