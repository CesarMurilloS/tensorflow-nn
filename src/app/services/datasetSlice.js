import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
    dataset: null,
    trainingData: null,
    testingData: null
}

const datasetSlice = createSlice({
    name: 'dataset',
    initialState,
    reducers: {
        SET__DATASET: (state, action) => {
            state.dataset = action.payload.dataset
        },
        SET__TRAINING_DATA: (state, action) => {
            state.trainingData = action.payload.trainingData
        },
        SET__TESTING_DATA: (state, action) => {
            state.testingData = action.payload.testingData
        }        
    }
});

export const { SET__TRAINING_DATA, SET__TESTING_DATA } = datasetSlice.actions

export const SELECT__DATASET = (state) => state.auth.dataset
export const SELECT__TRAINING_DATA = (state) => state.auth.trainingData
export const SELECT__TESTING_DATA = (state) => state.auth.testingData

// Reducer combiner
const reducer = combineReducers({
    dataset: datasetSlice.reducer
});

export default reducer