import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/components/counter/counterSlice';
import datasetReducer from '../services/datasetSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dataset: datasetReducer,
  },
});
